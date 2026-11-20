import { createApp } from './app.js';
import { config } from './config/env.js';

const app = createApp();

app.listen(config.port, () => {
  console.log(`[Reachryt Server] Running on http://localhost:${config.port} (${config.nodeEnv})`);
  console.log(
    `[Reachryt Server] Google Sheets Integration: ${
      config.googleSheets.isConfigured ? 'CONFIGURED & ACTIVE' : 'PENDING CONFIGURATION (Ready for Sheet URL)'
    }`
  );
});
