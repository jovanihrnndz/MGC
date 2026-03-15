import { Clock, MapPin, Phone, Mail, Car } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const hours = [
  { day: "Monday - Thursday", time: "8:00 AM - 5:00 PM" },
  { day: "Friday", time: "8:00 AM - 3:00 PM" },
  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function OfficeInfo() {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Visit Us
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Office hours & location
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map Placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-12 w-12 text-muted-foreground/50" />
                <p className="text-muted-foreground">16300 Sand Canyon Ave, Suite 610</p>
                <p className="text-muted-foreground">Irvine, CA 92618</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {hours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
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
                  <div className="flex items-start gap-3">
                    <Car className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Free parking available in the building garage. Located in the Sand Canyon Medical Plaza.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
