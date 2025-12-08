interface OfferingCardProps {
  image: string
  alt: string
}

export function OfferingCard({ image, alt }: OfferingCardProps) {
  return (
    <div className="group relative h-64 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all">
      <img
        src={image || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  )
}
