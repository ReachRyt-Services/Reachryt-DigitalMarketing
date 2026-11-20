export interface ConsultationPayload {
  fullName: string;
  institutionName: string;
  institutionType:
    | 'school'
    | 'college'
    | 'university'
    | 'coaching-training'
    | 'educational-organization'
    | 'agency-partner';
  workEmail: string;
  phoneNumber: string;
  serviceInterest:
    | 'whatsapp-automation'
    | 'instagram-dm-workflows'
    | 'white-label-services'
    | 'admission-campaign-marketing'
    | 'education-seo-digital-growth'
    | 'full-stack-education-automation';
  message: string;
}

export interface ConsultationApiResponse {
  success: boolean;
  submissionId?: string;
  submittedAt?: string;
  synced?: boolean;
  storageStatus?: 'SYNCED' | 'PENDING_AUTH_CREDENTIALS' | 'SYNC_ERROR';
  storageMessage?: string;
  spreadsheetId?: string;
  sheetName?: string;
  columnOrder?: string[];
  valuesArray?: string[];
  preparedSheetRow?: Record<string, string>;
  error?: string;
  fieldErrors?: Record<string, string>;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbyX4Dz2drxzaYErWmurPSlWKqE5gSXEmIKpQdzUvaR9buH8Gku2w0_m2SBvFt2uU8VBew/exec';

const INSTITUTION_TYPE_LABELS: Record<ConsultationPayload['institutionType'], string> = {
  school: 'School (Primary / Secondary / K-12)',
  college: 'College (Arts / Science / Engineering / Management)',
  university: 'University / Higher Education Institution',
  'coaching-training': 'Coaching / Training Institution',
  'educational-organization': 'Educational Organization / Trust',
  'agency-partner': 'Digital Agency (White-Label Partnership)',
};

const SERVICE_INTEREST_LABELS: Record<ConsultationPayload['serviceInterest'], string> = {
  'whatsapp-automation': '01. WhatsApp Automation',
  'instagram-dm-workflows': '02. Instagram DM Workflows',
  'white-label-services': '03. White-Label Services (Your Brand, Our Engine)',
  'admission-campaign-marketing': 'Admission Campaign Marketing & PPC',
  'education-seo-digital-growth': 'Education SEO & Organic Growth',
  'full-stack-education-automation': 'Full-Stack Automation + Digital Marketing',
};

const safeSpreadsheetValue = (val: string): string =>
  /^[+=@-]/.test(val.trim()) ? `'${val.trim()}` : val.trim();

async function submitDirectlyToGoogleSheets(
  payload: ConsultationPayload
): Promise<ConsultationApiResponse> {
  const row = {
    'Full Name': payload.fullName.trim(),
    'Institution or Agency Name ': payload.institutionName.trim(),
    'Work Email Address': payload.workEmail.trim(),
    'Phone / WhatsApp Number': payload.phoneNumber.trim(),
    'Organisation Type':
      INSTITUTION_TYPE_LABELS[payload.institutionType] || payload.institutionType,
    'Primary Service Interest':
      SERVICE_INTEREST_LABELS[payload.serviceInterest] || payload.serviceInterest,
    'Tell Us': payload.message.trim(),
  };

  const values = [
    safeSpreadsheetValue(row['Full Name']),
    safeSpreadsheetValue(row['Institution or Agency Name ']),
    safeSpreadsheetValue(row['Work Email Address']),
    safeSpreadsheetValue(row['Phone / WhatsApp Number']),
    safeSpreadsheetValue(row['Organisation Type']),
    safeSpreadsheetValue(row['Primary Service Interest']),
    safeSpreadsheetValue(row['Tell Us']),
  ];

  await fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      spreadsheetId: '1j7J_furrab7YnEoMOJlSlRkTITZ7x0ewG0vQu87vDR4',
      sheetName: 'Sheet1',
      row,
      values,
    }),
  });

  return {
    success: true,
    submissionId: `RCH-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
    synced: true,
    storageStatus: 'SYNCED',
  };
}

export async function submitConsultationRequest(
  payload: ConsultationPayload
): Promise<ConsultationApiResponse> {
  try {
    const response = await fetch(`${API_BASE}/api/consultations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data: ConsultationApiResponse = await response.json();
      if (data.success) {
        return data;
      }
    } else if (response.status === 400) {
      const data: ConsultationApiResponse = await response.json();
      return data;
    }
  } catch {
    // Backend server not reachable; fall back directly to Google Apps Script webhook
  }

  return submitDirectlyToGoogleSheets(payload);
}
