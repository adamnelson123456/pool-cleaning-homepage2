"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface Testimonial {
  id: number
  name: string
  date: string
  text: string
  rating: number
  details: string
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Matt B.",
      date: "May 15th, 2025",
      text: "Rob was prompt and helped educate me on my pool issue. Saved me a ton of money and will absolutely take advantage of his pool cleaning service going forward. 100% recommend if you're looking for an honest reliable and knowledgeable experience!",
      rating: 5,
      details: "In ground • Outdoors • Concrete • Non-functional pump",
    },
    {
      id: 2,
      name: "Ryan A.",
      date: "Nov 19, 2024",
      text: "I just bought a house, so the pool has not been serviced in a few weeks. The water was starting to turn green. One service visit later, the pool is crystal clear.",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Chlorinated water • Pool water is green or cloudy • Algae • Leaves • Insects • I do not need my pool drained • Once a week",
    },
    {
      id: 3,
      name: "Juan A.",
      date: "Aug 29, 2023",
      text: "Our pool was green and full of algae, and we tried unsuccessfully with multiple professionals to get it clear. Robert and his team were punctual, affordable, professional and got the job done! Highly recommended!",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Concrete • Chlorinated water • Pool water is green or cloudy • Algae • I do not need my pool drained • Once a week",
    },
    {
      id: 4,
      name: "Irina Z.",
      date: "Aug 28, 2023",
      text: "I received great pool service and repairs from the company. They completed work quickly. I think that we have never had such a sparkling clean water before and we are finally enjoying our pool. Thank you!",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Fiberglass • Chlorinated water • Pool water is clear • I do not need my pool drained • Once a week",
    },
    {
      id: 5,
      name: "Idris A.",
      date: "1 month ago",
      text: "They're so kind and helpful and i will share photos, they are doing great job.",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Chlorinated water • Pool water is green or cloudy • Algae • Leaves • Insects • I do not need my pool drained • Once a week • Cleaning system",
    },
    {
      id: 6,
      name: "Sam R.",
      date: "May 23, 2023",
      text: "Same day service and cost of repair was a great value. They were direct in discussing what they were repairing and on-site a short time. Cleaned up after themselves and were very friendly and considerate. Definitely will use them again for any pool services in the future.",
      rating: 5,
      details: "In ground • Outdoors • Concrete • Non-functional pump",
    },
    {
      id: 7,
      name: "Lauren S.",
      date: "Mar 24, 2023",
      text: "Very helpful and thorough assessment of our aging pool system. Also, caught an issue that another pool company did not catch. Honest and fairly priced.",
      rating: 5,
      details: "In ground • Outdoors • Filter replacement",
    },
    {
      id: 8,
      name: "Victoria G.",
      date: "Mar 9, 2023",
      text: "I appreciate that he responded promptly to my inquiry, went out the same day, was friendly, and provide me a solution. Most importantly he provided a plan to help me get my pool back looking nice because it was swamp green. I definitely recommend this company.",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Concrete • Chlorinated water • Pool water is green or cloudy • Algae • Leaves • I do not need my pool drained • Once a week",
    },
    {
      id: 9,
      name: "Dawn M.",
      date: "Aug 17, 2022",
      text: "Great team to work with on my pool. I had to go out of town and call them to handle things. It was starting to get algae and I needed the filter cleaned. They did a great job and they come weekly!",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Concrete • Chlorinated water • My pool water is clear • Algae • I do not need my pool drained • Once a week • Cleaning system",
    },
    {
      id: 10,
      name: "Marcia J.",
      date: "Jul 27, 2022",
      text: "I originally wanted the pool cleaned but Robert showed me why the pool was having difficulties and immediately set to work fixing leaks and skimmers etc. He is always easy to get and he is very prompt in his delivery of service. He took my pool from OMG grim to ready to swim! While additional work is being done, so far, it has been great!",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Chlorinated water • My pool water is green or cloudy • Algae • Leaves • I do not need my pool drained • Once a week",
    },
    {
      id: 11,
      name: "Cory B.",
      date: "May 6, 2022",
      text: "Robert did an amazing job getting our pool sparkling clean. I really like the results and will certainly use Ools Pool in the future.",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Concrete • Saltwater • My pool water is clear • I do not need my pool drained • Once a week",
    },
    {
      id: 12,
      name: "Edward H.",
      date: "Oct 5, 2020",
      text: "I hired Ools Pools to upgrade my pool filter system. They were professional, effective, and efficient. I will definitely work with them again as needed.",
      rating: 5,
      details: "Inspection • In-ground pool • Concrete • Chlorinated water • My pool water is clear • I do not need my pool drained • Once a week • Cleaning system",
    },
    {
      id: 13,
      name: "Gottfried T.",
      date: "Jun 30, 2020",
      text: "I just bought a house and asked Ools Pool to check my pool to see if there are any urgent issues we need to address. Robert and Matthew were very accommodating with my schedule, they arrived on time and did a complete review of the pool and equipment. They were very friendly and polite and provided some recommendations for the pool cleaning system and maintenance plan.",
      rating: 5,
      details: "In ground • Outdoors • Cracked, flaking surface or loose tiles • Filter replacement",
    },
    {
      id: 14,
      name: "Brandon B.",
      date: "May 26, 2020",
      text: "Great job with our pool. They really took extra care of our pool and provided timely and important information about our pool and equipment. I would definitely recommend and use their services again in the future.",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Chlorinated water • My pool water is clear • Leaves • Insects • I do not need my pool drained • Once a week",
    },
    {
      id: 15,
      name: "Akash B.",
      date: "Mar 11, 2020",
      text: "This is the first time I have owned a pool and it was the first time I was having it serviced. What I liked was Robert, very patiently, walked me thru the entire mechanics of the pool cleaning equipment and answered all my questions.",
      rating: 5,
      details: "Cleaning and Maintenance • In-ground pool • Concrete • Chlorinated water • My pool water is clear • I do not need my pool drained • Once a week",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Number of testimonials visible at once (1 on mobile, 3 on desktop)
  const visibleTestimonials = isMobile ? 1 : 3
  const maxIndex = testimonials.length - 1

  const goToNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1))
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevious()
    }
  }

  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[activeIndex]]
    } else {
      // For desktop, show 3 testimonials at once
      const startIdx = activeIndex
      const visibleItems = []

      for (let i = 0; i < 3; i++) {
        const idx = (startIdx + i) % testimonials.length
        visibleItems.push(testimonials[idx])
      }

      return visibleItems
    }
  }

  // Render a testimonial card with consistent styling
  const renderTestimonialCard = (testimonial: Testimonial) => (
    <div
      key={testimonial.id}
      className="h-full bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">{testimonial.date}</span>
      </div>
      <blockquote className="mb-6 text-gray-700 italic break-words">"{testimonial.text}"</blockquote>
      <div className="space-y-2">
        <div className="font-semibold">{testimonial.name}</div>
        <div className="text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-1">
            {testimonial.details.split(" • ").map((detail, i) => (
              <span key={i} className="bg-teal-50 text-teal-700 px-2 py-1 rounded-full text-xs">
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const visibleTestimonialItems = getVisibleTestimonials()

  return (
    <div
      className="relative mx-auto"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Static Testimonial Display (No Slider) */}
      <div className="transition-all duration-500 ease-in-out">
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-4 px-4`}>
          {visibleTestimonialItems.map((testimonial) => renderTestimonialCard(testimonial))}
        </div>
      </div>

      {/* Navigation Dots (non-clickable, just indicators) */}
      <div className="mt-6 mb-4 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === activeIndex ? "bg-teal-600" : "bg-gray-300"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md md:-left-6 z-10 hover:bg-teal-50 hover:text-teal-600 w-10 h-10 border-teal-200"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md md:-right-6 z-10 hover:bg-teal-50 hover:text-teal-600 w-10 h-10 border-teal-200"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
