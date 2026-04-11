"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  GraduationCap,
  LogOut,
  Settings,
  User,
} from "lucide-react"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user/UserAvatar"

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
    <Sidebar
      collapsible="icon"
      className="border-r border-neutral-200 dark:border-neutral-800"
    >
      <SidebarHeader className="flex h-16 items-center px-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-wider text-neutral-900 uppercase dark:text-neutral-100"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-black">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <span className="group-data-[collapsible=icon]:hidden">
            CampusHub
          </span>
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

        {bookmarks.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Bookmarked</SidebarGroupLabel>
            <SidebarMenu>
              {bookmarks.slice(0, 5).map((id) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton asChild tooltip={id.toUpperCase()}>
                    <Link href={`/dashboard?subject=${id}`}>
                      <div className="h-2 w-2 rounded-full bg-neutral-400" />
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex w-full cursor-pointer items-center gap-3 rounded-md p-1.5 transition-colors hover:bg-sidebar-accent">
                <UserAvatar user={session.user} className="size-8 rounded-md" />
                <div className="flex min-w-0 flex-1 flex-col items-start group-data-[collapsible=icon]:hidden">
                  <p className="truncate text-sm font-medium">
                    {session.user.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {session.user.email}
                  </p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" side="top">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
