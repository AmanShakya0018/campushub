"use client"

import React from "react"
import { File, Trash, Upload, Loader2 } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useUploadThing } from "@/lib/uploadthing"

interface UploadModalProps {
  children: React.ReactNode
  subjectId?: string
  year?: string
  semester?: string
}

export function UploadModal({
  children,
  subjectId = "",
  year = "1",
  semester = "odd",
}: UploadModalProps) {
  const [files, setFiles] = React.useState<File[]>([])
  const [title, setTitle] = React.useState("")
  const [subject, setSubject] = React.useState(subjectId)
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { data: session } = useSession()

  const { startUpload, isUploading } = useUploadThing("noteUploader", {
    onClientUploadComplete: (res) => {
      console.log("Upload complete:", res)
      setOpen(false)
      setFiles([])
      setTitle("")
      router.refresh()
    },
    onUploadError: (error) => {
      console.error("Upload error:", error)
    },
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
  })

  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.name !== fileName))
  }

  const handleUpload = async () => {
    if (files.length === 0 || !title || !subject) return

    await startUpload(files, {
      title,
      subject: subject.toUpperCase(),
      year,
      semester,
    })
  }

  const canUpload =
    files.length > 0 && title.trim() && subject.trim() && !isUploading

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Upload Notes</DialogTitle>
          <DialogDescription>
            Upload PDF notes for the community
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              placeholder="Enter note title"
              className="mt-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Label>Subject</Label>
            <Input
              placeholder="e.g., DBMS, OS, CN"
              className="mt-2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="file-upload">Upload PDF</Label>
            <div
              {...getRootProps()}
              className={`mt-2 flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-8 transition-colors ${
                isDragActive
                  ? "border-neutral-900 bg-neutral-50 dark:bg-neutral-800"
                  : "border-neutral-200 dark:border-neutral-800"
              }`}
            >
              <input {...getInputProps()} id="file-upload" />
              <Upload className="h-8 w-8 text-neutral-400" />
              <p className="mt-2 text-sm text-neutral-500">
                {isDragActive
                  ? "Drop file here"
                  : "Drag & drop or click to upload"}
              </p>
              <p className="text-xs text-neutral-400">PDF only</p>
            </div>
          </div>

          {files.length > 0 && (
            <ul className="space-y-2">
              {files.map((file) => (
                <li key={file.name}>
                  <div className="flex items-center justify-between rounded-md border p-3">
                    <div className="flex items-center gap-3">
                      <File className="h-5 w-5 text-neutral-500" />
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-neutral-400">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(file.name)}
                    >
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <Separator />

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button disabled={!canUpload} onClick={handleUpload}>
              {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
