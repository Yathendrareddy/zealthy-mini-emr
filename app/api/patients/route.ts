export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const patients = await prisma.patient.findMany({
    include: {
      appointments: true,
      prescriptions: true
    }
  })

  return NextResponse.json(patients)
}