import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

// Use this to seed the database with initial data
async function main() { 
  const password = await hash('test', 12)
  const user = await prisma.user.upsert({
    where: { Email: 'test@test.com' },
    update: {},
    create: {
        Email: 'test@test.com',
        FirstName: 'Test',
        LastName: 'User',
        Password: password
    }
  })
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (ex) => {
        console.error(ex)
        await prisma.$disconnect()
        process.exit(1)
    })
