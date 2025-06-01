import type React from "react"
import { SidebarNav } from "@/components/sidebar-nav"
import { UserNav } from "@/components/user-nav"
import { PrivateRoute } from "@/components/private-route"
// import { Button } from "react-day-picker"
import { Rocket } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivateRoute>
      <div className="flex min-h-screen flex-col">
        <header className="container mx-auto py-6 px-4 md:px-6 bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    {/* Reemplaza el círculo con un logo */}
                    <div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform duration-300" // Agregué la clase de transición aquí
                    >
                        <Rocket className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground">
                        <span className="text-purple-500">Singularity</span><span className="font-semibold">NET</span> Governance
                    </h1>
                </div>
                <div className="flex gap-4">
                   <UserNav />
                </div>
            </div>
        </header>
        <div className="flex flex-1">
          <SidebarNav />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </PrivateRoute>
  )
}
