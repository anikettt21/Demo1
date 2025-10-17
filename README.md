# TechFix Hub

A professional, responsive full‑stack web app for a local computer shop. Includes a React + Tailwind frontend, Express + MySQL backend, and demo data.

## Stack
- Frontend: React (Vite), Tailwind CSS, Framer Motion, React Router
- Backend: Node.js, Express.js, MySQL (mysql2)
- Auth: JWT (admin area)

## Project Structure
```
techfix-hub/
├── client/              # React Frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.jsx
├── server/              # Express Backend
│   ├── routes/
│   ├── middleware/
│   ├── config/db.js
│   └── server.js
└── database/
    └── techfix.sql      # MySQL schema + seeds
```

## Setup

### 1) Backend
Create `server/.env` using `server/.env.example`:
```
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=techfix
JWT_SECRET=supersecretjwt
```
Install and run:
```bash
cd server
npm install
npm run dev
```
The server will auto‑create the database and run `database/techfix.sql` to create tables and seed demo data (default admin: owner / techfix123).

### 2) Frontend
Create `client/.env` from `client/.env.example`:
```
VITE_API_URL=http://localhost:5000
VITE_DEMO_MODE=false
```
Install and run:
```bash
cd client
npm install
npm run dev
```

Visit the app at http://localhost:5173. The API base URL can be overridden via `VITE_API_URL`. If the backend is not running, set `VITE_DEMO_MODE=true` to use local demo data.

## Admin Login
Go to `/admin`. Default credentials (seeded):
- Username: owner
- Password: techfix123

## Deploy
- Frontend: Vercel or Netlify (build: `npm run build` in `client`)
- Backend: Render / Railway / Fly.io (`npm start` in `server`)
- Database: Managed MySQL (e.g., PlanetScale, Neon MySQL, or Cloud SQL). Update env vars accordingly.

## Notes
- Image uploads are stored under `server/uploads` and served at `/uploads/...`.
- If running behind a different origin, set `CLIENT_ORIGIN` in the server `.env`.
