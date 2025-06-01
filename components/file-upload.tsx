"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Upload, X } from "lucide-react"

// Mock data for uploaded files
const mockFiles = [
  {
    id: "1",
    name: "Q2_2023_Report.pdf",
    type: "application/pdf",
    size: 2500000, // 2.5MB
    uploadedAt: "2023-06-15T10:00:00Z",
    category: "reports",
  },
  {
    id: "2",
    name: "Q3_2023_Budget.xlsx",
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    size: 1800000, // 1.8MB
    uploadedAt: "2023-06-20T14:30:00Z",
    category: "budgets",
  },
  {
    id: "3",
    name: "Community_Strategy.docx",
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    size: 950000, // 950KB
    uploadedAt: "2023-06-18T09:15:00Z",
    category: "other",
  },
]

export function FileUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [category, setCategory] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleUpload = () => {
    // In a real application, you would upload the files to your server here
    console.log("Uploading files:", files)
    console.log("Category:", category)

    // Reset the form
    setFiles([])
    setCategory("")
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="file">Upload Document</Label>
            <Input id="file" type="file" multiple onChange={handleFileChange} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Document Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reports">Quarterly Reports</SelectItem>
                <SelectItem value="budgets">Budgets</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              <Label>Selected Files</Label>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-muted-foreground">({formatFileSize(file.size)})</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setFiles(files.filter((_, i) => i !== index))}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleUpload}
            disabled={files.length === 0 || !category}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Documents
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Uploaded Documents</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Uploaded</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockFiles.map((file) => (
              <TableRow key={file.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    {file.name}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {file.category}
                  </Badge>
                </TableCell>
                <TableCell>{formatFileSize(file.size)}</TableCell>
                <TableCell>{new Date(file.uploadedAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
