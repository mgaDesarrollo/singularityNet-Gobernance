"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, UserCog } from "lucide-react"

// Mock data for users
const mockUsers = [
  {
    id: "1",
    name: "Maria Rodriguez",
    email: "maria@example.com",
    avatar: "/placeholder-user.jpg",
    role: "admin",
    discordId: "maria#1234",
    joinedAt: "2023-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "John Smith",
    email: "john@example.com",
    avatar: "/placeholder-user.jpg",
    role: "contributor",
    discordId: "john#5678",
    joinedAt: "2023-02-20T14:30:00Z",
  },
  {
    id: "3",
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder-user.jpg",
    role: "contributor",
    discordId: "alex#9012",
    joinedAt: "2023-03-10T09:15:00Z",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "/placeholder-user.jpg",
    role: "member",
    discordId: "sarah#3456",
    joinedAt: "2023-04-05T11:45:00Z",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "/placeholder-user.jpg",
    role: "member",
    discordId: "michael#7890",
    joinedAt: "2023-05-12T16:20:00Z",
  },
]

export function UserManagement() {
  const [users, setUsers] = useState(mockUsers)

  const handleRoleChange = (userId: string, newRole: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, role: newRole } : user)))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">User Management</h3>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <UserCog className="mr-2 h-4 w-4" />
          Sync Discord Roles
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Discord ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{user.discordId}</TableCell>
              <TableCell>
                <Select defaultValue={user.role} onValueChange={(value) => handleRoleChange(user.id, value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="contributor">Contributor</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{new Date(user.joinedAt).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Reset Password</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
