"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  Facebook,
  Check,
  Clock,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  MapPin,
  Instagram,
  ExternalLink,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import TestimonialSlider from "@/components/testimonial-slider"
import ImageGallery from "@/components/image-gallery"
import { useToast } from "@/hooks/use-toast"
import { useInView } from "@/hooks/use-in-view"

export default function Home() {
  const { toast } = useToast()
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null)
  const service1Ref = useRef<HTMLDivElement>(null)
  const service2Ref = useRef<HTMLDivElement>(null)
  const service3Ref = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Check if elements are in view
  const heroInView = useInView(heroRef)
  const service1InView = useInView(service1Ref)
  const service2InView = useInView(service2Ref)
  const service3InView = useInView(service3Ref)
  const galleryInView = useInView(galleryRef)
  const contactInView = useInView(contactRef)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after hero section
      setShowFloatingButton(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        })
        setFormSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto flex h-16 items-center justify-between">
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-sm font-medium hover:text-teal-600 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="text-sm font-medium hover:text-teal-600 transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              onClick={(e) => scrollToSection(e, 'gallery')}
              className="text-sm font-medium hover:text-teal-600 transition-colors duration-300"
            >
              Our Work
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => scrollToSection(e, 'testimonials')}
              className="text-sm font-medium hover:text-teal-600 transition-colors duration-300"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm font-medium hover:text-teal-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
          <div>
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              <Phone className="mr-2 h-4 w-4" />
              (713) 555-1234
            </Button>
            <Button className="md:hidden" size="icon" variant="ghost">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="/placeholder.svg?height=1080&width=1920"
            >
              <source src="/3779282-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`container relative z-10 text-center px-4 transition-all duration-1000 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto text-white">
              <h1 className="mb-6 font-display tracking-tight md:text-7xl lg:text-8xl leading-tight">
                WE TAKE THE &apos;P&apos;
                <br />
                OUT OF POOLS!
              </h1>
              <p className="mb-10 text-xl text-white/90 md:text-2xl lg:text-3xl max-w-3xl mx-auto font-medium">
                Houston&apos;s premier pool cleaning and maintenance service, delivering crystal clear water and
                worry-free pool ownership.
              </p>
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-teal-500/20 text-lg md:text-xl py-6 px-8 rounded-xl"
                asChild
              >
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>

          <div
            className="absolute bottom-10 left-0 right-0 mx-auto z-10 cursor-pointer animate-bounce flex items-center justify-center"
            onClick={scrollToServices}
          >
            <ChevronDown className="h-12 w-12 text-white" />
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
              <p className="text-muted-foreground">
                Professional pool services to keep your water pristine, equipment running smoothly, and pool looking
                beautiful.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div
                ref={service1Ref}
                className={`group relative rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-xl hover:scale-[1.02] ${
                  service1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="absolute -top-3 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Starting at $99/mo
                </div>
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="12" y1="11" x2="12" y2="17"></line>
                    <line x1="9" y1="14" x2="15" y2="14"></line>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Pool Cleaning</h3>
                <p className="mb-4 text-muted-foreground">
                  Regular cleaning services to keep your pool sparkling clean and free of debris, algae, and
                  contaminants.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">Weekly maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">Chemical balancing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">Filter cleaning</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div
                ref={service2Ref}
                className={`group relative rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-xl hover:scale-[1.02] ${
                  service2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="absolute -top-3 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Starting at $149
                </div>
                <div className="mb-4 rounded-full bg-teal-100 p-3 w-12 h-12 flex items-center justify-center text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Maintenance & Repair</h3>
                <p className="mb-4 text-muted-foreground">
                  Expert equipment maintenance and repairs to keep your pool systems running efficiently year-round.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-500" />
                    <span className="text-sm">Pump & filter service</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-500" />
                    <span className="text-sm">Heater maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-teal-500" />
                    <span className="text-sm">Equipment upgrades</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors"
                >
                  Learn More
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div
                ref={service3Ref}
                className={`group relative rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-xl hover:scale-[1.02] ${
                  service3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="absolute -top-3 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Starting at $1,999
                </div>
                <div className="mb-4 rounded-full bg-rose-100 p-3 w-12 h-12 flex items-center justify-center text-rose-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 22h20"></path>
                    <path d="M7 10l5-6 5 6"></path>
                    <path d="M11 10v8"></path>
                    <path d="M17 10v8"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Resurfacing</h3>
                <p className="mb-4 text-muted-foreground">
                  Revitalize your pool with professional resurfacing services to repair damage and enhance aesthetics.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Plaster & pebble finishes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Tile replacement</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-rose-500" />
                    <span className="text-sm">Crack & surface repairs</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-800 transition-colors"
                >
                  Learn More
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          ref={galleryRef}
          className={`py-16 md:py-24 bg-gradient-to-b from-white to-teal-50 transition-all duration-1000 ${
            galleryInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Our Work</h2>
              <p className="text-muted-foreground">
                See the difference our professional pool services can make with these before and after transformations.
              </p>
            </div>

            <ImageGallery />
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-teal-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
              <p className="text-muted-foreground">
                Hear from our satisfied customers who enjoy crystal clear pools without the hassle.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        <section className="py-12 bg-teal-600 text-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Financing Available</h2>
                <p className="mt-2 text-teal-100">Flexible payment plans for major repairs and renovations.</p>
              </div>
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={contactRef}
          className={`py-16 md:py-24 transition-all duration-1000 ${
            contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h2>
              <p className="text-muted-foreground">
                Ready for a cleaner pool with less hassle? Get in touch today for a free quote.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    We're here to help with all your pool cleaning and maintenance needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 mt-1 text-teal-600" />
                    <div>
                      <h4 className="text-lg font-medium">Phone</h4>
                      <p className="text-lg text-muted-foreground">(713) 555-1234</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1 text-teal-600" />
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="text-lg text-muted-foreground">info@oolspoolcleaning.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 mt-1 text-teal-600" />
                    <div>
                      <h4 className="text-lg font-medium">Business Hours</h4>
                      <p className="text-lg text-muted-foreground">Monday - Friday: 8am - 5pm</p>
                      <p className="text-lg text-muted-foreground">Saturday: 9am - 2pm</p>
                      <p className="text-lg text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 mt-1 text-teal-600" />
                    <div>
                      <h4 className="text-lg font-medium">Service Area</h4>
                      <p className="text-lg text-muted-foreground">Houston and surrounding areas</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <Link
                    href="https://www.facebook.com/OolsPoolCleaning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-teal-100 p-3 text-teal-600 hover:bg-teal-200 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/ools.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-teal-100 p-3 text-teal-600 hover:bg-teal-200 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link 
                    href="https://www.thumbtack.com/tx/houston/swimming-pool-maintenance/ools-pool-cleaning/service/246403558900032519"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-lg text-teal-600 hover:underline"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M11.83 8.34a1.69 1.69 0 00-2.37 0l-4.83 4.84a1.7 1.7 0 002.37 2.38l3.6-3.6 3.65 3.64a1.69 1.69 0 102.38-2.38l-4.8-4.88z"></path>
                    </svg>
                    Find us on Thumbtack
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border shadow-sm">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center text-green-600 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-md">
                      Thank you for contacting Ools Pool Cleaning. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your pool service needs"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    <Button
                      className="w-full md:w-auto transition-all duration-300 hover:shadow-lg bg-teal-600 hover:bg-teal-700 hover:scale-105"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-teal-50 py-8 relative">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold text-teal-700">Ools</span>
                <span className="text-lg"> Pool Cleaning</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Houston&apos;s premier pool service company. We take the &apos;P&apos; out of Pools!
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-teal-700" />
                <span className="text-sm">(713) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-teal-700" />
                <span className="text-sm">info@oolspoolcleaning.com</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link
                  href="https://www.facebook.com/OolsPoolCleaning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-2 text-teal-600 hover:bg-teal-100 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/ools.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-2 text-teal-600 hover:bg-teal-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.thumbtack.com/tx/houston/swimming-pool-maintenance/ools-pool-cleaning/service/246403558900032519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-2 text-teal-600 hover:bg-teal-100 transition-colors"
                  aria-label="Thumbtack"
                >
                  <svg viewBox="0 0 24 24" height="16" width="16" aria-hidden="true" fill="currentColor">
                    <path d="M11.83 8.34a1.69 1.69 0 00-2.37 0l-4.83 4.84a1.7 1.7 0 002.37 2.38l3.6-3.6 3.65 3.64a1.69 1.69 0 102.38-2.38l-4.8-4.88z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Ools Pool Cleaning. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="#" className="text-xs text-muted-foreground hover:text-teal-600">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs text-muted-foreground hover:text-teal-600">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {showFloatingButton && (
            <div className="fixed bottom-20 right-6 z-50 animate-pulse">
              <Button
                size="lg"
                className="bg-teal-600 text-white shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </footer>
    </div>
  )
}
