"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"
import {
  FiUpload,
  FiDownload,
  FiUsers,
  FiBookOpen,
  FiSearch,
  FiStar,
} from "react-icons/fi"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: FiUpload,
    title: "Share Notes",
    description:
      "Upload and share your study notes with classmates. Make your notes available for the entire community to benefit from.",
  },
  {
    icon: FiDownload,
    title: "Access Notes",
    description:
      "Browse and download notes from other students. Find high-quality study materials for any subject or course.",
  },
  {
    icon: FiUsers,
    title: "Collaborate",
    description:
      "Work together with peers to improve learning. Connect with fellow students and study groups.",
  },
  {
    icon: FiBookOpen,
    title: "Organize by Subject",
    description:
      "Find notes easily by subject, course, or topic. Keep everything organized and searchable.",
  },
  {
    icon: FiSearch,
    title: "Search & Discover",
    description:
      "Search through thousands of notes from other students. Find exactly what you need quickly.",
  },
  {
    icon: FiStar,
    title: "Rate & Review",
    description:
      "Help others find the best notes by rating and reviewing. Build a trusted collection of study materials.",
  },
]

const FeatureSection = () => {
  return (
    <section className="w-full py-32 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
            <span className="h-px w-8 bg-neutral-200" />
            Core Architecture
            <span className="h-px w-8 bg-neutral-200" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50 uppercase">
            Protocol Features
          </h2>
          <p className="mt-6 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto font-medium">
            Standardized modules for academic knowledge distribution and peer-to-peer collaboration.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden border-2 border-neutral-100 bg-white dark:bg-neutral-900 dark:border-neutral-800 rounded-none transition-all duration-300 hover:border-neutral-900 dark:hover:border-neutral-100">
                <CardHeader>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-none bg-neutral-50 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 transition-colors group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-neutral-100 dark:group-hover:text-black">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg font-bold tracking-tight uppercase">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
