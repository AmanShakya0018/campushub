"use client"

import React from "react"
import { motion } from "motion/react"
import { FileText, Share2, MoreVertical, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface Note {
  id: string
  title: string
  fileUrl: string
  uploader: {
    name: string
    image?: string
  }
  createdAt: string
  downloads: number
  type: string // "handwritten" | "digital" | "pyq"
}

interface NoteCardProps {
  note: Note
  index: number
}

export function NoteCard({ note, index }: NoteCardProps) {
  const handlePreview = () => {
    window.open(note.fileUrl, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="group overflow-hidden border-2 border-neutral-200 transition-all hover:border-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-100">
        <CardContent className="p-0">
          <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <FileText className="h-16 w-16 text-neutral-300 transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-neutral-900/60 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                size="sm"
                className="rounded-none bg-white text-[10px] font-bold tracking-wider text-black uppercase hover:bg-neutral-200"
                onClick={handlePreview}
              >
                <Eye className="mr-2 h-3 w-3" />
                Preview
              </Button>
            </div>
            <div className="absolute top-3 left-3">
              <Badge className="rounded-none border-none bg-neutral-900 text-[9px] font-bold tracking-tight text-white uppercase hover:bg-neutral-950 dark:bg-neutral-100 dark:text-black">
                {note.type.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="line-clamp-1 font-bold text-neutral-900 dark:text-neutral-100">
                {note.title}
              </h3>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={note.uploader.image} />
                  <AvatarFallback>{note.uploader.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-[10px]">
                  <p className="font-bold text-neutral-700 dark:text-neutral-300">
                    {note.uploader.name}
                  </p>
                  <p className="text-neutral-400">{note.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
