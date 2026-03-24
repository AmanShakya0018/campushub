"use client"
import React from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { Spinner } from "../ui/spinner"
import { Button } from "../ui/button"

type Props = { text: string }

const SignInButton = ({ text }: Props) => {
  const { status } = useSession()

  return (
    <Link href="/signin">
      <Button variant="default">
        {status === "loading" ? <Spinner /> : <>{text}</>}
      </Button>
    </Link>
  )
}

export default SignInButton
