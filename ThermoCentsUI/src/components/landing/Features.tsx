import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, DollarSign, Cloud, BarChart3, Shield, Smartphone } from "lucide-react"

export type Feature = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  onClick: () => void
}

export type FeaturesProps = {
  title: string
  subtitle: string
  description: string
  features: Feature[]
}

export function Features({ title, subtitle, description, features }: FeaturesProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {" "}
              {subtitle}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 border-green-500/20 hover:border-green-500/40"
              onClick={feature.onClick}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-500 transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 