"use client"

import React from "react"
import { File, Trash, Upload, Loader2 } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useQueryClient } from "@tanstack/react-query"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useUploadThing } from "@/lib/uploadthing"
import { subjectsData, getSubjectNameById } from "@/lib/constants/subjects"

interface UploadModalProps {
  children: React.ReactNode
  defaultSubjectId?: string
  defaultYear?: string
  defaultSemester?: string
  onUploadSuccess?: () => void
}

const years = [
  { value: "1", label: "1st Year" },
  { value: "2", label: "2nd Year" },
  { value: "3", label: "3rd Year" },
  { value: "4", label: "4th Year" },
]

const semesters = [
  { value: "odd", label: "Odd Semester (Sem 1, 3, 5, 7)" },
  { value: "even", label: "Even Semester (Sem 2, 4, 6, 8)" },
]

const categories = [
  { value: "HANDWRITTEN", label: "Handwritten Notes" },
  { value: "DIGITAL", label: "Digital Notes" },
  { value: "PYQ", label: "Previous Year Questions" },
]

export function UploadModal({
  children,
  defaultSubjectId = "",
  defaultYear = "1",
  defaultSemester = "odd",
  onUploadSuccess,
}: UploadModalProps) {
  const [files, setFiles] = React.useState<File[]>([])
  const [title, setTitle] = React.useState("")
  const [selectedYear, setSelectedYear] = React.useState(defaultYear)
  const [selectedSemester, setSelectedSemester] =
    React.useState(defaultSemester)
  const [selectedSubject, setSelectedSubject] = React.useState(defaultSubjectId)
  const [category, setCategory] = React.useState<
    "HANDWRITTEN" | "DIGITAL" | "PYQ"
  >("DIGITAL")
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const availableSubjects = React.useMemo(() => {
    return subjectsData[selectedYear]?.[selectedSemester] || []
  }, [selectedYear, selectedSemester])

  React.useEffect(() => {
    if (
      !selectedSubject ||
      !availableSubjects.find((s) => s.id === selectedSubject)
    ) {
      if (availableSubjects.length > 0) {
        setSelectedSubject(availableSubjects[0].id)
      } else {
        setSelectedSubject("")
      }
    }
  }, [selectedYear, selectedSemester])

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
    if (
      files.length === 0 ||
      !title ||
      !selectedSubject ||
      !session?.user?.email
    )
      return

    try {
      const result = await startUpload(files)

      if (result && result[0]) {
        await fetch("/api/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            fileUrl: result[0].url,
            subject: selectedSubject,
            year: parseInt(selectedYear),
            semester: selectedSemester,
            category,
            userEmail: session.user.email,
          }),
        })

        queryClient.invalidateQueries({ queryKey: ["notes"] })

        setOpen(false)
        setFiles([])
        setTitle("")
      }
    } catch (error) {
      console.error("Upload error:", error)
    }
  }

  const canUpload =
    files.length > 0 && title.trim() && selectedSubject && !isUploading

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Year</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year.value} value={year.value}>
                      {year.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Semester</Label>
              <Select
                value={selectedSemester}
                onValueChange={setSelectedSemester}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map((sem) => (
                    <SelectItem key={sem.value} value={sem.value}>
                      {sem.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Subject</Label>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {availableSubjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Category</Label>
            <Select
              value={category}
              onValueChange={(value) =>
                setCategory(value as "HANDWRITTEN" | "DIGITAL" | "PYQ")
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
