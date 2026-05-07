# Zealthy Mini EMR + Patient Portal

Production-style take-home assignment using:
- Next.js 15
- TypeScript
- TailwindCSS
- Prisma
- PostgreSQL
- NextAuth

## Features

### Admin (/admin)
- Patient management
- Appointment CRUD
- Prescription CRUD

### Patient Portal (/)
- Login
- Dashboard
- Upcoming appointments
- Medication summary

## Setup

```bash
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

## Demo Credentials

Email: john@example.com
Password: password123