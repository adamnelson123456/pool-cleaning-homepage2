"use client"

import { useState } from "react"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function QuotePage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-teal-50">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Section - Contact Info */}
          <div className="space-y-10 text-left md:flex md:flex-col md:justify-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-teal-900 md:text-6xl lg:text-7xl">
                Let&apos;s Get Started
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Tell us about your pool and we&apos;ll follow up within 24 hours. Financing available!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-teal-600" />
                <span className="text-xl md:text-2xl">(281) 660-8262</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-teal-600" />
                <span className="text-xl md:text-2xl">OolsPoolCleaning@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Section - Quote Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="focus:border-teal-500 focus:ring-teal-500"
                />
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="min-h-[120px] focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Send Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 