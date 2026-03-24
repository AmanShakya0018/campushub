"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Everything you need to share and access study materials
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "border-neutral-200 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-lg",
                "dark:border-neutral-800 dark:hover:border-neutral-700"
              )}
            >
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
