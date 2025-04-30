import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Calendar,
  Users,
  Star,
  ChevronLeft,
  Heart,
  Share2,
  Info,
  Map,
  Camera,
  Utensils,
  Hotel,
} from "lucide-react"
import { destinations } from "@/lib/data"
import { notFound } from "next/navigation"

export default function DestinationPage({ params }: { params: { id: string } }) {
  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl flex items-center">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 mr-2 text-teal-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 8.5L12 4L20.5 8.5M3.5 8.5V15.5L12 20M3.5 8.5L12 12M12 20L20.5 15.5V8.5M12 20V12M20.5 8.5L12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Wanderlust
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/destinations" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Destinations
            </Link>
            <Link href="/tours" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Tours
            </Link>
            <Link href="/experiences" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Experiences
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-teal-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="hidden md:flex bg-teal-500 hover:bg-teal-600">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <Link
            href="/destinations"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-teal-500 mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to destinations
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-6">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">{destination.title}</h1>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-teal-500 mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{destination.rating} (120 reviews)</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-teal-500 mr-1" />
                  <span>Best time: Apr-Oct</span>
                </div>
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <p>
                    {destination.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    Maecenas feugiat, nunc eget finibus efficitur, est nisi efficitur nisi, vel tincidunt nunc urna vel
                    nisi.
                  </p>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
                    euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.
                    Donec euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget
                    nisl.
                  </p>

                  <h3 className="text-xl font-semibold mt-6">Highlights</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Explore the stunning natural landscapes</li>
                    <li>Experience the rich local culture and traditions</li>
                    <li>Taste authentic regional cuisine</li>
                    <li>Visit historical landmarks and monuments</li>
                    <li>Enjoy outdoor activities and adventures</li>
                  </ul>
                </TabsContent>
                <TabsContent value="attractions">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Card key={i}>
                        <div className="aspect-video relative">
                          <Image
                            src={`/images/attraction-${i}.jpg`}
                            alt={`Attraction ${i}`}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold">Popular Attraction {i}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="gallery">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                        <Image
                          src={`/images/gallery-${i}.jpg`}
                          alt={`Gallery image ${i}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b pb-6 last:border-0">
                        <div className="flex items-start">
                          <div className="h-10 w-10 rounded-full bg-muted relative overflow-hidden mr-4">
                            <Image
                              src={`/images/reviewer-${i}.jpg`}
                              alt={`Reviewer ${i}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">Reviewer Name {i}</h4>
                            <div className="flex items-center mt-1">
                              {Array(5)
                                .fill(null)
                                .map((_, j) => (
                                  <Star
                                    key={j}
                                    className={`h-4 w-4 ${j < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                                  />
                                ))}
                              <span className="text-xs text-muted-foreground ml-2">2 months ago</span>
                            </div>
                            <p className="mt-2 text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas feugiat,
                              nunc eget finibus efficitur, est nisi efficitur nisi.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Book Your Trip</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Travel Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Select date"
                          className="h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Travelers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="number"
                          placeholder="Number of travelers"
                          min="1"
                          defaultValue="2"
                          className="h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between mb-2">
                        <span>Base price</span>
                        <span>${destination.price} x 2</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Taxes & fees</span>
                        <span>${Math.round(destination.price * 0.15)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                        <span>Total</span>
                        <span>${destination.price * 2 + Math.round(destination.price * 0.15)}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-teal-500 hover:bg-teal-600">Book Now</Button>

                    <div className="text-xs text-muted-foreground text-center">
                      No payment required now. Reserve your spot today.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Flexible Booking</h4>
                    <p className="text-sm text-muted-foreground">Free cancellation up to 24 hours before your trip</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Map className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Guided Tours Available</h4>
                    <p className="text-sm text-muted-foreground">Expert local guides to enhance your experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Camera className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Photo Opportunities</h4>
                    <p className="text-sm text-muted-foreground">Stunning views and perfect photo spots</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Utensils className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Local Cuisine</h4>
                    <p className="text-sm text-muted-foreground">Authentic food experiences included</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Hotel className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Accommodation Options</h4>
                    <p className="text-sm text-muted-foreground">From luxury hotels to authentic homestays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-slate-900 text-white">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 mr-2 text-teal-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 8.5L12 4L20.5 8.5M3.5 8.5V15.5L12 20M3.5 8.5L12 12M12 20L20.5 15.5V8.5M12 20V12M20.5 8.5L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Wanderlust
              </h3>
              <p className="mt-4 text-sm text-white/70">Providing unforgettable travel experiences since 2010.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/destinations" className="text-white/70 hover:text-teal-500 transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="text-white/70 hover:text-teal-500 transition-colors">
                    Tours & Packages
                  </Link>
                </li>
                <li>
                  <Link href="/offers" className="text-white/70 hover:text-teal-500 transition-colors">
                    Special Offers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/faq" className="text-white/70 hover:text-teal-500 transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-teal-500 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <address className="mt-4 not-italic text-sm text-white/70">
                <p>123 Travel Street</p>
                <p>Adventure City, AC 12345</p>
                <p className="mt-2">info@wanderlust.com</p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
