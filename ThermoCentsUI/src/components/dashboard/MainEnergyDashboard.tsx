import { useState } from "react"
import { EnergyDashboard, type DashboardTab } from "./EnergyDashboard"
import { WeeklyUsageChart, type WeeklyDataPoint } from "../charts/WeeklyUsageChart"
import { PeakOffPeakTable, type TimeOfUseData, type SortField, type SortDirection } from "../tables/PeakOffPeakTable"
import { WeatherCorrelationChart, type WeatherDataPoint, type TemperatureRange } from "../charts/WeatherCorrelationChart"

// Mock data - TODO: Replace with real API data
const mockWeeklyData: WeeklyDataPoint[] = [
  { day: "Mon", kWh: 12.5, cost: 2.85 },
  { day: "Tue", kWh: 15.2, cost: 3.42 },
  { day: "Wed", kWh: 11.8, cost: 2.65 },
  { day: "Thu", kWh: 14.6, cost: 3.28 },
  { day: "Fri", kWh: 16.3, cost: 3.67 },
  { day: "Sat", kWh: 18.9, cost: 4.25 },
  { day: "Sun", kWh: 13.7, cost: 3.08 },
]

const mockPeakOffPeakData: TimeOfUseData[] = [
  {
    id: 1,
    period: "Peak",
    timeRange: "4:00 PM - 9:00 PM",
    rate: 0.32,
    kWh: 45.2,
    cost: 14.46,
    percentage: 35,
    type: "peak" as const,
  },
  {
    id: 2,
    period: "Off-Peak",
    timeRange: "9:00 PM - 4:00 PM",
    rate: 0.18,
    kWh: 84.3,
    cost: 15.17,
    percentage: 65,
    type: "off-peak" as const,
  },
  {
    id: 3,
    period: "Super Off-Peak",
    timeRange: "12:00 AM - 6:00 AM",
    rate: 0.12,
    kWh: 28.1,
    cost: 3.37,
    percentage: 22,
    type: "super-off-peak" as const,
  },
]

const mockWeatherData: WeatherDataPoint[] = [
  { temp: 45, kWh: 18.5, day: "Mon", condition: "Cold" },
  { temp: 52, kWh: 15.2, day: "Tue", condition: "Cool" },
  { temp: 68, kWh: 12.1, day: "Wed", condition: "Mild" },
  { temp: 75, kWh: 11.8, day: "Thu", condition: "Warm" },
  { temp: 82, kWh: 16.3, day: "Fri", condition: "Hot" },
  { temp: 88, kWh: 22.1, day: "Sat", condition: "Very Hot" },
  { temp: 79, kWh: 17.9, day: "Sun", condition: "Hot" },
]

const mockTemperatureRanges: TemperatureRange[] = [
  { range: "40-50°F", kWh: 18.5, heating: 15.2, cooling: 0, other: 3.3 },
  { range: "50-60°F", kWh: 15.2, heating: 8.1, cooling: 0, other: 7.1 },
  { range: "60-70°F", kWh: 12.1, heating: 2.1, cooling: 0, other: 10.0 },
  { range: "70-80°F", kWh: 14.0, heating: 0, cooling: 4.5, other: 9.5 },
  { range: "80-90°F", kWh: 20.0, heating: 0, cooling: 12.8, other: 7.2 },
]

export function MainEnergyDashboard() {
  const [currentTab, setCurrentTab] = useState<DashboardTab>("usage")

  const handleTabChange = (tab: DashboardTab) => {
    setCurrentTab(tab)
    // TODO: Add analytics tracking
    console.log(`Dashboard tab changed to: ${tab}`)
  }

  const handleWeeklyDataClick = (data: WeeklyDataPoint) => {
    alert(`Clicked on ${data.day}: ${data.kWh} kWh, $${data.cost} - TODO: Show detailed breakdown`)
  }

  const handleTableSort = (field: SortField, direction: SortDirection) => {
    alert(`Sorting by ${field} ${direction} - TODO: Implement real sorting`)
  }

  const handleTableRowClick = (row: TimeOfUseData) => {
    alert(`Clicked on ${row.period} period - TODO: Show detailed breakdown for ${row.timeRange}`)
  }

  const handleWeatherScatterClick = (data: WeatherDataPoint) => {
    alert(`Temperature: ${data.temp}°F, Usage: ${data.kWh} kWh on ${data.day} - TODO: Show detailed weather impact analysis`)
  }

  const handleWeatherBarClick = (data: TemperatureRange) => {
    alert(`Temperature range: ${data.range}, Total usage: ${data.kWh} kWh - TODO: Show breakdown by heating/cooling`)
  }

  const renderTabContent = () => {
    switch (currentTab) {
      case "usage":
        return <WeeklyUsageChart data={mockWeeklyData} onDataPointClick={handleWeeklyDataClick} />
      case "costs":
        return <PeakOffPeakTable data={mockPeakOffPeakData} onSort={handleTableSort} onRowClick={handleTableRowClick} />
      case "weather":
        return (
          <WeatherCorrelationChart 
            weatherData={mockWeatherData} 
            temperatureRanges={mockTemperatureRanges}
            onScatterClick={handleWeatherScatterClick}
            onBarClick={handleWeatherBarClick}
          />
        )
      default:
        return <WeeklyUsageChart data={mockWeeklyData} onDataPointClick={handleWeeklyDataClick} />
    }
  }

  return (
    <EnergyDashboard defaultTab={currentTab} onTabChange={handleTabChange}>
      {renderTabContent()}
    </EnergyDashboard>
  )
} 