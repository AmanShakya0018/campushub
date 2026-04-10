"use client"

import React from "react"
import { useRouter, useParams } from "next/navigation"
import { Search, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

import { SelectionBreadcrumbs } from "@/components/selection/SelectionBreadcrumbs"
import { SubjectCard } from "@/components/selection/SubjectCard"
import { subjectsData } from "@/lib/constants/subjects"

export default function SubjectSelectionPage() {
  const router = useRouter()
  const params = useParams()
  const year = params.year as string
  const semester = params.semester as string

  const subjects = React.useMemo(() => subjectsData[year]?.[semester] || [], [year, semester])
  const [searchQuery, setSearchQuery] = React.useState("")
  const [typeFilter, setTypeFilter] = React.useState<string>("All")
  const [sortBy, setSortBy] = React.useState<"none" | "difficulty" | "credits">("none")
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

  const filteredSubjects = React.useMemo(() => {
    let result = subjects.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesType = typeFilter === "All" || s.type === typeFilter
      return matchesSearch && matchesType
    })

    if (sortBy === "difficulty") {
      result = [...result].sort((a, b) => b.difficulty - a.difficulty)
    } else if (sortBy === "credits") {
      result = [...result].sort((a, b) => b.credits - a.credits)
    }

    return result
  }, [subjects, searchQuery, typeFilter, sortBy])

  const handleSubjectClick = (subjectId: string) => {
    router.push(`/dashboard?subject=${subjectId}&year=${year}&sem=${semester}`)
  }

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-8 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <Book className="h-4 w-4" />
              <span>{year} Year / {semester} Sem</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 uppercase">
              Available Subjects
            </h1>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              Found <span className="font-bold text-neutral-900 dark:text-neutral-50">{filteredSubjects.length}</span> curated subject modules for your selected academic period.
            </p>
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              type="text"
              placeholder="Search by subject name or tags..."
              className="h-12 w-full pl-10 border-2 border-neutral-200 bg-white transition-all focus:border-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-neutral-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters & Sorting */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6 border-y border-neutral-100 py-6 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Filter By</span>
            {["All", "Core", "Lab", "Elective"].map((type) => (
              <Button
                key={type}
                variant="ghost"
                size="sm"
                onClick={() => setTypeFilter(type)}
                className={cn(
                  "h-8 px-4 text-[10px] font-bold uppercase tracking-widest transition-all",
                  typeFilter === type 
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black" 
                    : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                )}
              >
                {type}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">Sort By</span>
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy(sortBy === "difficulty" ? "none" : "difficulty")}
                className={cn(
                  "h-8 border-2 text-[10px] font-bold uppercase tracking-widest transition-all px-4",
                  sortBy === "difficulty" 
                    ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-black" 
                    : "border-neutral-200 text-neutral-500 dark:border-neutral-800"
                )}
              >
                Difficulty
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortBy(sortBy === "credits" ? "none" : "credits")}
                className={cn(
                  "h-8 border-2 text-[10px] font-bold uppercase tracking-widest transition-all px-4",
                  sortBy === "credits" 
                    ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-black" 
                    : "border-neutral-200 text-neutral-500 dark:border-neutral-800"
                )}
              >
                Credits
              </Button>
            </div>
          </div>
        </div>

        {filteredSubjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                isBookmarked={bookmarks.includes(subject.id)}
                onToggleBookmark={toggleBookmark}
                onClick={handleSubjectClick}
              />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-neutral-100 text-neutral-300 dark:bg-neutral-800">
              <Search className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">NO MATCHES FOUND</h3>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              We couldn't find any subjects matching "{searchQuery}". Try a different term.
            </p>
            <Button
              variant="outline"
              className="mt-6 border-2 border-neutral-900 text-xs font-bold uppercase tracking-widest dark:border-neutral-100"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
