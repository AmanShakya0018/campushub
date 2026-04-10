"use client"

import React from "react"
import { motion } from "motion/react"
import { Info, BookOpen, Target, Award, ShieldCheck, Microscope } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const roadmapData = [
  {
    year: "Year 1: Foundation",
    focus: "Basic Engineering & Programming",
    details: "Emphasis on core mathematics, physics, and introductory programming concepts to build a strong engineering foundation.",
    milestones: ["C Programming", "Calculus Essentials", "Engineering Principles"],
    icon: Target
  },
  {
    year: "Year 2: Core Engineering",
    focus: "Data Structures & Systems",
    details: "Deep dive into core CS subjects like Data Structures, Computer Architecture, and Operating Systems.",
    milestones: ["Algorithm Mastery", "System Architecture", "Logic Design"],
    icon: Microscope
  },
  {
    year: "Year 3: Specialization",
    focus: "Advanced Theory & Networking",
    details: "Exploration of specialized fields such as AI, Computer Networks, and Theory of Computation.",
    milestones: ["Network Security", "AI Algorithms", "Cloud Fundamentals"],
    icon: BookOpen
  },
  {
    year: "Year 4: Professional Practice",
    focus: "Capstone & Industry Readiness",
    details: "Application of knowledge through a major project and elective subjects tailored for industry specialization.",
    milestones: ["Major Project", "System Design", "Professional Ethics"],
    icon: Award
  }
]

export function SelectionGuide() {
  return (
    <div className="mt-24 border-t border-neutral-100 pt-20 dark:border-neutral-800">
      <div className="mb-12 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
          <Info className="h-3 w-3" />
          Academic Intelligence
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 uppercase">
          Curriculum Roadmap
        </h2>
        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto font-medium">
          A modular overview of your academic trajectory within the Computer Science department.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-neutral-100 bg-neutral-50/50 dark:bg-neutral-900/50 dark:border-neutral-800 rounded-none overflow-hidden group hover:border-neutral-900 transition-colors duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 border border-neutral-100 dark:border-neutral-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                  {item.year}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
                  {item.focus}
                </h3>
                <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium">
                  {item.details}
                </p>
                <div className="mt-6 space-y-2">
                  {item.milestones.map((milestone, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                      <ShieldCheck className="h-3 w-3 text-neutral-200 dark:text-neutral-800" />
                      {milestone}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-neutral-900 p-12 text-white dark:bg-white dark:text-black">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tighter sm:text-3xl leading-none">
              Standardized <br /> Credit System
            </h3>
            <p className="mt-4 text-xs font-medium opacity-60 uppercase tracking-widest leading-loose">
              Every subject module is weighted according to universal academic standards. 
              Ensure consistent progression by completing core modules first.
            </p>
          </div>
          <div className="flex justify-end">
            <Accordion type="single" collapsible className="w-full max-w-md border-t border-white/20 dark:border-black/20">
              <AccordionItem value="item-1" className="border-b border-white/20 dark:border-black/20">
                <AccordionTrigger className="text-[10px] font-bold uppercase tracking-[0.2em] hover:no-underline opacity-80">
                  What are Core Modules?
                </AccordionTrigger>
                <AccordionContent className="text-[10px] opacity-60 leading-relaxed font-medium uppercase tracking-widest">
                  Foundational subjects required for degree attainment. These typically carry 3-4 credits and form the basis of the CS curriculum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-white/20 dark:border-black/20">
                <AccordionTrigger className="text-[10px] font-bold uppercase tracking-[0.2em] hover:no-underline opacity-80">
                  Elective Specialization
                </AccordionTrigger>
                <AccordionContent className="text-[10px] opacity-60 leading-relaxed font-medium uppercase tracking-widest">
                  Subjects chosen by students to specialize in a specific niche. These enable tailoring the academic journey to vocational goals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
