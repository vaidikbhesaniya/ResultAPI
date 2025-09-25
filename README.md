# Mid-Term Result API (Node.js + Express + MongoDB)

## Setup
1. Install Node.js 18+.
2. In `api/`, copy `.env.example` to `.env` and set MONGODB_URI (local or Atlas).
3. Install deps:
```bash
npm install
```
4. Seed data:
```bash
npm run seed
```
5. Run server:
```bash
npm run dev
```

## Endpoints (base: http://localhost:4000)
- POST /api/auth/login
  - body: { username, password, selectedRole }
- GET /api/professors/:profId/subjects
- GET /api/subjects/:subjectId/students
- POST /api/marks
  - body: { studentId, subjectId, marks }
- GET /api/students/:studentId/subjects
- GET /api/students/:studentId/marks

## Notes
- Passwords are plain for demo only; use hashing in production.
- Add CORS and simple request validation included.
- Deploy easily to Render/Railway; set env vars there and skip local Mongo.
