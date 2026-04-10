"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto flex w-full flex-col justify-center px-3 pt-40 pb-20 md:pt-44 lg:px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mx-auto max-w-sm text-center text-4xl font-bold tracking-tighter text-balance text-neutral-950 sm:max-w-2xl sm:text-5xl lg:text-5xl xl:text-7xl dark:text-neutral-50 uppercase">
            Curated Academic Excellence
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed tracking-tight text-balance text-neutral-500 md:text-lg dark:text-neutral-400 font-medium">
            The strictly monotone repository for shared knowledge.
            Access, upload, and collaborate on world-class study materials.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            <Link href="/dashboard">
            <Button variant="default" className="h-12 px-8 rounded-none bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-xs font-bold uppercase tracking-[0.2em] transition-all">
              Dashboard
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
