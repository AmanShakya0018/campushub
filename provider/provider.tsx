"use client"
import React, { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "./theme-provider"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  //   const [queryClient] = useState(() => new QueryClient())

  return (
    <SessionProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      {/* </QueryClientProvider> */}
    </SessionProvider>
  )
}

export default Provider
