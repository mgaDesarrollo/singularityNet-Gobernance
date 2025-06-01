"use client"

import type React from "react"

import { useSession } from "next-auth/react"

interface RoleBasedContentProps {
  children: React.ReactNode
  roles: string[]
}

export function RoleBasedContent({ children, roles }: RoleBasedContentProps) {
  const { data: session } = useSession()
  const userRole = session?.user?.role || "member"

  // If the user's role is in the allowed roles, render the children
  if (roles.includes(userRole)) {
    return <>{children}</>
  }

  // Otherwise, render nothing
  return null
}
