"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const hours = [
  { day: "Monday - Thursday", time: "8:00 AM - 5:00 PM" },
  { day: "Friday", time: "8:00 AM - 3:00 PM" },
  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your message. We will get back to you shortly.")
  }

  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <PageHero
          badge="Contact Us"
          title="Get in touch"
          description="Have questions or ready to schedule an appointment? We're here to help. Reach out to our friendly team today."
        />

        {/* Contact Form & Info */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">Send us a message</h2>
                <p className="mb-6 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(949) 555-1234"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="reason">Reason for Contact</Label>
                    <Select
                      value={formData.reason}
                      onValueChange={(value) => setFormData({ ...formData, reason: value })}
                    >
                      <SelectTrigger id="reason">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appointment">Schedule an Appointment</SelectItem>
                        <SelectItem value="question">General Question</SelectItem>
                        <SelectItem value="billing">Billing Inquiry</SelectItem>
                        <SelectItem value="records">Medical Records Request</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Office Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground">Gary Lee MD Dermatology</p>
                    <p className="text-muted-foreground">16300 Sand Canyon Ave, Suite 610</p>
                    <p className="mb-4 text-muted-foreground">Irvine, CA 92618</p>
                    <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground/50" />
                          <p className="text-sm text-muted-foreground">Map placeholder</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <a href="tel:+19495551234" className="text-foreground hover:text-primary">
                          (949) 555-1234
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <a href="mailto:info@garyleemd.com" className="text-foreground hover:text-primary">
                          info@garyleemd.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      {hours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium text-foreground">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
