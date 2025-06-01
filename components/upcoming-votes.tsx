"use client"

import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data for upcoming votes
const upcomingVotes = [
  {
    id: "1",
    title: "Q2 2023 Ambassador Program Report",
    dueDate: "2023-07-01T23:59:59Z",
    votesCount: 24,
    totalEligible: 40,
  },
  {
    id: "4",
    title: "Community Engagement Strategy",
    dueDate: "2023-07-05T23:59:59Z",
    votesCount: 18,
    totalEligible: 40,
  },
  {
    id: "2",
    title: "Q3 2023 Budget Allocation",
    dueDate: "2023-07-15T23:59:59Z",
    votesCount: 0,
    totalEligible: 40,
  },
]

export function UpcomingVotes() {
  return (
    <div className="space-y-4">
      {upcomingVotes.map((vote) => {
        const daysLeft = Math.ceil((new Date(vote.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
        const progressPercentage = (vote.votesCount / vote.totalEligible) * 100

        return (
          <div key={vote.id} className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">{vote.title}</p>
                <p className="text-xs text-muted-foreground">
                  {daysLeft} {daysLeft === 1 ? "day" : "days"} left • {vote.votesCount} of {vote.totalEligible} votes
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/proposals/${vote.id}`}>Vote</Link>
              </Button>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        )
      })}
    </div>
  )
}
