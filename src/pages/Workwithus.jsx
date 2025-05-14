import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WorkWithUs() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
        <h3 className="text-xl font-semibold flex items-center gap-2">🚀 Updates Coming Soon!</h3>
        <p className="mt-2 text-gray-700">
          We're currently updating our internship and job opportunities. Check back in a few days for new positions!
        </p>
      </div>

      {/* Internship Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Internship Opportunities</h2>
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            Updating Soon
          </Badge>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Work Role</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                No internship positions available at the moment. Please check back soon for updates.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Work Opportunities Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Work Opportunities</h2>
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            Updating Soon
          </Badge>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Work Role</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                No work positions available at the moment. Please check back soon for updates.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
