"use client"

import React from "react"
import { Search } from "lucide-react"
import { SubjectCard } from "./SubjectCard"
import { Subject } from "@/lib/constants/subjects"

interface SubjectGridProps {
  subjects: Subject[]
  bookmarks: string[]
  onToggleBookmark: (id: string) => void
  onSubjectClick: (id: string) => void
}

export function SubjectGrid({ subjects, bookmarks, onToggleBookmark, onSubjectClick }: SubjectGridProps) {
  if (subjects.length === 0) {
    return (
      <div className="mt-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
          <Search className="h-10 w-10 text-neutral-400" />
        </div>
        <h3 className="mt-4 text-xl font-medium text-neutral-900 dark:text-neutral-50">No subjects found</h3>
        <p className="text-neutral-500 dark:text-neutral-400">Try searching for something else or check another semester.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {subjects.map((subject, index) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
          index={index}
          isBookmarked={bookmarks.includes(subject.id)}
          onToggleBookmark={onToggleBookmark}
          onClick={onSubjectClick}
        />
      ))}
    </div>
  )
}
