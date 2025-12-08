import { OfferingCard } from "./offering-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OfferingsSection() {
  const offerings = [
    "/football-match-action-shot.jpg",
    "/players-celebrating-on-field.jpg",
    "/goalkeeper-jumping-for-ball.jpg",
    "/football-players-tactical-positioning.jpg",
  ]

  return (
    <section id="offerings" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive analytics tools designed for every level of the game
            </p>
            <ul className="space-y-3">
              {[
                "Live Player Performance Tracking",
                "Comparative Analytics",
                "Team Tactical Analysis",
                "Historical Data Library",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Full Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-2 gap-4">
            {offerings.map((image, idx) => (
              <OfferingCard key={idx} image={image} alt={`Offering ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
