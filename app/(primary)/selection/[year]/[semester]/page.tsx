"use client"

import React from "react"
import { motion } from "motion/react"
import { useRouter, useParams } from "next/navigation"
import { Book, ChevronLeft, Search, Bookmark, ArrowRight, Brain, Cpu, Database, Network, Code, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const subjectsData: Record<string, Record<string, any[]>> = {
  "1": {
    odd: [
      { id: "math1", name: "Mathematics - I", icon: Brain, color: "text-blue-500", tags: ["Calculus", "Matrices"] },
      { id: "phy", name: "Engineering Physics", icon: Cpu, color: "text-amber-500", tags: ["Optics", "Quantum"] },
      { id: "pps", name: "Programming for Problem Solving", icon: Code, color: "text-green-500", tags: ["C Programming", "Logic"] },
      { id: "ee", name: "Basic Electrical Engineering", icon: Cpu, color: "text-red-500", tags: ["Circuits", "Transformers"] },
    ],
    even: [
      { id: "math2", name: "Mathematics - II", icon: Brain, color: "text-blue-500", tags: ["ODEs", "Complex Var"] },
      { id: "chem", name: "Engineering Chemistry", icon: Database, color: "text-cyan-500", tags: ["Polymers", "Fuels"] },
      { id: "english", name: "English for Communication", icon: Book, color: "text-pink-500", tags: ["Soft Skills", "Grammar"] },
      { id: "mfg", name: "Manufacturing Practices", icon: Layers, color: "text-orange-500", tags: ["Workshop", "Tools"] },
    ],
  },
  "2": {
    odd: [
      { id: "dsa", name: "Data Structures & Algorithms", icon: Code, color: "text-emerald-500", tags: ["Trees", "Graphs"] },
      { id: "coa", name: "Computer Organization", icon: Cpu, color: "text-zinc-500", tags: ["Architecture", "CPU"] },
      { id: "dm", name: "Discrete Mathematics", icon: Brain, color: "text-purple-500", tags: ["Set Theory", "Logic"] },
      { id: "de", name: "Digital Electronics", icon: Cpu, color: "text-red-500", tags: ["Gates", "K-Maps"] },
    ],
    even: [
      { id: "os", name: "Operating Systems", icon: Layers, color: "text-sky-500", tags: ["Scheduling", "Memory"] },
      { id: "dbms", name: "Database Management Systems", icon: Database, color: "text-blue-600", tags: ["SQL", "Normalization"] },
      { id: "se", name: "Software Engineering", icon: Book, color: "text-indigo-500", tags: ["SDLC", "Testing"] },
      { id: "python", name: "Python Programming", icon: Code, color: "text-yellow-600", tags: ["Scripting", "Data Sci"] },
    ],
  },
  "3": {
    odd: [
      { id: "ai", name: "Artificial Intelligence", icon: Brain, color: "text-purple-600", tags: ["ML", "Search"] },
      { id: "cn", name: "Computer Networks", icon: Network, color: "text-blue-500", tags: ["TCP/IP", "Security"] },
      { id: "toc", name: "Theory of Computation", icon: Brain, color: "text-fuschia-500", tags: ["Automata", "Grammar"] },
      { id: "da", name: "Design & Analysis of Algorithms", icon: Code, color: "text-green-600", tags: ["Dynamic Prog", "Greedy"] },
    ],
    even: [
      { id: "cd", name: "Compiler Design", icon: Code, color: "text-rose-500", tags: ["Parsing", "Optimization"] },
      { id: "wt", name: "Web Technologies", icon: Network, color: "text-blue-400", tags: ["React", "Backend"] },
      { id: "is", name: "Information Security", icon: Shield, color: "text-emerald-600", tags: ["Crypto", "Network Sec"] },
      { id: "cc", name: "Cloud Computing", icon: Layers, color: "text-sky-400", tags: ["AWS", "Azure"] },
    ],
  },
  "4": {
    odd: [
      { id: "bd", name: "Big Data Analytics", icon: Database, color: "text-orange-600", tags: ["Hadoop", "Spark"] },
      { id: "cy", name: "Cyber Security & Laws", icon: Shield, color: "text-red-600", tags: ["Ethical Hacking", "Forensics"] },
      { id: "ds", name: "Distributed Systems", icon: Network, color: "text-blue-700", tags: ["RPC", "Consensus"] },
      { id: "iot", name: "Internet of Things", icon: Cpu, color: "text-teal-500", tags: ["Sensors", "Arduino"] },
    ],
    even: [
      { id: "cap", name: "Capstone Project", icon: Book, color: "text-indigo-700", tags: ["Implementation", "Doc"] },
      { id: "st", name: "Software Testing", icon: Shield, color: "text-green-700", tags: ["QA", "Jasmine"] },
      { id: "es", name: "Embedded Systems", icon: Cpu, color: "text-amber-700", tags: ["Microcontrollers", "RTOS"] },
    ],
  },
}

import { Layers } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SubjectSelectionPage() {
  const router = useRouter()
  const params = useParams()
  const year = params.year as string
  const semester = params.semester as string

  const subjects = subjectsData[year]?.[semester] || []
  const [search, setSearch] = React.useState("")

  const filteredSubjects = subjects.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  )

  const handleSubjectClick = (subjectId: string) => {
    router.push(`/dashboard?subject=${subjectId}&year=${year}&sem=${semester}`)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-neutral-100 px-4 py-20 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="group text-neutral-600 dark:text-neutral-400"
          >
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Selection
          </Button>

          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            CSE • {year}{year === "1" ? "st" : year === "2" ? "nd" : year === "3" ? "rd" : "th"} Year • {semester.charAt(0).toUpperCase() + semester.slice(1)} Sem
          </Badge>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50 text-center">
            Choose a Subject
          </h1>
          <p className="mt-3 text-center text-neutral-600 dark:text-neutral-400">
            Select a subject to view or upload notes.
          </p>

          <div className="mx-auto mt-8 max-w-md relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input 
              placeholder="Search subjects or topics..." 
              className="pl-10 h-12 bg-white dark:bg-neutral-800"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSubjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                onClick={() => handleSubjectClick(subject.id)}
                className="group relative cursor-pointer overflow-hidden border-2 border-transparent bg-white transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl dark:bg-neutral-800"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-indigo-50 dark:bg-neutral-700 dark:group-hover:bg-indigo-900/30",
                      subject.color
                    )}>
                      <subject.icon className="h-6 w-6" />
                    </div>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 line-clamp-1">
                      {subject.name}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {subject.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-[10px] font-medium bg-neutral-50/50 dark:bg-neutral-900/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-700">
                    <span className="text-xs font-medium text-neutral-500">24 Files Available</span>
                    <div className="flex items-center text-xs font-bold text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400">
                      View Notes
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="mt-20 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
              <Search className="h-10 w-10 text-neutral-400" />
            </div>
            <h3 className="mt-4 text-xl font-medium">No subjects found</h3>
            <p className="text-neutral-500">Try searching for something else or check another semester.</p>
          </div>
        )}
      </div>
    </div>
  )
}
