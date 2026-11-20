# Reachryt — Complete Website Redesign & Development

Modern, interactive, animation-rich digital marketing and conversational automation website for **Reachryt**, built specifically for educational institutions (Schools, Colleges, Universities, Coaching & Training Institutions) and White-Label Agency Partners.

## 1. Core Highlights & Architecture

- **First Screen & First Scroll Dominance**:
  1. **WhatsApp Automation** — Interactive admission & parent enquiry simulator with automated conversation flows, quick-reply qualification buttons, typing indicators, and instant brochure delivery previews.
  2. **Instagram DM Workflows** — Interactive Comment-to-DM simulator demonstrating keyword triggers (`ADMISSION`, `SYLLABUS`, `VISIT`), automated public replies, and instant Direct Message lead capture.
  3. **White-Label Services (`Your Brand, Our Engine.`)** — Interactive 3-tier execution architecture showing how partner agencies own the client relationship and brand identity while Reachryt powers the underlying automation and delivery behind the scenes.
- **Official Updated Brand Identity**:
  - Uses the official updated Reachryt logo assets (`logo-primary.webp`, `logo-inverse.webp`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon-180.png`) extracted directly from `https://reachryt-web-beta.vercel.app/`.
- **Strict Content Integrity**:
  - Zero fabricated metrics, fake client logos, fake testimonials, or unverified team profiles.
  - Verified contact details (`reachryt.services@gmail.com`, `+91 90929 34889`, `111 Siruthuli Ave, CBE 641047`).
  - Exact legal copyright: `© 2026 Saventevo Solution Pvt Ltd. All Rights Reserved.`
- **Google Sheets Ready Consultation Backend**:
  - Express + TypeScript REST API (`POST /api/consultations`, `GET /api/consultations/status`) with Zod validation, HTML tag sanitization, dedicated `ConsultationService`, and modular `GoogleSheetsService` ready for 1:1 spreadsheet column mapping when the Google Sheets URL is provided.

## 2. Project Structure

```text
reachryt/
├── client/                     # React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lenis
│   ├── public/
│   │   ├── brand/
│   │   │   ├── logo-primary.webp
│   │   │   └── logo-inverse.webp
│   │   ├── favicon.svg
│   │   ├── favicon-32.png
│   │   └── apple-touch-icon-180.png
│   └── src/
│       ├── animations/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── sections/
│       ├── services/
│       ├── styles/
│       ├── utils/
│       ├── App.tsx
│       └── main.tsx
├── server/                     # Node.js + Express + TypeScript + Zod REST API
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.ts
│   │   └── index.ts
│   ├── .env.example
│   └── package.json
└── package.json
```

## 3. Running the Application

1. **Install dependencies**:
   ```bash
   npm install
   npm --prefix server install
   npm --prefix client install
   ```

2. **Start both Frontend and Backend in Development Mode**:
   ```bash
   npm run dev
   ```
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`
