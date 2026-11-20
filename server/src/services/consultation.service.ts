import crypto from 'crypto';
import { ConsultationInput } from '../middleware/validateConsultation.js';
import { googleSheetsService, GoogleSheetsSyncResult } from './googleSheets.service.js';

export interface ConsultationRecord {
  submissionId: string;
  submittedAt: string;
  data: ConsultationInput;
  storage: GoogleSheetsSyncResult;
}

export class ConsultationService {
  public async processConsultation(input: ConsultationInput): Promise<ConsultationRecord> {
    const submissionId = `RRYT-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
    const submittedAt = new Date().toISOString();

    const storageResult = await googleSheetsService.appendConsultationRow(
      submissionId,
      submittedAt,
      input
    );

    return {
      submissionId,
      submittedAt,
      data: input,
      storage: storageResult,
    };
  }
}

export const consultationService = new ConsultationService();
