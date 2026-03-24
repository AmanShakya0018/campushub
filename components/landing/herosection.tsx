"use client"

import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto flex w-full flex-col justify-center px-3 pt-40 pb-20 md:pt-44 lg:px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mx-auto max-w-sm text-center text-4xl font-medium tracking-tighter text-balance text-primary sm:max-w-2xl sm:text-5xl lg:text-5xl xl:text-6xl">
            Share and access notes with fellow students
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed tracking-tight text-balance text-neutral-600 md:text-lg dark:text-neutral-400">
            A collaborative notes repository where students can upload, access,
            and share their study materials with classmates to excel together.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <Button variant="default">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
