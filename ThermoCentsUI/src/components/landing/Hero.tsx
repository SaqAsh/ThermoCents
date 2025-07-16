import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Leaf } from "lucide-react"

export type HeroProps = {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    onClick: () => void
  }
  secondaryCTA: {
    text: string
    onClick: () => void
  }
  stats: {
    savings: string
    monitoring: string
    ai: string
  }
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="relative">
            <Leaf className="h-12 w-12 text-green-500" />
            <Zap className="h-6 w-6 text-green-400 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            {subtitle}
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              Management
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            onClick={primaryCTA.onClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold group"
          >
            {primaryCTA.text}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={secondaryCTA.onClick}
            className="border-green-500/30 hover:border-green-500/60 px-8 py-4 text-lg bg-transparent"
          >
            {secondaryCTA.text}
          </Button>
        </div>

        {/* Stats/Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500">{stats.savings}</div>
            <div className="text-sm text-muted-foreground">Energy Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500">{stats.monitoring}</div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500">{stats.ai}</div>
            <div className="text-sm text-muted-foreground">Powered</div>
          </div>
        </div>
      </div>
    </section>
  )
} 