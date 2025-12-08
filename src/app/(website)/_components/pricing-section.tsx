import { PricingCard } from "./pricing-card"

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect to get started",
      color: "blue" as const,
      features: ["Access to basic player stats", "Historical match data", "Community insights", "Mobile app access"],
    },
    {
      name: "Pro",
      price: "$29/mo",
      description: "For serious scouts",
      color: "pink" as const,
      features: [
        "Everything in Basic",
        "Real-time alerts",
        "Advanced comparisons",
        "Custom reports",
        "Priority support",
      ],
    },
    {
      name: "Team",
      price: "$99/mo",
      description: "For organizations",
      color: "orange" as const,
      features: [
        "Everything in Pro",
        "Multi-user access",
        "Team collaboration tools",
        "API access",
        "Dedicated manager",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large operations",
      color: "green" as const,
      features: ["Everything in Team", "Custom integrations", "White-label options", "24/7 support", "SLA guarantee"],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why You Need a Pro Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs and unlock premium features
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
