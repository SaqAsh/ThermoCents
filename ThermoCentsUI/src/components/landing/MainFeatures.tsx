import { Features, type FeaturesProps } from "./Features"
import { Brain, DollarSign, Cloud, BarChart3, Shield, Smartphone } from "lucide-react"

export function MainFeatures() {
  const featuresData: FeaturesProps = {
    title: "Powerful Features for",
    subtitle: "Smart Energy",
    description: "Everything you need to take control of your energy consumption and reduce costs",
    features: [
      {
        icon: Brain,
        title: "Adaptive Forecasting",
        description: "AI-powered energy consumption predictions based on historical data, weather patterns, and usage behaviors.",
        onClick: () => alert("Adaptive Forecasting clicked - TODO: Show ThermoCents detailed feature info"),
      },
      {
        icon: DollarSign,
        title: "Cost-Aware Scheduling",
        description: "Automatically schedule high-energy tasks during off-peak hours to minimize electricity costs.",
        onClick: () => alert("Cost-Aware Scheduling clicked - TODO: Show ThermoCents scheduling interface"),
      },
      {
        icon: Cloud,
        title: "Weather Integration",
        description: "Real-time weather data correlation to optimize heating, cooling, and renewable energy usage.",
        onClick: () => alert("Weather Integration clicked - TODO: Show ThermoCents weather dashboard"),
      },
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Comprehensive energy usage analytics with customizable reports and insights.",
        onClick: () => alert("Advanced Analytics clicked - TODO: Navigate to ThermoCents analytics page"),
      },
      {
        icon: Shield,
        title: "Smart Protection",
        description: "Prevent energy waste with intelligent device monitoring and automatic shutoff capabilities.",
        onClick: () => alert("Smart Protection clicked - TODO: Show ThermoCents protection settings"),
      },
      {
        icon: Smartphone,
        title: "Mobile Control",
        description: "Full control of your energy systems from anywhere with our intuitive mobile app.",
        onClick: () => alert("Mobile Control clicked - TODO: Show ThermoCents mobile app info"),
      },
    ]
  }

  return <Features {...featuresData} />
} 