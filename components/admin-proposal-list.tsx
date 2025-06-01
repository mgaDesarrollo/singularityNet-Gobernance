"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react"

// Mock data for proposals
const mockProposals = [
  {
    id: "1",
    title: "Q2 2023 Ambassador Program Report",
    category: "reports",
    status: "active",
    createdAt: "2023-06-15T10:00:00Z",
    dueDate: "2023-07-01T23:59:59Z",
    votesCount: 24,
  },
  {
    id: "2",
    title: "Q3 2023 Budget Allocation",
    category: "budgets",
    status: "upcoming",
    createdAt: "2023-06-20T14:30:00Z",
    dueDate: "2023-07-15T23:59:59Z",
    votesCount: 0,
  },
  {
    id: "3",
    title: "Q1 2023 Ambassador Program Report",
    category: "reports",
    status: "past",
    createdAt: "2023-03-15T10:00:00Z",
    dueDate: "2023-04-01T23:59:59Z",
    votesCount: 32,
  },
  {
    id: "4",
    title: "Community Engagement Strategy",
    category: "other",
    status: "active",
    createdAt: "2023-06-18T09:15:00Z",
    dueDate: "2023-07-05T23:59:59Z",
    votesCount: 18,
  },
]

export function AdminProposalList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Votes</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockProposals.map((proposal) => (
          <TableRow key={proposal.id}>
            <TableCell className="font-medium">{proposal.title}</TableCell>
            <TableCell>
              <Badge variant="outline" className="capitalize">
                {proposal.category}
              </Badge>
            </TableCell>
            <TableCell>
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
            </TableCell>
            <TableCell>{new Date(proposal.createdAt).toLocaleDateString()}</TableCell>
            <TableCell>{new Date(proposal.dueDate).toLocaleDateString()}</TableCell>
            <TableCell>{proposal.votesCount}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>View</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Pencil className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
