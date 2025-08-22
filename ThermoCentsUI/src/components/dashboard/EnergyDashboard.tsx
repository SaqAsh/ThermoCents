import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, DollarSign, Thermometer } from "lucide-react"

export type DashboardTab = "usage" | "costs" | "weather"

export type EnergyDashboardProps = {
  defaultTab?: DashboardTab
  onTabChange?: (tab: DashboardTab) => void
  children: React.ReactNode
}

export function EnergyDashboard({ 
  defaultTab = "usage", 
  onTabChange, 
  children 
}: EnergyDashboardProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Energy
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {" "}
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into your energy consumption patterns and savings opportunities
          </p>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue={defaultTab} className="w-full" onValueChange={(value: string) => onTabChange?.(value as DashboardTab)}>
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="usage" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Usage</span>
            </TabsTrigger>
            <TabsTrigger value="costs" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Costs</span>
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center space-x-2">
              <Thermometer className="h-4 w-4" />
              <span>Weather</span>
            </TabsTrigger>
          </TabsList>

          {/* Usage Tab */}
          <TabsContent value="usage" className="space-y-6">
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <span>Weekly Energy Usage</span>
                </CardTitle>
                <CardDescription>Your energy consumption over the past 7 days (kWh)</CardDescription>
              </CardHeader>
              <CardContent>
                {children}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Costs Tab */}
          <TabsContent value="costs" className="space-y-6">
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <span>Peak vs Off-Peak Analysis</span>
                </CardTitle>
                <CardDescription>Energy costs and consumption during different rate periods</CardDescription>
              </CardHeader>
              <CardContent>
                {children}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Weather Tab */}
          <TabsContent value="weather" className="space-y-6">
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Thermometer className="h-5 w-5 text-green-500" />
                  <span>Weather Correlation</span>
                </CardTitle>
                <CardDescription>How outside temperature affects your energy usage</CardDescription>
              </CardHeader>
              <CardContent>
                {children}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
} 