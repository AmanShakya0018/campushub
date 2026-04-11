import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../generated/prisma/client"

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.note.deleteMany()
  await prisma.user.deleteMany()
  console.log("Deleted all notes and users")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
