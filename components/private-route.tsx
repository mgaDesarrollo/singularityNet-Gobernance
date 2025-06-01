"use client"

import type React from "react"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface PrivateRouteProps {
  children: React.ReactNode
  requiredRole?: "admin" | "contributor" | "member"
}

export function PrivateRoute({ children, requiredRole }: PrivateRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    // If the user is not authenticated, redirect to login
    if (status === "unauthenticated") {
      router.push("/login")
    }

    // If a specific role is required and the user doesn't have it
    if (requiredRole && session?.user?.role !== requiredRole) {
      router.push("/dashboard")
    }
  }, [session, status, router, requiredRole])

  // Show nothing while checking authentication
  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  // If authenticated (and has required role if specified), show the children
  if (status === "authenticated") {
    if (requiredRole && session.user?.role !== requiredRole) {
      return <div className="flex items-center justify-center min-h-screen">Unauthorized access</div>
    }
    return <>{children}</>
  }

  // Default case - not authenticated
  return <div className="flex items-center justify-center min-h-screen">Please log in to access this page</div>
}
