import { Router } from 'express';
import { submitConsultation, getConsultationStatus } from '../controllers/consultation.controller.js';
const router = Router();
router.get('/status', getConsultationStatus);
router.post('/', submitConsultation);
export default router;
