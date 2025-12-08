
import { Database, BarChart3, Zap } from "lucide-react"
import { ProcessStep } from "./process-step"

export function AnalyticsProcessSection() {
  const steps = [
    {
      number: 1,
      icon: Database,
      title: "Data Collection",
      description: "Real-time data is collected from matches and aggregated into our platform",
    },
    {
      number: 2,
      icon: BarChart3,
      title: "Advanced Analysis",
      description: "Our algorithms process data to generate actionable insights and comparisons",
    },
    {
      number: 3,
      icon: Zap,
      title: "Instant Delivery",
      description: "Access verified analytics immediately through your personal dashboard",
    },
  ]

  return (
    <section id="analytics" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src="/football-player-in-action-during-match.jpg" alt="Analytics Process" className="w-full h-auto" />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Our Analytics Process Works</h2>
              <p className="text-lg text-muted-foreground">
                From data collection to insights, we ensure accuracy and speed at every step
              </p>
            </div>
            <div className="space-y-6">
              {steps.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
