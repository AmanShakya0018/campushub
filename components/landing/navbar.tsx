"use client"

import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react"
import UserAccountNav from "../user/UserAccountNav"
import SignInButton from "../user/SignInButton"
import { Logo } from "../ui/logo"
import { Themetoggle } from "../ui/ThemeToggle"

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <div
      className={cn(
        "sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/70"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        <Logo />

        <div className="flex items-center gap-3 text-sm font-medium">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign Up"} />
          )}
          <Themetoggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
