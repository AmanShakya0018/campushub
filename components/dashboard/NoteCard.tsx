"use client"

import React from "react"
import { motion } from "motion/react"
import { FileText, Download, Share2, MoreVertical, Eye } from "lucide-react"
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="group overflow-hidden border-neutral-100 hover:border-indigo-500/30 hover:shadow-lg transition-all dark:border-neutral-800">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
            <FileText className="h-16 w-16 text-neutral-300 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button size="sm" className="bg-white text-black hover:bg-neutral-100">
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <Button size="sm" variant="secondary">
                <Download className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-3 left-3">
              <Badge className="bg-white/90 text-black border-none hover:bg-white/90 backdrop-blur-sm">
                {note.type.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-neutral-900 line-clamp-1 dark:text-neutral-100">
                {note.title}
              </h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={note.uploader.image} />
                  <AvatarFallback>{note.uploader.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-[10px]">
                  <p className="font-bold text-neutral-700 dark:text-neutral-300">{note.uploader.name}</p>
                  <p className="text-neutral-400">{note.createdAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="flex items-center gap-1 text-[10px]">
                  <Download className="h-3 w-3" />
                  {note.downloads}
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Share2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
