import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Use this to seed the database with initial data
async function main() { }

main()
    .then(() => prisma.$disconnect())
    .catch(async (ex) => {
        console.error(ex)
        await prisma.$disconnect()
        process.exit(1)
    })
