"use client"

import React from "react"
import { useRouter, useParams } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

import { SelectionBreadcrumbs } from "@/components/selection/SelectionBreadcrumbs"
import { SubjectGrid } from "@/components/selection/SubjectGrid"
import { subjectsData } from "@/lib/constants/subjects"

export default function SubjectSelectionPage() {
  const router = useRouter()
  const params = useParams()
  const year = params.year as string
  const semester = params.semester as string

  const subjects = subjectsData[year]?.[semester] || []
  const [search, setSearch] = React.useState("")
  const [bookmarks, setBookmarks] = React.useState<string[]>([])

  // Load bookmarks on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("campushub_bookmarks")
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse bookmarks", e)
      }
    }
  }, [])

  // Sync bookmarks to localStorage
  const toggleBookmark = (id: string) => {
    const newBookmarks = bookmarks.includes(id)
      ? bookmarks.filter(b => b !== id)
      : [...bookmarks, id]
    
    setBookmarks(newBookmarks)
    localStorage.setItem("campushub_bookmarks", JSON.stringify(newBookmarks))
  }

  const filteredSubjects = subjects.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  )

  const handleSubjectClick = (subjectId: string) => {
    router.push(`/dashboard?subject=${subjectId}&year=${year}&sem=${semester}`)
  }

  const getFullYearLabel = (y: string) => {
    const labels: Record<string, string> = { "1": "1st Year", "2": "2nd Year", "3": "3rd Year", "4": "4th Year" }
    return labels[y] || `${y}th Year`
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-neutral-100 px-4 py-20 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SelectionBreadcrumbs year={year} semester={semester} />

          <Badge variant="secondary" className="w-fit px-3 py-1 text-sm font-medium">
            CSE • {getFullYearLabel(year)} • {semester.charAt(0).toUpperCase() + semester.slice(1)} Sem
          </Badge>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50 text-center">
            Choose a Subject
          </h1>
          <p className="mt-3 text-center text-neutral-600 dark:text-neutral-400">
            Select a subject to view modules and study materials.
          </p>

          <div className="mx-auto mt-8 max-w-md relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input 
              placeholder="Search subjects or topics..." 
              className="pl-10 h-12 bg-white dark:bg-neutral-800 transition-all focus:ring-2 focus:ring-indigo-500/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <SubjectGrid 
          subjects={filteredSubjects}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          onSubjectClick={handleSubjectClick}
        />
      </div>
    </div>
  )
}
