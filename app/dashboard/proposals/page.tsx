import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProposalList } from "@/components/proposal-list"
import { PlusCircle, Search } from "lucide-react"
import { RoleBasedContent } from "@/components/role-based-content"

export default function ProposalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Proposals</h1>
        <RoleBasedContent roles={["admin"]}>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Proposal
          </Button>
        </RoleBasedContent>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input type="search" placeholder="Search proposals..." className="w-full pl-8" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Proposals</TabsTrigger>
          <TabsTrigger value="reports">Quarterly Reports</TabsTrigger>
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <ProposalList />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <ProposalList category="reports" />
        </TabsContent>
        <TabsContent value="budgets" className="space-y-4">
          <ProposalList category="budgets" />
        </TabsContent>
        <TabsContent value="other" className="space-y-4">
          <ProposalList category="other" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
