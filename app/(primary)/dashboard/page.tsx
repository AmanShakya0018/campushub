"use client"

import SignInButton from "@/components/user/SignInButton"
import UserAccountNav from "@/components/user/UserAccountNav"
import { useSession } from "next-auth/react"

const Page = () => {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {session?.user ? (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary">
              Welcome, {session.user.name || "Student"}
            </h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Ready to share some notes today?
            </p>
          </div>
          <UserAccountNav user={session.user} />
        </div>
      ) : (
        <div className="flex min-h-screen items-center justify-center">
          <SignInButton text={"Sign Up"} />
        </div>
      )}
    </div>
  )
}

export default Page
