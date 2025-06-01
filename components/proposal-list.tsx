"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, MessageSquare, ThumbsUp } from "lucide-react"
import Link from "next/link"

interface ProposalListProps {
  status?: "active" | "upcoming" | "past"
  category?: "reports" | "budgets" | "other"
}

// Mock data for proposals
const mockProposals = [
  {
    id: "1",
    title: "Q2 2023 Ambassador Program Report",
    description: "Quarterly report for the Ambassador Program activities and achievements.",
    status: "active",
    category: "reports",
    author: {
      name: "Maria Rodriguez",
      avatar: "/placeholder-user.jpg",
      role: "Program Manager",
    },
    createdAt: "2023-06-15T10:00:00Z",
    votesCount: 24,
    commentsCount: 8,
    dueDate: "2023-07-01T23:59:59Z",
  },
  {
    id: "2",
    title: "Q3 2023 Budget Allocation",
    description: "Proposed budget allocation for Q3 2023 Ambassador Program activities.",
    status: "upcoming",
    category: "budgets",
    author: {
      name: "John Smith",
      avatar: "/placeholder-user.jpg",
      role: "Financial Officer",
    },
    createdAt: "2023-06-20T14:30:00Z",
    votesCount: 0,
    commentsCount: 3,
    dueDate: "2023-07-15T23:59:59Z",
  },
  {
    id: "3",
    title: "Q1 2023 Ambassador Program Report",
    description: "Quarterly report for the Ambassador Program activities and achievements.",
    status: "past",
    category: "reports",
    author: {
      name: "Maria Rodriguez",
      avatar: "/placeholder-user.jpg",
      role: "Program Manager",
    },
    createdAt: "2023-03-15T10:00:00Z",
    votesCount: 32,
    commentsCount: 12,
    dueDate: "2023-04-01T23:59:59Z",
  },
  {
    id: "4",
    title: "Community Engagement Strategy",
    description: "Proposal for improving community engagement and participation.",
    status: "active",
    category: "other",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder-user.jpg",
      role: "Community Lead",
    },
    createdAt: "2023-06-18T09:15:00Z",
    votesCount: 18,
    commentsCount: 7,
    dueDate: "2023-07-05T23:59:59Z",
  },
]

export function ProposalList({ status, category }: ProposalListProps) {
  // Filter proposals based on status and category if provided
  const filteredProposals = mockProposals.filter((proposal) => {
    if (status && proposal.status !== status) return false
    if (category && proposal.category !== category) return false
    return true
  })

  if (filteredProposals.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">No proposals found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {filteredProposals.map((proposal) => (
        <Card key={proposal.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">
                  <Link
                    href={`/dashboard/proposals/${proposal.id}`}
                    className="hover:text-purple-600 transition-colors"
                  >
                    {proposal.title}
                  </Link>
                </CardTitle>
                <CardDescription className="mt-1">{proposal.description}</CardDescription>
              </div>
              <Badge
                variant={
                  proposal.status === "active" ? "default" : proposal.status === "upcoming" ? "outline" : "secondary"
                }
                className={
                  proposal.status === "active"
                    ? "bg-green-500"
                    : proposal.status === "upcoming"
                      ? "border-blue-500 text-blue-500"
                      : ""
                }
              >
                {proposal.status === "active" ? "Active" : proposal.status === "upcoming" ? "Upcoming" : "Closed"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={proposal.author.avatar || "/placeholder.svg"} alt={proposal.author.name} />
                  <AvatarFallback>{proposal.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{proposal.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>Due {new Date(proposal.dueDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{proposal.votesCount} votes</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{proposal.commentsCount} comments</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" asChild>
              <Link href={`/dashboard/proposals/${proposal.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
