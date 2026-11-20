import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config/env.js';
import consultationRoutes from './routes/consultation.routes.js';
export const createApp = () => {
    const app = express();
    app.use(helmet({
        crossOriginResourcePolicy: { policy: 'cross-origin' },
    }));
    app.use(cors({
        origin: [config.clientOrigin, 'http://localhost:5173', 'http://127.0.0.1:5173'],
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    app.use(express.json({ limit: '64kb' }));
    app.get('/api/health', (_req, res) => {
        res.status(200).json({
            status: 'ok',
            service: 'reachryt-api',
            timestamp: new Date().toISOString(),
            googleSheetsIntegration: config.googleSheets.isConfigured ? 'configured' : 'pending_configuration',
        });
    });
    app.use('/api/consultations', consultationRoutes);
    app.use((_req, res) => {
        res.status(404).json({
            success: false,
            error: 'API route not found.',
        });
    });
    return app;
};
