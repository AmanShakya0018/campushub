import { createUploadthing, type FileRouter } from "uploadthing/next"
import { z } from "zod"

const f = createUploadthing()

export const uploadRouter = {
  noteUploader: f({ pdf: { maxFileSize: "512GB", maxFileCount: 1 } })
    .input(
      z.object({
        title: z.string(),
        subject: z.string(),
        year: z.string(),
        semester: z.string(),
      })
    )
    .onUploadComplete(({ file }) => {
      console.log("File uploaded:", file)
      return { url: file.url }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof uploadRouter
