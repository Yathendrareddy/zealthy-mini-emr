import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      appointments: 1,
      medications: 1,
    },
  ])
}