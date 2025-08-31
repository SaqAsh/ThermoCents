import { Hero, type HeroProps } from "./Hero"

export function MainHero() {
  const heroData: HeroProps = {
    title: "ThermoCents",
    subtitle: "Smart Energy",
    description: "Optimize your energy consumption with AI-powered forecasting, cost-aware scheduling, and real-time weather correlation analysis.",
    primaryCTA: {
      text: "Get Started",
      onClick: () => alert("Get Started with ThermoCents - TODO: Navigate to signup/onboarding")
    },
    secondaryCTA: {
      text: "Learn More",
      onClick: () => alert("Learn More about ThermoCents - TODO: Scroll to features or open demo")
    },
    stats: {
      savings: "30%",
      monitoring: "24/7",
      ai: "AI"
    }
  }

  return <Hero {...heroData} />
} 