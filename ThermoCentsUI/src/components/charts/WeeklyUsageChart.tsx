import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

export type WeeklyDataPoint = {
  day: string
  kWh: number
  cost: number
}

export type WeeklyUsageChartProps = {
  data: WeeklyDataPoint[]
  onDataPointClick?: (data: WeeklyDataPoint) => void
}

export function WeeklyUsageChart({ data, onDataPointClick }: WeeklyUsageChartProps) {
  const handleDataPointClick = (dataPoint: any) => {
    onDataPointClick?.(dataPoint)
  }

  const totalKWh = data.reduce((sum, day) => sum + day.kWh, 0)
  const totalCost = data.reduce((sum, day) => sum + day.cost, 0)
  const avgKWh = totalKWh / data.length

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-green-500/20 rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-sm">Energy Usage: {payload[0].value} kWh</p>
          <p className="text-sm">Cost: ${data.find(d => d.day === label)?.cost.toFixed(2)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      {/* Chart */}
      <div className="min-h-[300px]">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(34, 197, 94, 0.2)" />
            <XAxis 
              dataKey="day" 
              stroke="rgb(156, 163, 175)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgb(156, 163, 175)"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="kWh"
              stroke="rgb(34, 197, 94)"
              strokeWidth={3}
              dot={{ 
                fill: "rgb(34, 197, 94)", 
                strokeWidth: 2, 
                r: 6,
                cursor: "pointer"
              }}
              activeDot={{
                r: 8,
                fill: "rgb(34, 197, 94)",
                stroke: "rgb(34, 197, 94)",
                strokeWidth: 2,
                cursor: "pointer",
                onClick: handleDataPointClick,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">
            {totalKWh.toFixed(1)}
          </div>
          <div className="text-sm text-muted-foreground">Total kWh</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">
            ${totalCost.toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground">Total Cost</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">
            {avgKWh.toFixed(1)}
          </div>
          <div className="text-sm text-muted-foreground">Avg kWh/day</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">15%</div>
          <div className="text-sm text-muted-foreground">vs Last Week</div>
        </div>
      </div>
    </div>
  )
} 