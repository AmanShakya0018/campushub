"use client"
import SignInButton from "@/components/user/SignInButton"
import UserAccountNav from "@/components/user/UserAccountNav"
import { useSession } from "next-auth/react"
import React from "react"

const Page = () => {
  const { data: session } = useSession()
  return (
    <div>
      {session?.user ? (
        <UserAccountNav user={session.user} />
      ) : (
        <SignInButton text={"Sign Up"} />
      )}
    </div>
  )
}

export default Page
