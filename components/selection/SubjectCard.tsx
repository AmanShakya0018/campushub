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
        className="group relative cursor-pointer overflow-hidden border-2 border-transparent bg-white transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl dark:bg-neutral-800"
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-indigo-50 dark:bg-neutral-700 dark:group-hover:bg-indigo-900/30",
              subject.color
            )}>
              <Icon className="h-6 w-6" />
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              className={cn(
                "h-8 w-8 rounded-full transition-all duration-300",
                isBookmarked ? "text-indigo-600 opacity-100" : "opacity-0 group-hover:opacity-100 text-neutral-400"
              )}
              onClick={(e) => {
                e.stopPropagation()
                onToggleBookmark(subject.id)
              }}
            >
              <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
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
            <span className="text-xs font-medium text-neutral-500">View Module</span>
            <div className="flex items-center text-xs font-bold text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400">
              Notes
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
