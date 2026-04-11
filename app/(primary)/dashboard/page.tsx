"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { motion } from "motion/react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SignInButton from "@/components/user/SignInButton"

import { SubjectFeed } from "@/components/dashboard/SubjectFeed"
import { UploadModal } from "@/components/dashboard/UploadModal"
import { getSubjectNameById } from "@/lib/constants/subjects"

interface NoteData {
  id: string
  title: string
  fileUrl: string
  subject: string
  year: number
  semester: string
  category: string
  createdAt: string
  user: {
    name: string | null
    image: string | null
  }
}

export default function DashboardPage() {
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const subjectId = searchParams.get("subject")
  const year = searchParams.get("year")
  const semester = searchParams.get("sem")

  const [notes, setNotes] = React.useState<NoteData[]>([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (subjectId) {
      setLoading(true)
      const queryParams = new URLSearchParams()
      queryParams.append("subject", subjectId.toUpperCase())
      if (year) queryParams.append("year", year)
      if (semester) queryParams.append("semester", semester)

      fetch(`/api/notes?${queryParams.toString()}`)
        .then((res) => res.json())
        .then((data) => {
          setNotes(data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [subjectId, year, semester])

  if (!session?.user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <Card className="w-full max-w-md bg-white p-8 text-center shadow-xl dark:bg-neutral-900">
          <Upload className="mx-auto mb-4 h-12 w-12 text-neutral-300" />
          <h2 className="mb-2 text-2xl font-bold">Sign in to continue</h2>
          <p className="mb-6 text-neutral-500">
            Access your dashboard and community notes.
          </p>
          <SignInButton text="Sign In with Google" />
        </Card>
      </div>
    )
  }

  if (subjectId) {
    const subjectName = getSubjectNameById(subjectId)

    const formattedNotes = notes.map((note) => ({
      id: note.id,
      title: note.title,
      type: note.category.toLowerCase() as "handwritten" | "digital" | "pyq",
      fileUrl: note.fileUrl,
      uploader: {
        name: note.user.name || "Anonymous",
        image: note.user.image || undefined,
      },
      createdAt: note.createdAt,
      downloads: 0,
    }))

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase dark:text-neutral-50">
            {subjectName}{" "}
            <span className="font-normal text-neutral-400">/ Feed</span>
          </h1>
          <UploadModal
            defaultSubjectId={subjectId}
            defaultYear={year || "1"}
            defaultSemester={semester || "odd"}
          >
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Upload className="mr-2 h-4 w-4" />
              Upload Note
            </Button>
          </UploadModal>
        </div>

        <SubjectFeed subjectId={subjectId} notes={formattedNotes} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
        >
          Welcome, {session.user.name?.split(" ")[0]}!
        </motion.h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          Select a subject from the sidebar to browse notes.
        </p>
      </div>

      <Card className="p-8">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <h3 className="mb-2 text-xl font-semibold">Get Started</h3>
          <p className="mb-6 max-w-md text-neutral-500">
            Browse through your subjects and semesters to find study materials
            uploaded by the community.
          </p>
          <Button asChild>
            <a href="/selection">Browse Subjects</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
