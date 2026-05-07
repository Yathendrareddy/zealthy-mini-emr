import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10)

  await prisma.patient.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      passwordHash,
      appointments: {
        create: [
          {
            providerName: 'Dr. Smith',
            appointmentDate: new Date(),
            repeatSchedule: 'monthly'
          }
        ]
      },
      prescriptions: {
        create: [
          {
            medicationName: 'Metformin',
            dosage: '500mg',
            quantity: 30,
            refillDate: new Date(),
            refillSchedule: 'monthly'
          }
        ]
      }
    }
  })
}

main()