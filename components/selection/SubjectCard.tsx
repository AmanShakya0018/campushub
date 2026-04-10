"use client"

import React from "react"
import { motion } from "motion/react"
import { Bookmark, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Subject } from "@/lib/constants/subjects"

interface SubjectCardProps {
  subject: Subject
  index: number
  isBookmarked: boolean
  onToggleBookmark: (id: string) => void
  onClick: (id: string) => void
}

export function SubjectCard({ subject, index, isBookmarked, onToggleBookmark, onClick }: SubjectCardProps) {
  const Icon = subject.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        onClick={() => onClick(subject.id)}
        className="group relative cursor-pointer overflow-hidden border-2 border-transparent bg-white transition-all duration-300 hover:border-neutral-200 hover:shadow-xl dark:bg-neutral-800 dark:hover:border-neutral-700"
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700",
              subject.color
            )}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-[9px] px-1.5 py-0 h-5 font-bold uppercase tracking-tight bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                {subject.type}
              </Badge>
              <Button 
                size="icon" 
                variant="ghost" 
                className={cn(
                  "h-8 w-8 rounded-full transition-all duration-300",
                  isBookmarked ? "text-neutral-900 opacity-100 dark:text-neutral-100" : "opacity-0 group-hover:opacity-100 text-neutral-400"
                )}
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleBookmark(subject.id)
                }}
              >
                <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
              </Button>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 line-clamp-1 group-hover:text-black dark:group-hover:text-white transition-colors">
              {subject.name.toUpperCase()}
            </h3>
            <p className="mt-2 text-[10px] font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
              {subject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {subject.tags.map(tag => (
                <span key={tag} className="text-[9px] font-bold uppercase tracking-tight text-neutral-400 border border-neutral-100 px-1.5 py-0.5 dark:border-neutral-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-400">Difficulty</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div 
                      key={level} 
                      className={cn(
                        "h-1 w-4 rounded-full transition-colors",
                        level <= subject.difficulty 
                          ? "bg-neutral-900 dark:bg-neutral-100" 
                          : "bg-neutral-100 dark:bg-neutral-800"
                      )} 
                    />
                  ))}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-0.5">Volume</span>
                <span className="text-[10px] font-bold text-neutral-900 dark:text-neutral-100">{subject.credits} CR</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
              <span>View Access Protocol</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
