import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  avatar: string
}

export function TestimonialCard({ name, location, quote, avatar }: TestimonialCardProps) {
  return (
    <Card className="text-center h-full">
      <CardContent className="pt-6 h-full flex flex-col">
        <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full relative">
          <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{location}</p>
        <div className="mt-4 flex justify-center">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
        </div>
        <p className="mt-4 text-muted-foreground flex-grow">"{quote}"</p>
      </CardContent>
    </Card>
  )
}
