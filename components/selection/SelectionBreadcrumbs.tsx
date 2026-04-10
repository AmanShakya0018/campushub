"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbsProps {
  year?: string
  semester?: string
  className?: string
}

export function SelectionBreadcrumbs({ year, semester, className }: BreadcrumbsProps) {
  const getYearLabel = (y: string) => {
    switch (y) {
      case "1": return "1st Year"
      case "2": return "2nd Year"
      case "3": return "3rd Year"
      case "4": return "4th Year"
      default: return y + "th Year"
    }
  }

  const getSemLabel = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1) + " Sem"
  }

  return (
    <nav className={cn("flex items-center space-x-2 text-sm font-medium text-neutral-500 dark:text-neutral-400", className)}>
      <Link 
        href="/" 
        className="flex items-center hover:text-indigo-600 transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      <ChevronRight className="h-4 w-4 shrink-0" />
      
      <Link 
        href="/selection" 
        className="hover:text-indigo-600 transition-colors"
      >
        Selection
      </Link>

      {year && (
        <>
          <ChevronRight className="h-4 w-4 shrink-0" />
          <Link 
            href={`/selection`} 
            className="hover:text-indigo-600 transition-colors"
          >
            {getYearLabel(year)}
          </Link>
        </>
      )}

      {semester && (
        <>
          <ChevronRight className="h-4 w-4 shrink-0" />
          <span className="text-neutral-900 dark:text-neutral-100">
            {getSemLabel(semester)}
          </span>
        </>
      )}
    </nav>
  )
}
