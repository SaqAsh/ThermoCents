import { HowItWorks, type HowItWorksProps } from "./HowItWorks"
import { Download, Settings, BarChart, Zap } from "lucide-react"

export function MainHowItWorks() {
  const howItWorksData: HowItWorksProps = {
    title: "How It",
    subtitle: "Works",
    description: "Get started with ThermoCents in four simple steps",
    steps: [
      {
        id: 1,
        icon: Download,
        title: "Install & Connect",
        description: "Download the ThermoCents app and connect your smart devices and energy meters in minutes.",
        details: "Our easy setup wizard guides you through connecting all your smart home devices, energy meters, and appliances.",
        action: () => alert("Install & Connect - TODO: Start ThermoCents installation wizard"),
      },
      {
        id: 2,
        icon: Settings,
        title: "Configure Preferences",
        description: "Set your energy goals, budget constraints, and comfort preferences for personalized optimization.",
        details: "Customize your energy-saving preferences, set budget limits, and define comfort zones for optimal automation.",
        action: () => alert("Configure Preferences - TODO: Open ThermoCents preferences setup"),
      },
      {
        id: 3,
        icon: BarChart,
        title: "Monitor & Analyze",
        description: "Watch real-time energy consumption and get insights into your usage patterns and savings opportunities.",
        details: "Access detailed analytics, track your energy consumption patterns, and discover new ways to save money.",
        action: () => alert("Monitor & Analyze - TODO: Open ThermoCents analytics dashboard"),
      },
      {
        id: 4,
        icon: Zap,
        title: "Optimize & Save",
        description: "Let AI automatically optimize your energy usage while you enjoy reduced bills and environmental impact.",
        details: "Our AI continuously learns and optimizes your energy usage, automatically scheduling tasks for maximum savings.",
        action: () => alert("Optimize & Save - TODO: Show ThermoCents optimization results"),
      },
    ]
  }

  return <HowItWorks {...howItWorksData} />
} 