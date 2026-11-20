import { consultationSchema } from '../middleware/validateConsultation.js';
import { consultationService } from '../services/consultation.service.js';
import { googleSheetsService, VERIFIED_SHEET_COLUMNS } from '../services/googleSheets.service.js';
import { config } from '../config/env.js';
export const submitConsultation = async (req, res) => {
    try {
        const parseResult = consultationSchema.safeParse(req.body);
        if (!parseResult.success) {
            const fieldErrors = {};
            for (const issue of parseResult.error.issues) {
                const field = issue.path[0];
                if (typeof field === 'string' && !fieldErrors[field]) {
                    fieldErrors[field] = issue.message;
                }
            }
            res.status(400).json({
                success: false,
                error: 'Validation failed. Please check the highlighted fields.',
                fieldErrors,
            });
            return;
        }
        const record = await consultationService.processConsultation(parseResult.data);
        res.status(200).json({
            success: true,
            submissionId: record.submissionId,
            submittedAt: record.submittedAt,
            synced: record.storage.synced,
            storageStatus: record.storage.status,
            storageMessage: record.storage.statusDetail,
            spreadsheetId: record.storage.spreadsheetId,
            sheetName: record.storage.sheetName,
            columnOrder: record.storage.columnOrder,
            valuesArray: record.storage.valuesArray,
            preparedSheetRow: record.storage.preparedRow,
        });
    }
    catch (err) {
        console.error('[ConsultationController] Error processing consultation:', err);
        res.status(500).json({
            success: false,
            error: 'An unexpected server error occurred while processing your consultation request.',
        });
    }
};
export const getConsultationStatus = (_req, res) => {
    res.status(200).json({
        endpoint: 'POST /api/consultations',
        spreadsheetId: config.googleSheets.spreadsheetId,
        sheetName: config.googleSheets.sheetName,
        verifiedColumns: VERIFIED_SHEET_COLUMNS,
        googleSheetsWriteConfigured: googleSheetsService.isIntegrationConfigured(),
        storageMode: googleSheetsService.isIntegrationConfigured()
            ? 'GOOGLE_SHEETS_ACTIVE'
            : 'SPREADSHEET_MAPPED_PENDING_WRITE_CREDENTIALS',
    });
};
