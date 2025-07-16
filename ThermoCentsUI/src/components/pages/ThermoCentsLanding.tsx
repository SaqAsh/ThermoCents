import { useState } from "react"
import { MainHero } from "../landing/MainHero"
import { MainFeatures } from "../landing/MainFeatures"
import { MainHowItWorks } from "../landing/MainHowItWorks"
import { MainEnergyDashboard } from "../dashboard/MainEnergyDashboard"
import { MainFooter } from "../MainFooter"
import { ModeToggle } from "../mode-toggle"
import { ThemeProvider } from "../theme-providor"
import RenderBackground from "../Background/RenderBackground"

export function ThermoCentsLanding() {
  const [currentSection, setCurrentSection] = useState<string>("hero")

  const handleSectionChange = (section: string) => {
    setCurrentSection(section)
    // TODO: Add analytics tracking
    console.log(`Section changed to: ${section}`)
  }

  const handleGetStartedClick = () => {
    // Scroll to dashboard section
    const dashboardElement = document.getElementById("energy-dashboard")
    if (dashboardElement) {
      dashboardElement.scrollIntoView({ behavior: "smooth" })
      setCurrentSection("dashboard")
    }
  }

  const handleLearnMoreClick = () => {
    // Scroll to features section
    const featuresElement = document.getElementById("features")
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: "smooth" })
      setCurrentSection("features")
    }
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="thermocents-theme">
      <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
        {/* Background - Fixed position behind everything */}
        <div className="fixed inset-0 z-0">
          <RenderBackground />
        </div>

        {/* Theme Toggle - Fixed position */}
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>

        {/* Main Content - Above background */}
        <div className="relative z-10">
          {/* Hero Section */}
          <div id="hero">
            <MainHero />
          </div>

          {/* Features Section */}
          <div id="features">
            <MainFeatures />
          </div>

          {/* How It Works Section */}
          <div id="how-it-works">
            <MainHowItWorks />
          </div>

          {/* Energy Dashboard Section */}
          <div id="energy-dashboard">
            <MainEnergyDashboard />
          </div>

          {/* Footer */}
          <MainFooter />
        </div>
      </div>
    </ThemeProvider>
  )
}