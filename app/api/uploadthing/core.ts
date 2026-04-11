import { createUploadthing, type FileRouter } from "uploadthing/next"
import { prisma } from "@/lib/prisma"

const f = createUploadthing()

export const uploadRouter = {
  noteUploader: f({
    pdf: { maxFileSize: "512GB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      return { userEmail: "" }
    })
    .onUploadComplete(async ({ file, metadata }) => {
      console.log("File uploaded:", file)
      console.log("Metadata:", metadata)

      try {
        const user = await prisma.user.findUnique({
          where: { email: metadata.userEmail },
        })

        if (user) {
          await prisma.note.create({
            data: {
              title: "Untitled Note",
              fileUrl: file.url,
              subject: "GENERAL",
              year: 1,
              semester: "odd",
              category: "DIGITAL",
              uploadedBy: user.id,
            },
          })
          console.log("Note saved to database")
        }
      } catch (error) {
        console.error("Error saving note to database:", error)
      }

      return { url: file.url }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof uploadRouter
