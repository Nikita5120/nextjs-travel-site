import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ChevronRight } from "lucide-react"

interface DestinationCardProps {
  destination: {
    id: string
    title: string
    image: string
    description: string
    rating: number
    location: string
    price: number
  }
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="aspect-[4/3] w-full relative overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center text-white">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{destination.location}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{destination.title}</CardTitle>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
        <CardDescription className="mt-2.5 line-clamp-2">{destination.description}</CardDescription>
        <div className="mt-4 text-teal-600 font-semibold">From ${destination.price} / person</div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full group-hover:bg-teal-50" asChild>
          <Link href={`/destinations/${destination.id}`}>
            Explore <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
