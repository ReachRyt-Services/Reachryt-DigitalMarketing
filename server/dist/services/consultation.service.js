import crypto from 'crypto';
import { googleSheetsService } from './googleSheets.service.js';
export class ConsultationService {
    async processConsultation(input) {
        const submissionId = `RRYT-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
        const submittedAt = new Date().toISOString();
        const storageResult = await googleSheetsService.appendConsultationRow(submissionId, submittedAt, input);
        return {
            submissionId,
            submittedAt,
            data: input,
            storage: storageResult,
        };
    }
}
export const consultationService = new ConsultationService();
