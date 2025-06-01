"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DiscIcon as Discord } from "lucide-react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleDiscordLogin = async () => {
    setIsLoading(true)
    try {
      await signIn("discord", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Sign in to access the SingularityNET Governance Dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button
              onClick={handleDiscordLogin}
              className="bg-[#5865F2] hover:bg-[#4752c4] text-white w-full flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <Discord className="h-5 w-5" />
              {isLoading ? "Connecting..." : "Continue with Discord"}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Your role and permissions will be determined by your Discord server membership.</p>
        </CardFooter>
      </Card>
    </div>
  )
}
