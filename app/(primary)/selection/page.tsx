"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useRouter } from "next/navigation"
import { Check, ChevronRight, GraduationCap, Calendar, BookOpen, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const years = [
  { id: 1, label: "1st Year", description: "Freshman Year" },
  { id: 2, label: "2nd Year", description: "Sophomore Year" },
  { id: 3, label: "3rd Year", description: "Junior Year" },
  { id: 4, label: "4th Year", description: "Senior Year" },
]

const semesters = [
  { id: "odd", label: "Odd Semester", sub: "Sem 1, 3, 5, 7" },
  { id: "even", label: "Even Semester", sub: "Sem 2, 4, 6, 8" },
]

export default function SelectionPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedSem, setSelectedSem] = useState<string | null>(null)
  const router = useRouter()

  const handleContinue = () => {
    if (selectedYear && selectedSem) {
      router.push(`/selection/${selectedYear}/${selectedSem}`)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-neutral-100 px-4 py-20 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-4xl">
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-neutral-400">
              <div className={cn("flex items-center gap-2", !selectedYear ? "text-neutral-900 dark:text-neutral-100" : "")}>
                <span className={cn("flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200", !selectedYear ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black border-transparent" : "bg-neutral-50 dark:bg-neutral-800")}>1</span>
                Year
              </div>
              <div className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
              <div className={cn("flex items-center gap-2", selectedYear && !selectedSem ? "text-neutral-900 dark:text-neutral-100" : "")}>
                <span className={cn("flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200", selectedYear && !selectedSem ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black border-transparent" : "bg-neutral-50 dark:bg-neutral-800")}>2</span>
                Semester
              </div>
              <div className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 dark:bg-neutral-800 text-neutral-300">3</span>
                Subject
              </div>
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50 text-center uppercase"
          >
            Academic Selection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 text-center"
          >
            Configure your curriculum parameters to access specific study materials.
          </motion.p>
        </div>

        <div className="space-y-16">
          {/* Year Selection */}
          <section>
            <div className="mb-6 flex items-center justify-center gap-2 opacity-50">
              <GraduationCap className="h-4 w-4" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Select Period</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {years.map((year) => (
                <motion.div
                  key={year.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    onClick={() => setSelectedYear(year.id)}
                    className={cn(
                      "group relative cursor-pointer overflow-hidden border-2 transition-all duration-300",
                      selectedYear === year.id
                        ? "border-neutral-900 bg-neutral-50 ring-4 ring-neutral-900/5 dark:border-neutral-100 dark:bg-neutral-900 dark:ring-neutral-100/5"
                        : "border-transparent bg-white hover:border-neutral-200 dark:bg-neutral-800 dark:hover:border-neutral-700"
                    )}
                  >
                    <CardContent className="flex flex-col items-center p-8 text-center">
                      <div className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors",
                        selectedYear === year.id ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black" : "bg-neutral-100 text-neutral-400 dark:bg-neutral-700"
                      )}>
                        <Layers className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold tracking-tight">{year.label.toUpperCase()}</h3>
                      <p className="mt-1 text-[10px] items-center font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">{year.description}</p>
                      {selectedYear === year.id && (
                        <motion.div 
                          layoutId="activeYear"
                          className="absolute top-2 right-2 h-5 w-5 rounded-full bg-neutral-900 p-1 text-white dark:bg-neutral-100 dark:text-black"
                        >
                          <Check className="h-full w-full" />
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Semester Selection */}
          <AnimatePresence>
            {selectedYear && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 flex items-center justify-center gap-2 opacity-50">
                  <BookOpen className="h-4 w-4" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Select Semester</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                  {semesters.map((sem) => (
                    <motion.div
                      key={sem.id}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card
                        onClick={() => setSelectedSem(sem.id)}
                        className={cn(
                          "group relative cursor-pointer overflow-hidden border-2 transition-all duration-300",
                          selectedSem === sem.id
                            ? "border-neutral-900 bg-neutral-50 ring-4 ring-neutral-900/5 dark:border-neutral-100 dark:bg-neutral-900 dark:ring-neutral-100/5"
                            : "border-transparent bg-white hover:border-neutral-200 dark:bg-neutral-800 dark:hover:border-neutral-700"
                        )}
                      >
                        <CardContent className="flex items-center gap-6 p-8">
                          <div className={cn(
                            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors",
                            selectedSem === sem.id ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black" : "bg-neutral-100 text-neutral-400 dark:bg-neutral-700"
                          )}>
                            <Calendar className="h-7 w-7" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold tracking-tight">{sem.label.toUpperCase()}</h3>
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">{sem.sub}</p>
                          </div>
                          {selectedSem === sem.id && (
                            <div className="h-6 w-6 rounded-full bg-neutral-900 p-1 text-white dark:bg-neutral-100 dark:text-black">
                              <Check className="h-full w-full" />
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Continue Button */}
          <div className="mt-12 flex justify-center">
            <Button
              disabled={!selectedYear || !selectedSem}
              onClick={handleContinue}
              className={cn(
                "h-14 w-full max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] rounded-none border-2",
                selectedYear && selectedSem 
                  ? "bg-neutral-900 text-white hover:bg-black border-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:border-white" 
                  : "bg-neutral-50 text-neutral-300 border-neutral-100 dark:bg-neutral-900 dark:text-neutral-700 dark:border-neutral-800"
              )}
            >
              Continue to Subjects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
    </div>
  )
}
