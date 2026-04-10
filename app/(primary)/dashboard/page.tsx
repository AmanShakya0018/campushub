"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { motion } from "motion/react"
import { BookOpen, Upload, Star, Clock, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SignInButton from "@/components/user/SignInButton"

import { SubjectFeed } from "@/components/dashboard/SubjectFeed"
import { mockNotes } from "@/lib/constants/mockNotes"

export default function DashboardPage() {
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const subjectId = searchParams.get("subject")

  if (!session?.user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <Card className="max-w-md w-full p-8 text-center bg-white dark:bg-neutral-900 shadow-xl">
          <Upload className="mx-auto h-12 w-12 text-neutral-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Sign in to continue</h2>
          <p className="text-neutral-500 mb-6">Access your dashboard, bookmarks, and community notes.</p>
          <SignInButton text="Sign In with Google" />
        </Card>
      </div>
    )
  }

  if (subjectId) {
    const notes = mockNotes[subjectId] || []
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-50">
            {subjectId} <span className="text-neutral-400 font-normal">/ Feed</span>
          </h1>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Upload className="mr-2 h-4 w-4" />
            Upload Note
          </Button>
        </div>
        
        <SubjectFeed subjectId={subjectId} notes={notes} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
        >
          Welcome back, {session.user.name?.split(" ")[0]}!
        </motion.h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
          Here's what's happening in your engineering hub today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Bookmarked", value: "12", icon: Star, color: "text-amber-500" },
          { label: "My Uploads", value: "4", icon: Upload, color: "text-indigo-500" },
          { label: "Total Notes", value: "124", icon: BookOpen, color: "text-emerald-500" },
          { label: "Reading Time", value: "8h", icon: Clock, color: "text-sky-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <stat.icon className={cn("h-5 w-5", stat.color)} />
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    +12% <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Recent Community Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-neutral-100 last:border-0 pb-4 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-100 dark:bg-neutral-800" />
                  <div>
                    <p className="text-sm font-semibold">User {item} uploaded DBMS Notes</p>
                    <p className="text-xs text-neutral-500">2 hours ago</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">View</Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-indigo-600 text-white relative overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">Support the community</h3>
            <p className="text-indigo-100 mb-6 max-w-xs">Upload your own handwritten or digital notes to help fellow CSE students.</p>
            <Button className="w-fit bg-white text-indigo-600 hover:bg-neutral-100 font-bold">
              Start Uploading
            </Button>
          </div>
          <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-indigo-500/50" />
        </Card>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
