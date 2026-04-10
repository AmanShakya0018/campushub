"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
} | null>(null)

export function Tabs({ 
  value, 
  defaultValue, 
  onValueChange, 
  className, 
  children 
}: { 
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const activeValue = value !== undefined ? value : internalValue
  
  const handleValueChange = React.useCallback((newValue: string) => {
    if (value === undefined) setInternalValue(newValue)
    onValueChange?.(newValue)
  }, [value, onValueChange])

  return (
    <TabsContext.Provider value={{ value: activeValue, onValueChange: handleValueChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400", className)}>
      {children}
    </div>
  )
}

export function TabsTrigger({ 
  value, 
  className, 
  children 
}: { 
  value: string
  className?: string
  children: React.ReactNode
}) {
  const context = React.useContext(TabsContext)
  if (!context) return null

  const isActive = context.value === value

  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive 
          ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-neutral-50" 
          : "hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50",
        className
      )}
    >
      {children}
    </button>
  )
}

export function TabsContent({ 
  value, 
  className, 
  children 
}: { 
  value: string
  className?: string
  children: React.ReactNode
}) {
  const context = React.useContext(TabsContext)
  if (!context || context.value !== value) return null

  return (
    <div className={cn("mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2", className)}>
      {children}
    </div>
  )
}
