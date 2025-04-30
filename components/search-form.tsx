"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, CalendarIcon, Users, Search } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function SearchForm() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="mx-auto max-w-4xl bg-background rounded-xl p-4 md:p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="text-sm font-medium mb-1 block">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Select>
              <SelectTrigger className="w-full h-12 pl-10">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="north-america">North America</SelectItem>
                <SelectItem value="south-america">South America</SelectItem>
                <SelectItem value="oceania">Oceania</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-1 block">Travel Date</label>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 pl-10 justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-1 block">Travelers</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Select>
              <SelectTrigger className="w-full h-12 pl-10">
                <SelectValue placeholder="Number of travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4 Travelers</SelectItem>
                <SelectItem value="5+">5+ Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-1 block opacity-0">Search</label>
          <Button className="h-12 w-full bg-teal-500 hover:bg-teal-600">
            <Search className="mr-2 h-4 w-4" /> Search Tours
          </Button>
        </div>
      </div>
    </div>
  )
}
