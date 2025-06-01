"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Home, Settings, Users, Vote } from "lucide-react"
import { useSession } from "next-auth/react"
import { RoleBasedContent } from "./role-based-content"

const routes = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    roles: ["admin", "contributor", "member"],
  },
  {
    title: "Proposals",
    href: "/dashboard/proposals",
    icon: FileText,
    roles: ["admin", "contributor", "member"],
  },
  {
    title: "Voting",
    href: "/dashboard/voting",
    icon: Vote,
    roles: ["admin", "contributor", "member"],
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
    roles: ["admin", "contributor", "member"],
  },
  {
    title: "Admin",
    href: "/dashboard/admin",
    icon: Settings,
    roles: ["admin"],
  },
]

export function SidebarNav() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const userRole = session?.user?.role || "member"

  return (
    <nav className="w-64 border-r bg-background hidden md:block p-4 space-y-2">
      {routes.map((route) => {
        // Only show routes the user has access to
        if (!route.roles.includes(userRole)) {
          return null
        }

        return (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === route.href
                ? "bg-purple-100 text-purple-900 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-50 dark:hover:bg-purple-900/30"
                : "",
            )}
            asChild
          >
            <Link href={route.href}>
              <route.icon className="mr-2 h-4 w-4" />
              {route.title}
            </Link>
          </Button>
        )
      })}

      <RoleBasedContent roles={["admin"]}>
        <div className="pt-4 mt-4 border-t">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/users">
              <Users className="mr-2 h-4 w-4" />
              User Management
            </Link>
          </Button>
        </div>
      </RoleBasedContent>
    </nav>
  )
}
