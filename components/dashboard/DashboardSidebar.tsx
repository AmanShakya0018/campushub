"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, GraduationCap, BookOpen, Bookmark, LogOut, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user/UserAvatar"
import { useSession, signOut } from "next-auth/react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

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
    <Sidebar collapsible="icon" className="border-r border-neutral-200 dark:border-neutral-800">
      <SidebarHeader className="h-16 flex items-center px-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl uppercase tracking-wider text-indigo-600">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <span className="group-data-[collapsible=icon]:hidden">CampusHub</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={pathname === "/dashboard"} 
                tooltip="Overview"
              >
                <Link href="/dashboard">
                  <LayoutDashboard />
                  <span>Overview</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={pathname.startsWith("/selection")} 
                tooltip="Year Selection"
              >
                <Link href="/selection">
                  <GraduationCap />
                  <span>Year Selection</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Library</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Starred Notes">
                <Link href="/dashboard?view=starred">
                  <Bookmark />
                  <span>Starred Notes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Recent History">
                <Link href="/dashboard?view=recents">
                  <BookOpen />
                  <span>Recent History</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {bookmarks.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Bookmarked</SidebarGroupLabel>
            <SidebarMenu>
              {bookmarks.slice(0, 5).map((id) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton asChild tooltip={id.toUpperCase()}>
                    <Link href={`/dashboard?subject=${id}`}>
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />
                      <span className="uppercase">{id}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-neutral-200 p-2 dark:border-neutral-800">
        {session?.user && (
          <div className="flex items-center gap-3 px-2 py-3 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center">
            <UserAvatar user={session.user} className="h-8 w-8" />
            <div className="flex-1 overflow-hidden group-data-[collapsible=icon]:hidden">
              <p className="truncate text-xs font-semibold">{session.user.name}</p>
              <p className="truncate text-[10px] text-neutral-500">{session.user.email}</p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-1">
          <SidebarMenuButton 
            className="text-neutral-500 hover:text-red-500" 
            onClick={() => signOut()}
            tooltip="Sign Out"
          >
            <LogOut />
            <span>Sign Out</span>
          </SidebarMenuButton>
          <SidebarMenuButton className="text-neutral-500" tooltip="Settings">
            <Settings />
            <span>Settings</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
