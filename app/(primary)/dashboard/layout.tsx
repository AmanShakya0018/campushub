import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Sidebar - Hidden on mobile, fixed on desktop */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col pl-64">
        {/* Header - Sticky at top */}
        <DashboardHeader />

        {/* Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
