"use client"

import React from "react"
import { motion } from "motion/react"
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

export function SubjectCard({
  subject,
  index,
  isBookmarked,
  onToggleBookmark,
  onClick,
}: SubjectCardProps) {
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
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700",
                subject.color
              )}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="h-5 bg-neutral-100 px-1.5 py-0 text-[9px] font-bold tracking-tight text-neutral-600 uppercase dark:bg-neutral-800 dark:text-neutral-400"
              >
                {subject.type}
              </Badge>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="line-clamp-1 text-lg font-bold text-neutral-900 transition-colors group-hover:text-black dark:text-neutral-50 dark:group-hover:text-white">
              {subject.name.toUpperCase()}
            </h3>
            <p className="mt-2 line-clamp-2 text-[10px] leading-relaxed font-medium text-neutral-500 dark:text-neutral-400">
              {subject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {subject.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-neutral-100 px-1.5 py-0.5 text-[9px] font-bold tracking-tight text-neutral-400 uppercase dark:border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-neutral-100 pt-4 dark:border-neutral-700">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                  Difficulty
                </span>
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
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
