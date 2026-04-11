"use client"

import React from "react"
import { NoteCard, Note } from "./NoteCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SubjectFeedProps {
  subjectId: string
  notes: Note[]
  loading?: boolean
}

export function SubjectFeed({ subjectId, notes, loading }: SubjectFeedProps) {
  const [filter, setFilter] = React.useState("all")
  const [search, setSearch] = React.useState("")

  const filteredNotes = notes.filter((note) => {
    const matchesFilter = filter === "all" || note.type === filter
    const matchesSearch = note.title
      .toLowerCase()
      .includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          defaultValue="all"
          className="w-full sm:w-auto"
          onValueChange={setFilter}
        >
          <TabsList className="bg-neutral-100 dark:bg-neutral-800">
            <TabsTrigger value="all">All Notes</TabsTrigger>
            <TabsTrigger value="handwritten">Handwritten</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
            <TabsTrigger value="pyq">PYQs</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              placeholder="Filter by title..."
              className="h-9 pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 border-neutral-200 dark:border-neutral-800"
          >
            <SlidersHorizontal className="h-4 w-4 text-neutral-500" />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
        </div>
      ) : filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredNotes.map((note, index) => (
            <NoteCard key={note.id} note={note} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
            <Search className="h-8 w-8 text-neutral-300" />
          </div>
          <h3 className="text-lg font-semibold">No notes found</h3>
          <p className="mx-auto max-w-xs text-neutral-500">
            {search
              ? `No results for "${search}" in this category.`
              : "There are no notes uploaded for this subject yet."}
          </p>
          {!search && (
            <Button className="mt-6 bg-indigo-600">
              Be the first to upload
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
