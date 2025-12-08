import type { LucideIcon } from "lucide-react"

interface ProcessStepProps {
  number: number
  icon: LucideIcon
  title: string
  description: string
}

export function ProcessStep({ number, icon: Icon, title, description }: ProcessStepProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
            {number}
          </div>
        </div>
        <div className="flex-1">
          <Icon className="h-6 w-6 text-primary mb-2" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
