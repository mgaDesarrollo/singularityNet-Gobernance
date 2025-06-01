import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProposalList } from "@/components/proposal-list"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingVotes } from "@/components/upcoming-votes"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { RoleBasedContent } from "@/components/role-based-content"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <RoleBasedContent roles={["admin"]}>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Proposal
          </Button>
        </RoleBasedContent>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <ProposalList status="active" />
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <ProposalList status="upcoming" />
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <ProposalList status="past" />
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Votes</CardTitle>
            <CardDescription>Votes closing soon</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingVotes />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Participation</CardTitle>
            <CardDescription>Your voting and activity stats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Votes Cast</span>
                <span className="text-sm">12/15</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 rounded-full" style={{ width: "80%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Comments</span>
                <span className="text-sm">8</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Proposals Rated</span>
                <span className="text-sm">10/15</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 rounded-full" style={{ width: "66.7%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
