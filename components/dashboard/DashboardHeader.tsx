"use client"

import React from "react"
import { Search, Bell, Menu, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectionBreadcrumbs } from "../selection/SelectionBreadcrumbs"
import { useSearchParams } from "next/navigation"
import { Themetoggle } from "@/components/ui/ThemeToggle"

import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  const searchParams = useSearchParams()
  const subject = searchParams.get("subject")
  const year = searchParams.get("year")
  const sem = searchParams.get("sem")

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white/80 px-4 md:px-8 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
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
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <Input 
            placeholder="Search files, subjects..." 
            className="pl-9 h-9 bg-neutral-100/50 border-transparent focus:bg-white dark:bg-neutral-800/50 dark:focus:bg-neutral-800"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-900 dark:text-indigo-400">
          <PlusCircle className="h-4 w-4" />
          Upload
        </Button>
        <Themetoggle />
        <Button variant="ghost" size="icon" className="relative text-neutral-500">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-neutral-900" />
        </Button>
      </div>
    </header>
  )
}
