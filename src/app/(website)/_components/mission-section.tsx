import { MissionCard } from "./mission-card"
import { Zap, Users, Target, TrendingUp } from "lucide-react"

export function MissionSection() {
  const missions = [
    {
      icon: Zap,
      title: "Real-Time Data",
      description: "Access live player performance metrics updated instantly during matches",
    },
    {
      icon: Users,
      title: "Scout Intelligence",
      description: "Connect with coaches, scouts, and analysts in the community",
    },
    {
      icon: Target,
      title: "Performance Tracking",
      description: "Monitor comprehensive stats across multiple dimensions and competitions",
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Identify trends and predict player development trajectories",
    },
  ]

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering scouts, coaches, and teams with verified analytics to make better decisions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission, idx) => (
            <MissionCard key={idx} {...mission} />
          ))}
        </div>
      </div>
    </section>
  )
}
