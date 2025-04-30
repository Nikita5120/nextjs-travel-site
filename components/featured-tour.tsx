import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Star, Users } from "lucide-react"

interface FeaturedTourProps {
  title: string
  image: string
  duration: string
  price: number
  description: string
  rating: number
}

export function FeaturedTour({ title, image, duration, price, description, rating }: FeaturedTourProps) {
  return (
    <div className="rounded-xl overflow-hidden border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
      <div className="md:flex">
        <div className="md:w-2/5 relative h-64 md:h-auto">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6 md:w-3/5">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>

          <p className="mt-2 text-muted-foreground">{description}</p>

          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1 text-teal-500" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="h-4 w-4 mr-1 text-teal-500" />
              <span>Small groups</span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-1 text-teal-500" />
              <span>Available year-round</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-teal-600">${price}</span>
              <span className="text-sm text-muted-foreground"> / person</span>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600" asChild>
              <Link href="/tours/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
