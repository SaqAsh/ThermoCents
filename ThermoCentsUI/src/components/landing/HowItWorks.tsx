import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type Step = {
  id: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details: string
  action: () => void
}

export type HowItWorksProps = {
  title: string
  subtitle: string
  description: string
  steps: Step[]
}

export function HowItWorks({ title, subtitle, description, steps }: HowItWorksProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const goToStep = (index: number) => {
    setCurrentStep(index)
  }

  const CurrentStepIcon = steps[currentStep].icon
  const CurrentStepTitle = steps[currentStep].title
  const CurrentStepDescription = steps[currentStep].description
  const CurrentStepDetails = steps[currentStep].details
  const CurrentStepAction = steps[currentStep].action

  return (
    <section className="py-20 px-4 bg-muted/30">
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

        {/* Carousel */}
        <div className="relative">
          {/* Main Card */}
          <Card className="max-w-4xl mx-auto border-green-500/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-green-500/10">
                      <CurrentStepIcon className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="text-sm font-medium text-green-500">
                      Step {steps[currentStep].id} of {steps.length}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold">{CurrentStepTitle}</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">{CurrentStepDescription}</p>

                  <p className="text-base text-muted-foreground/80">{CurrentStepDetails}</p>

                  <Button onClick={CurrentStepAction} className="bg-green-600 hover:bg-green-700">
                    Try This Step
                  </Button>
                </div>

                {/* Visual Placeholder */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                  <CurrentStepIcon className="h-24 w-24 text-green-500/30" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStep}
              className="border-green-500/30 hover:border-green-500/60 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Step Indicators */}
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep ? "bg-green-500" : "bg-green-500/20 hover:bg-green-500/40"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextStep}
              className="border-green-500/30 hover:border-green-500/60 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 