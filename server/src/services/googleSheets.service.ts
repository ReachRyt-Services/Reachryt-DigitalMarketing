import crypto from 'crypto';
import { config } from '../config/env.js';
import { ConsultationInput } from '../middleware/validateConsultation.js';

/**
 * Exact columns verified from the live Google Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1j7J_furrab7YnEoMOJlSlRkTITZ7x0ewG0vQu87vDR4/edit
 *
 * Column A: "Full Name"
 * Column B: "Institution or Agency Name "
 * Column C: "Work Email Address"
 * Column D: "Phone / WhatsApp Number"
 * Column E: "Organisation Type"
 * Column F: "Primary Service Interest"
 * Column G: "Tell Us"
 */
export const VERIFIED_SHEET_COLUMNS = [
  'Full Name',
  'Institution or Agency Name ',
  'Work Email Address',
  'Phone / WhatsApp Number',
  'Organisation Type',
  'Primary Service Interest',
  'Tell Us',
] as const;

export interface SheetRowPayload {
  'Full Name': string;
  'Institution or Agency Name ': string;
  'Work Email Address': string;
  'Phone / WhatsApp Number': string;
  'Organisation Type': string;
  'Primary Service Interest': string;
  'Tell Us': string;
}

export interface GoogleSheetsSyncResult {
  synced: boolean;
  status: 'SYNCED' | 'PENDING_AUTH_CREDENTIALS' | 'SYNC_ERROR';
  statusDetail: string;
  spreadsheetId: string;
  sheetName: string;
  columnOrder: readonly string[];
  valuesArray: string[];
  preparedRow: SheetRowPayload;
}

const INSTITUTION_TYPE_LABELS: Record<ConsultationInput['institutionType'], string> = {
  school: 'School (Primary / Secondary / K-12)',
  college: 'College (Arts / Science / Engineering / Management)',
  university: 'University / Higher Education Institution',
  'coaching-training': 'Coaching / Training Institution',
  'educational-organization': 'Educational Organization / Trust',
  'agency-partner': 'Digital Agency (White-Label Partnership)',
};

const SERVICE_INTEREST_LABELS: Record<ConsultationInput['serviceInterest'], string> = {
  'whatsapp-automation': '01. WhatsApp Automation',
  'instagram-dm-workflows': '02. Instagram DM Workflows',
  'white-label-services': '03. White-Label Services (Your Brand, Our Engine)',
  'admission-campaign-marketing': 'Admission Campaign Marketing & PPC',
  'education-seo-digital-growth': 'Education SEO & Organic Growth',
  'full-stack-education-automation': 'Full-Stack Automation + Digital Marketing',
};

const base64UrlEncode = (input: string | Buffer): string =>
  Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

export class GoogleSheetsService {
  public isIntegrationConfigured(): boolean {
    return config.googleSheets.isConfigured;
  }

  public mapToSheetColumns(input: ConsultationInput): {
    preparedRow: SheetRowPayload;
    valuesArray: string[];
  } {
    const organisationTypeLabel =
      INSTITUTION_TYPE_LABELS[input.institutionType] || input.institutionType;
    const serviceInterestLabel =
      SERVICE_INTEREST_LABELS[input.serviceInterest] || input.serviceInterest;

    const preparedRow: SheetRowPayload = {
      'Full Name': input.fullName,
      'Institution or Agency Name ': input.institutionName,
      'Work Email Address': input.workEmail,
      'Phone / WhatsApp Number': input.phoneNumber,
      'Organisation Type': organisationTypeLabel,
      'Primary Service Interest': serviceInterestLabel,
      'Tell Us': input.message,
    };

    // Prefix values starting with +, =, -, or @ with a single quote (') so Google Sheets
    // treats phone numbers like "+91 90929 34889" as plain text instead of a formula (#ERROR!),
    // and prevents CSV/formula injection.
    const safeSpreadsheetValue = (val: string): string =>
      /^[+=@-]/.test(val.trim()) ? `'${val.trim()}` : val.trim();

    const valuesArray: string[] = [
      safeSpreadsheetValue(preparedRow['Full Name']),
      safeSpreadsheetValue(preparedRow['Institution or Agency Name ']),
      safeSpreadsheetValue(preparedRow['Work Email Address']),
      safeSpreadsheetValue(preparedRow['Phone / WhatsApp Number']),
      safeSpreadsheetValue(preparedRow['Organisation Type']),
      safeSpreadsheetValue(preparedRow['Primary Service Interest']),
      safeSpreadsheetValue(preparedRow['Tell Us']),
    ];

    return { preparedRow, valuesArray };
  }

  /**
   * Generates an OAuth2 access token using a Google Cloud Service Account JWT
   */
  private async getServiceAccountAccessToken(): Promise<string> {
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: 'RS256', typ: 'JWT' };
    const claimSet = {
      iss: config.googleSheets.serviceAccountEmail,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
    const unsignedJwt = `${encodedHeader}.${encodedClaimSet}`;

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(unsignedJwt);
    signer.end();

    const signature = signer.sign(config.googleSheets.privateKey);
    const signedJwt = `${unsignedJwt}.${base64UrlEncode(signature)}`;

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: signedJwt,
      }),
    });

    if (!tokenRes.ok) {
      const errBody = await tokenRes.text();
      throw new Error(`Service Account OAuth2 token exchange failed (${tokenRes.status}): ${errBody}`);
    }

    const tokenData = (await tokenRes.json()) as { access_token: string };
    return tokenData.access_token;
  }

  /**
   * Appends a row directly via Google Sheets REST API v4
   */
  private async appendViaServiceAccount(valuesArray: string[]): Promise<void> {
    const accessToken = await this.getServiceAccountAccessToken();
    const { spreadsheetId, sheetName } = config.googleSheets;
    const range = encodeURIComponent(`${sheetName}!A:G`);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        majorDimension: 'ROWS',
        values: [valuesArray],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Google Sheets API v4 append failed (${response.status}): ${errBody}`);
    }
  }

  /**
   * Appends a row via a Google Apps Script Web App webhook bound to the target spreadsheet
   */
  private async appendViaAppsScriptWebhook(
    preparedRow: SheetRowPayload,
    valuesArray: string[]
  ): Promise<void> {
    const response = await fetch(config.googleSheets.appsScriptWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        spreadsheetId: config.googleSheets.spreadsheetId,
        sheetName: config.googleSheets.sheetName,
        row: preparedRow,
        values: valuesArray,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Google Apps Script webhook failed (${response.status}): ${errBody}`);
    }
  }

  public async appendConsultationRow(
    _submissionId: string,
    _submittedAtIso: string,
    input: ConsultationInput
  ): Promise<GoogleSheetsSyncResult> {
    const { preparedRow, valuesArray } = this.mapToSheetColumns(input);
    const { spreadsheetId, sheetName, hasServiceAccountAuth, hasAppsScriptAuth } =
      config.googleSheets;

    // 1. If Service Account credentials are provided, write directly via Google Sheets API v4
    if (hasServiceAccountAuth) {
      try {
        await this.appendViaServiceAccount(valuesArray);
        return {
          synced: true,
          status: 'SYNCED',
          statusDetail: `Row successfully appended to Google Spreadsheet (${spreadsheetId} • ${sheetName}![A:G]).`,
          spreadsheetId,
          sheetName,
          columnOrder: VERIFIED_SHEET_COLUMNS,
          valuesArray,
          preparedRow,
        };
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown Google Sheets API error';
        console.error('[GoogleSheetsService] Service Account sync error:', message);
        return {
          synced: false,
          status: 'SYNC_ERROR',
          statusDetail: `Google Sheets write failed: ${message}`,
          spreadsheetId,
          sheetName,
          columnOrder: VERIFIED_SHEET_COLUMNS,
          valuesArray,
          preparedRow,
        };
      }
    }

    // 2. If Apps Script Webhook URL is provided, write via Apps Script Web App
    if (hasAppsScriptAuth) {
      try {
        await this.appendViaAppsScriptWebhook(preparedRow, valuesArray);
        return {
          synced: true,
          status: 'SYNCED',
          statusDetail: `Row successfully appended to Google Spreadsheet (${spreadsheetId} • ${sheetName}![A:G]) via Apps Script Web App.`,
          spreadsheetId,
          sheetName,
          columnOrder: VERIFIED_SHEET_COLUMNS,
          valuesArray,
          preparedRow,
        };
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown Apps Script webhook error';
        console.error('[GoogleSheetsService] Apps Script sync error:', message);
        return {
          synced: false,
          status: 'SYNC_ERROR',
          statusDetail: `Google Sheets webhook write failed: ${message}`,
          spreadsheetId,
          sheetName,
          columnOrder: VERIFIED_SHEET_COLUMNS,
          valuesArray,
          preparedRow,
        };
      }
    }

    // 3. Spreadsheet ID & 7-column schema are mapped; awaiting write credentials
    return {
      synced: false,
      status: 'PENDING_AUTH_CREDENTIALS',
      statusDetail: `Mapped 1:1 to Google Sheet (${spreadsheetId} • ${sheetName}, Columns A–G: ${VERIFIED_SHEET_COLUMNS.join(
        ' | '
      )}). Add GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY (or GOOGLE_APPS_SCRIPT_WEBHOOK_URL) in server/.env to enable authenticated row writes.`,
      spreadsheetId,
      sheetName,
      columnOrder: VERIFIED_SHEET_COLUMNS,
      valuesArray,
      preparedRow,
    };
  }
}

export const googleSheetsService = new GoogleSheetsService();
