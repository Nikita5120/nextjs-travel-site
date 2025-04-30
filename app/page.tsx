import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu } from "lucide-react"
import { destinations } from "@/lib/data"
import { SearchForm } from "@/components/search-form"
import { DestinationCard } from "@/components/destination-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { FeaturedTour } from "@/components/featured-tour"

export default function TourismLandingPage() {
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
          <div className="h-[600px] relative">
            <Image
              src="/images/hero-beach.png"
              alt="Beautiful beach destination"
              fill
              priority
              className="object-cover"
            />
            <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-md">
                  Discover the World
                </h1>
                <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl drop-shadow-md">
                  Unforgettable journeys await. Explore breathtaking destinations and create memories that last a
                  lifetime.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                    Explore Destinations
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Special Offers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Popular Destinations</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Explore our handpicked selection of the most breathtaking and sought-after destinations around the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/destinations">
                View All Destinations <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Your Perfect Trip</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Use our search tool to discover tours and experiences tailored to your preferences.
              </p>
            </div>
            <SearchForm />
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Tours</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Our most popular and highly-rated travel experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeaturedTour
              title="Greek Island Hopping"
              image="/images/greece.png"
              duration="10 days"
              price={1299}
              description="Experience the best of the Greek islands with this comprehensive tour package. Visit Santorini, Mykonos, and Crete."
              rating={4.9}
            />
            <FeaturedTour
              title="Japan Cherry Blossom Tour"
              image="/images/japan.png"
              duration="12 days"
              price={2499}
              description="Witness the magical cherry blossom season in Japan. Tour includes Tokyo, Kyoto, and Mount Fuji."
              rating={4.8}
            />
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Travelers Say</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Read testimonials from travelers who have experienced our tours and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah Johnson"
              location="London, UK"
              quote="The guided tour of Kyoto was absolutely magical. Our guide was knowledgeable and showed us hidden gems we would never have found on our own."
              avatar="/images/avatar-1.png"
            />
            <TestimonialCard
              name="Michael Chen"
              location="Toronto, Canada"
              quote="From booking to the actual safari experience in Tanzania, everything was seamless. The accommodations were luxurious and the wildlife sightings were incredible."
              avatar="/images/avatar-2.png"
            />
            <TestimonialCard
              name="Elena Rodriguez"
              location="Barcelona, Spain"
              quote="The Greek island hopping tour exceeded all my expectations. The personalized itinerary allowed us to experience both popular spots and secluded beaches."
              avatar="/images/avatar-3.png"
            />
          </div>
        </section>

        <section className="relative py-12 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-background.png"
              alt="Travel inspiration"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready for Your Next Adventure?
              </h2>
              <p className="mt-4 text-white/90">
                Sign up for our newsletter to receive exclusive offers, travel tips, and inspiration for your next
                journey.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 sm:min-w-[300px]"
                />
                <Button variant="secondary" size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
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
              <p className="mt-4 text-sm text-white/70">
                Providing unforgettable travel experiences since 2010. Our mission is to help you discover the world's
                most amazing destinations.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-white/70 hover:text-teal-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-teal-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-teal-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
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
                <li>
                  <Link href="/about" className="text-white/70 hover:text-teal-500 transition-colors">
                    About Us
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
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-teal-500 transition-colors">
                    Booking Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-teal-500 transition-colors">
                    Privacy Policy
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
                <p>+1 (555) 123-4567</p>
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
