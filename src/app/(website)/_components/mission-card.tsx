import type { LucideIcon } from "lucide-react"

interface MissionCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <div className="group relative p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
      <div className="space-y-3">
        <div className="inline-block p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
