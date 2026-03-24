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
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-2">
                <feature.icon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-primary">{feature.title}</CardTitle>
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
