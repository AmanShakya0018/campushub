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
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50"
          >
            Select Your Academic Level
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-400"
          >
            Choose your year and semester to access the right study materials.
          </motion.p>
        </div>

        <div className="space-y-12">
          {/* Year Selection */}
          <section>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Select Year</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {years.map((year) => (
                <motion.div
                  key={year.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    onClick={() => setSelectedYear(year.id)}
                    className={cn(
                      "group relative cursor-pointer overflow-hidden border-2 transition-all duration-300",
                      selectedYear === year.id
                        ? "border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-500/10 dark:border-indigo-500 dark:bg-indigo-500/10"
                        : "border-transparent bg-white hover:border-neutral-200 dark:bg-neutral-800 dark:hover:border-neutral-700"
                    )}
                  >
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors",
                        selectedYear === year.id ? "bg-indigo-600 text-white" : "bg-neutral-100 text-neutral-500 dark:bg-neutral-700"
                      )}>
                        <Layers className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold">{year.label}</h3>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{year.description}</p>
                      {selectedYear === year.id && (
                        <motion.div 
                          layoutId="activeYear"
                          className="absolute top-2 right-2 h-6 w-6 rounded-full bg-indigo-600 p-1 text-white"
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
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Select Semester</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {semesters.map((sem) => (
                    <motion.div
                      key={sem.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card
                        onClick={() => setSelectedSem(sem.id)}
                        className={cn(
                          "group relative cursor-pointer overflow-hidden border-2 p-1 transition-all duration-300",
                          selectedSem === sem.id
                            ? "border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-500/10 dark:border-indigo-500 dark:bg-indigo-500/10"
                            : "border-transparent bg-white hover:border-neutral-200 dark:bg-neutral-800 dark:hover:border-neutral-700"
                        )}
                      >
                        <CardContent className="flex items-center gap-4 p-6">
                          <div className={cn(
                            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors",
                            selectedSem === sem.id ? "bg-indigo-600 text-white" : "bg-neutral-100 text-neutral-500 dark:bg-neutral-700"
                          )}>
                            <Calendar className="h-8 w-8" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold">{sem.label}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{sem.sub}</p>
                          </div>
                          {selectedSem === sem.id && (
                            <div className="h-6 w-6 rounded-full bg-indigo-600 p-1 text-white">
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
              size="lg"
              className={cn(
                "h-14 w-full max-w-xs transition-all duration-300 sm:text-lg",
                selectedYear && selectedSem 
                  ? "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20" 
                  : "bg-neutral-200 text-neutral-500 dark:bg-neutral-800"
              )}
            >
              Continue to Subjects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
