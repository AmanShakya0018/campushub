"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto flex w-full flex-col justify-center px-3 pt-48 pb-28 md:pt-56 lg:px-5">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tighter text-balance text-neutral-950 sm:max-w-3xl sm:text-5xl lg:text-6xl xl:text-7xl dark:text-neutral-50">
            Your Notes, <br className="hidden sm:block" />
            Organized Effortlessly
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed font-medium tracking-tight text-balance text-neutral-500 md:text-lg dark:text-neutral-400">
            Capture, organize, and access your study notes from anywhere. Sync
            across all your devices and never lose important information again.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:mt-14 sm:gap-5">
            <Link href="/dashboard">
              <Button
                variant="default"
                className="h-14 bg-neutral-900 px-10 text-sm font-bold tracking-[0.2em] text-white uppercase transition-all hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
