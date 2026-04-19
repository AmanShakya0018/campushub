"use client"

import React, { Suspense } from "react"
import { Search, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectionBreadcrumbs } from "../selection/SelectionBreadcrumbs"
import { useSearchParams } from "next/navigation"
import { Themetoggle } from "@/components/ui/ThemeToggle"
import { UploadModal } from "./UploadModal"

import { SidebarTrigger } from "@/components/ui/sidebar"

function HeaderContent() {
  const searchParams = useSearchParams()
  const subject = searchParams.get("subject")
  const year = searchParams.get("year")
  const sem = searchParams.get("sem")

  return (
    <>
      <div className="flex flex-1 items-center gap-4">
        <SidebarTrigger className="text-neutral-500" />

        <div className="hidden md:block">
          <SelectionBreadcrumbs
            year={year || undefined}
            semester={sem || undefined}
            className="text-xs"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <Input
            placeholder="Search files, subjects..."
            className="h-9 border-transparent bg-neutral-100/50 pl-9 focus:bg-white dark:bg-neutral-800/50 dark:focus:bg-neutral-800"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <UploadModal
          defaultSubjectId={subject || ""}
          defaultYear={year || "1"}
          defaultSemester={sem || "odd"}
        >
          <Button
            variant="outline"
            size="sm"
            className="hidden gap-2 border-neutral-200 text-neutral-600 hover:bg-neutral-50 sm:flex dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <PlusCircle className="h-4 w-4" />
            Upload
          </Button>
        </UploadModal>
        <Themetoggle />
      </div>
    </>
  )
}

function HeaderLoading() {
  return (
    <div className="flex flex-1 items-center gap-4">
      <div className="h-4 w-4 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="h-4 w-20 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white/80 px-4 backdrop-blur-md md:px-8 dark:border-neutral-800 dark:bg-neutral-900/80">
      <Suspense fallback={<HeaderLoading />}>
        <HeaderContent />
      </Suspense>
    </header>
  )
}
