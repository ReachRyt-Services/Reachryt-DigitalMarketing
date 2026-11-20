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

export async function submitConsultationRequest(
  payload: ConsultationPayload
): Promise<ConsultationApiResponse> {
  const response = await fetch(`${API_BASE}/api/consultations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data: ConsultationApiResponse = await response.json();
  return data;
}
