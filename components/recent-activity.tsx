"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, FileText } from "lucide-react"

// Mock data for recent activity
const activities = [
  {
    id: "1",
    type: "comment",
    user: {
      name: "Maria Rodriguez",
      avatar: "/placeholder-user.jpg",
    },
    proposal: "Q2 2023 Ambassador Program Report",
    time: "2 hours ago",
    icon: MessageSquare,
  },
  {
    id: "2",
    type: "vote",
    user: {
      name: "John Smith",
      avatar: "/placeholder-user.jpg",
    },
    proposal: "Community Engagement Strategy",
    time: "5 hours ago",
    icon: ThumbsUp,
  },
  {
    id: "3",
    type: "proposal",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder-user.jpg",
    },
    proposal: "Q3 2023 Budget Allocation",
    time: "1 day ago",
    icon: FileText,
  },
  {
    id: "4",
    type: "comment",
    user: {
      name: "Sarah Williams",
      avatar: "/placeholder-user.jpg",
    },
    proposal: "Q2 2023 Ambassador Program Report",
    time: "1 day ago",
    icon: MessageSquare,
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.type === "comment" && "commented on"}
              {activity.type === "vote" && "voted on"}
              {activity.type === "proposal" && "created"} <span className="font-medium">{activity.proposal}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
          <div className="ml-auto">
            <activity.icon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      ))}
    </div>
  )
}
