import dotenv from 'dotenv';

dotenv.config();

export interface AppConfig {
  port: number;
  nodeEnv: string;
  clientOrigin: string;
  googleSheets: {
    spreadsheetId: string;
    sheetName: string;
    serviceAccountEmail: string;
    privateKey: string;
    appsScriptWebhookUrl: string;
    hasSpreadsheetId: boolean;
    hasServiceAccountAuth: boolean;
    hasAppsScriptAuth: boolean;
    isConfigured: boolean;
  };
}

const spreadsheetId = (
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1j7J_furrab7YnEoMOJlSlRkTITZ7x0ewG0vQu87vDR4'
).trim();
const sheetName = (process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1').trim();
const serviceAccountEmail = (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '').trim();
const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n').trim();
const appsScriptWebhookUrl = (
  process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbyX4Dz2drxzaYErWmurPSlWKqE5gSXEmIKpQdzUvaR9buH8Gku2w0_m2SBvFt2uU8VBew/exec'
).trim();

const hasSpreadsheetId = Boolean(spreadsheetId);
const hasServiceAccountAuth = Boolean(spreadsheetId && serviceAccountEmail && privateKey);
const hasAppsScriptAuth = Boolean(appsScriptWebhookUrl);

export const config: AppConfig = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  googleSheets: {
    spreadsheetId,
    sheetName,
    serviceAccountEmail,
    privateKey,
    appsScriptWebhookUrl,
    hasSpreadsheetId,
    hasServiceAccountAuth,
    hasAppsScriptAuth,
    isConfigured: hasServiceAccountAuth || hasAppsScriptAuth,
  },
};
