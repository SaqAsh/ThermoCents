import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, Clock, DollarSign } from "lucide-react"

export type TimeOfUseData = {
  id: number
  period: string
  timeRange: string
  rate: number
  kWh: number
  cost: number
  percentage: number
  type: "peak" | "off-peak" | "super-off-peak"
}

export type SortField = "period" | "rate" | "kWh" | "cost"
export type SortDirection = "asc" | "desc"

export type PeakOffPeakTableProps = {
  data: TimeOfUseData[]
  onSort?: (field: SortField, direction: SortDirection) => void
  onRowClick?: (row: TimeOfUseData) => void
}

export function PeakOffPeakTable({ data, onSort, onRowClick }: PeakOffPeakTableProps) {
  const [sortField, setSortField] = useState<SortField>("cost")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const handleSort = (field: SortField) => {
    const newDirection = sortField === field && sortDirection === "asc" ? "desc" : "asc"
    setSortField(field)
    setSortDirection(newDirection)
    onSort?.(field, newDirection)
  }

  const handleRowClick = (row: TimeOfUseData) => {
    onRowClick?.(row)
  }

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "peak":
        return "destructive"
      case "off-peak":
        return "secondary"
      case "super-off-peak":
        return "default"
      default:
        return "secondary"
    }
  }

  const totalCost = data.reduce((sum, row) => sum + row.cost, 0)
  const totalUsage = data.reduce((sum, row) => sum + row.kWh, 0)
  const avgRate = totalCost / totalUsage

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="rounded-md border border-green-500/20">
        <Table>
          <TableHeader>
            <TableRow className="border-green-500/20">
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("period")}
                  className="h-auto p-0 font-semibold hover:text-green-500"
                >
                  Period
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span>Time Range</span>
                </div>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("rate")}
                  className="h-auto p-0 font-semibold hover:text-green-500"
                >
                  Rate ($/kWh)
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("kWh")}
                  className="h-auto p-0 font-semibold hover:text-green-500"
                >
                  Usage (kWh)
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("cost")}
                  className="h-auto p-0 font-semibold hover:text-green-500"
                >
                  <DollarSign className="h-4 w-4 mr-1" />
                  Cost
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Usage %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer hover:bg-green-500/5 border-green-500/10"
                onClick={() => handleRowClick(row)}
              >
                <TableCell>
                  <Badge variant={getBadgeVariant(row.type)}>{row.period}</Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">{row.timeRange}</TableCell>
                <TableCell className="font-semibold">${row.rate.toFixed(2)}</TableCell>
                <TableCell className="font-semibold">{row.kWh.toFixed(1)}</TableCell>
                <TableCell className="font-semibold text-green-600">${row.cost.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${row.percentage}%` }} />
                    </div>
                    <span className="text-sm font-medium">{row.percentage}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-green-500/5 rounded-lg border border-green-500/20">
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">
            ${totalCost.toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground">Total Weekly Cost</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">
            {totalUsage.toFixed(1)} kWh
          </div>
          <div className="text-sm text-muted-foreground">Total Usage</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">
            ${avgRate.toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground">Avg Rate</div>
        </div>
      </div>
    </div>
  )
} 