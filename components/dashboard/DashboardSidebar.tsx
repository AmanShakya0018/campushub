"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, GraduationCap, BookOpen, Bookmark, ChevronLeft, LogOut, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Themetoggle } from "@/components/ui/ThemeToggle"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { UserAvatar } from "@/components/user/UserAvatar"
import { useSession, signOut } from "next-auth/react"

interface SidebarItemProps {
  href: string
  icon: any
  label: string
  isActive?: boolean
}

function SidebarItem({ href, icon: Icon, label, isActive }: SidebarItemProps) {
  return (
    <Link href={href}>
      <div className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800",
        isActive ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400" : "text-neutral-500 dark:text-neutral-400"
      )}>
        <Icon className="h-4 w-4" />
        {label}
      </div>
    </Link>
  )
}

export function DashboardSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [bookmarks, setBookmarks] = React.useState<string[]>([])

  React.useEffect(() => {
    const saved = localStorage.getItem("campushub_bookmarks")
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse bookmarks", e)
      }
    }
  }, [])

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl uppercase tracking-wider text-indigo-600">
            <LayoutDashboard className="h-6 w-6" />
            <span>CampusHub</span>
          </Link>
        </div>

        <ScrollArea className="flex-1 px-4">
          <div className="space-y-6 py-4">
            <div className="space-y-1">
              <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Main Menu</h4>
              <SidebarItem href="/dashboard" icon={LayoutDashboard} label="Overview" isActive={pathname === "/dashboard"} />
              <SidebarItem href="/selection" icon={GraduationCap} label="Year Selection" isActive={pathname.startsWith("/selection")} />
            </div>

            <Separator className="mx-3 opacity-50" />

            <div className="space-y-1">
              <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Library</h4>
              <SidebarItem href="/dashboard?view=starred" icon={Bookmark} label="Starred Notes" />
              <SidebarItem href="/dashboard?view=recents" icon={BookOpen} label="Recent History" />
            </div>

            {bookmarks.length > 0 && (
              <div className="space-y-1">
                <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Bookmarked</h4>
                {bookmarks.slice(0, 5).map((id) => (
                  <Link key={id} href={`/dashboard?subject=${id}`}>
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span className="truncate uppercase">{id}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="mt-auto border-t border-neutral-200 p-4 dark:border-neutral-800">
          {session?.user && (
            <div className="flex items-center gap-3 px-2 py-3">
              <UserAvatar user={session.user} className="h-9 w-9" />
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-semibold">{session.user.name}</p>
                <p className="truncate text-xs text-neutral-500">{session.user.email}</p>
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            <Button variant="ghost" size="sm" className="justify-start gap-2 text-neutral-500" onClick={() => signOut()}>
              <LogOut className="h-4 w-4" />
              Exit
            </Button>
            <Button variant="ghost" size="sm" className="justify-start gap-2 text-neutral-500">
              <Settings className="h-4 w-4" />
              Config
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}
