import type { WeeklyDataPoint } from "./WeeklyUsageChart"

export type SimpleWeeklyChartProps = {
  data: WeeklyDataPoint[]
  onDataPointClick?: (data: WeeklyDataPoint) => void
}

export function SimpleWeeklyChart({ data, onDataPointClick }: SimpleWeeklyChartProps) {
  const maxKWh = Math.max(...data.map(d => d.kWh))
  const totalKWh = data.reduce((sum, day) => sum + day.kWh, 0)
  const totalCost = data.reduce((sum, day) => sum + day.cost, 0)
  const avgKWh = totalKWh / data.length

  return (
    <div className="space-y-4">
      {/* Simple Bar Chart */}
      <div className="min-h-[300px] p-4">
        <div className="flex items-end justify-between h-64 space-x-2">
          {data.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-xs text-muted-foreground">{day.day}</div>
              <div 
                className="w-8 bg-green-500 rounded-t transition-all hover:bg-green-600 cursor-pointer"
                style={{ height: `${(day.kWh / maxKWh) * 200}px` }}
                onClick={() => onDataPointClick?.(day)}
                title={`${day.day}: ${day.kWh} kWh, $${day.cost}`}
              />
              <div className="text-xs font-medium">{day.kWh.toFixed(1)}</div>
            </div>
          ))}
        </div>
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