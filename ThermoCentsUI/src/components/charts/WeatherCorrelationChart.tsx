import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type WeatherDataPoint = {
  temp: number
  kWh: number
  day: string
  condition: string
}

export type TemperatureRange = {
  range: string
  kWh: number
  heating: number
  cooling: number
  other: number
}

export type WeatherCorrelationChartProps = {
  weatherData: WeatherDataPoint[]
  temperatureRanges: TemperatureRange[]
  onScatterClick?: (data: WeatherDataPoint) => void
  onBarClick?: (data: TemperatureRange) => void
}

export function WeatherCorrelationChart({ 
  weatherData, 
  temperatureRanges, 
  onScatterClick, 
  onBarClick 
}: WeatherCorrelationChartProps) {
  const handleScatterClick = (data: any) => {
    onScatterClick?.(data)
  }

  const handleBarClick = (data: any) => {
    onBarClick?.(data)
  }

  const ScatterTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background border border-green-500/20 rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{data.day}</p>
          <p className="text-sm">
            Temperature: {data.temp}°F ({data.condition})
          </p>
          <p className="text-sm">Energy Usage: {data.kWh} kWh</p>
        </div>
      )
    }
    return null
  }

  const BarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-green-500/20 rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value} kWh
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="scatter" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scatter">Temperature vs Usage</TabsTrigger>
          <TabsTrigger value="breakdown">Usage Breakdown</TabsTrigger>
        </TabsList>

        {/* Scatter Plot */}
        <TabsContent value="scatter" className="space-y-4">
          <div className="min-h-[300px]">
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(34, 197, 94, 0.2)" />
                <XAxis 
                  type="number" 
                  dataKey="temp" 
                  name="Temperature" 
                  unit="°F" 
                  stroke="rgb(156, 163, 175)"
                  fontSize={12}
                />
                <YAxis 
                  type="number" 
                  dataKey="kWh" 
                  name="Energy Usage" 
                  unit=" kWh" 
                  stroke="rgb(156, 163, 175)"
                  fontSize={12}
                />
                <Tooltip content={<ScatterTooltip />} />
                <Scatter 
                  dataKey="kWh" 
                  fill="rgb(34, 197, 94)" 
                  onClick={handleScatterClick}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Correlation Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-green-500/5 rounded-lg border border-green-500/20">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">0.78</div>
              <div className="text-sm text-muted-foreground">Correlation Coefficient</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">68°F</div>
              <div className="text-sm text-muted-foreground">Optimal Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">35%</div>
              <div className="text-sm text-muted-foreground">Weather Impact</div>
            </div>
          </div>
        </TabsContent>

        {/* Breakdown Chart */}
        <TabsContent value="breakdown" className="space-y-4">
          <div className="min-h-[300px]">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={temperatureRanges} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(34, 197, 94, 0.2)" />
                <XAxis 
                  dataKey="range" 
                  stroke="rgb(156, 163, 175)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="rgb(156, 163, 175)"
                  fontSize={12}
                />
                <Tooltip content={<BarTooltip />} />
                <Bar 
                  dataKey="heating" 
                  stackId="usage" 
                  fill="rgb(239, 68, 68)" 
                  onClick={handleBarClick}
                  cursor="pointer"
                />
                <Bar 
                  dataKey="cooling" 
                  stackId="usage" 
                  fill="rgb(59, 130, 246)" 
                  onClick={handleBarClick}
                  cursor="pointer"
                />
                <Bar 
                  dataKey="other" 
                  stackId="usage" 
                  fill="rgb(156, 163, 175)" 
                  onClick={handleBarClick}
                  cursor="pointer"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Heating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Cooling</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded"></div>
              <span>Other</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 