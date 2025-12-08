import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  color: "blue" | "pink" | "orange" | "green"
}

const colorClasses = {
  blue: "bg-blue-50 border-blue-200",
  pink: "bg-pink-50 border-pink-200",
  orange: "bg-orange-50 border-orange-200",
  green: "bg-green-50 border-green-200",
}

const headerClasses = {
  blue: "bg-blue-100",
  pink: "bg-pink-100",
  orange: "bg-orange-100",
  green: "bg-green-100",
}

export function PricingCard({ name, price, description, features, color }: PricingCardProps) {
  return (
    <div className={`rounded-xl border-2 p-8 ${colorClasses[color]}`}>
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${headerClasses[color]}`}>
        {name}
      </div>
      <h3 className="text-2xl font-bold mb-2">{price}</h3>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
    </div>
  )
}
