import { Metadata } from "next"
import { FileText, CreditCard, Clock, MapPin, Car, ClipboardCheck, Download, Phone, Shield, CheckCircle } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Patient Information - Forms, Insurance & Office Hours",
  description: "New patient forms, accepted insurance plans, office hours, and directions for Gary Lee MD Dermatology in Irvine, CA. Located at Sand Canyon Medical Plaza with free parking.",
  keywords: ["new patient forms", "dermatology insurance", "office hours dermatologist Irvine", "Sand Canyon Medical Plaza", "dermatologist directions"],
  openGraph: {
    title: "Patient Information - Forms, Insurance & Office Hours",
    description: "New patient forms, accepted insurance plans, office hours, and directions for Gary Lee MD Dermatology in Irvine, CA.",
  },
}

const forms = [
  { name: "New Patient Registration Form", description: "Basic information and medical history" },
  { name: "HIPAA Privacy Notice", description: "Privacy practices acknowledgment" },
  { name: "Financial Policy Agreement", description: "Payment and billing information" },
  { name: "Medical History Questionnaire", description: "Detailed health background" },
]

const insurances = [
  "Aetna",
  "Anthem Blue Cross",
  "Blue Shield of California",
  "Cigna",
  "HealthNet",
  "Medicare",
  "United Healthcare",
  "And many more...",
]

const hours = [
  { day: "Monday", time: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
  { day: "Thursday", time: "8:00 AM - 5:00 PM" },
  { day: "Friday", time: "8:00 AM - 3:00 PM" },
  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
]

const whatToExpect = [
  {
    title: "Before Your Visit",
    items: [
      "Complete new patient forms online or arrive 15 minutes early",
      "Bring your insurance card and photo ID",
      "List of current medications and allergies",
      "Note any specific skin concerns or questions",
    ],
  },
  {
    title: "During Your Visit",
    items: [
      "Review of your medical history and skin concerns",
      "Comprehensive skin examination",
      "Discussion of diagnosis and treatment options",
      "Personalized treatment plan development",
    ],
  },
  {
    title: "After Your Visit",
    items: [
      "Receive detailed aftercare instructions",
      "Schedule any follow-up appointments",
      "Access to patient portal for records",
      "Direct line for questions or concerns",
    ],
  },
]

export default function PatientInfoPage() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <PageHero
          badge="Patient Information"
          title="Everything you need for your visit"
          description="Access important forms, insurance information, and helpful resources to make your appointment as smooth as possible."
        />

        {/* New Patient Forms */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  New Patients
                </p>
                <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                  Patient forms
                </h2>
                <p className="mb-6 text-pretty text-muted-foreground">
                  Save time at your appointment by completing these forms before your visit. 
                  You can download, print, and fill them out at home, or complete them in our office.
                </p>
                <div className="flex flex-col gap-3">
                  {forms.map((form) => (
                    <Card key={form.name} className="group cursor-pointer transition-shadow hover:shadow-md">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{form.name}</p>
                          <p className="text-sm text-muted-foreground">{form.description}</p>
                        </div>
                        <Download className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Insurance & Payment</CardTitle>
                    <CardDescription>
                      We accept most major insurance plans. Please contact our office to verify your coverage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 grid grid-cols-2 gap-2">
                      {insurances.map((insurance) => (
                        <div key={insurance} className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{insurance}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <p className="text-sm font-medium text-foreground">Payment Options</p>
                      <p className="text-sm text-muted-foreground">
                        We accept cash, checks, and all major credit cards. Payment is due at the time of service.
                        Payment plans available for qualifying procedures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours & Directions */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    {hours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Call to Schedule: (949) 555-1234
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Directions & Parking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="font-medium text-foreground">Gary Lee MD Dermatology</p>
                    <p className="text-muted-foreground">16300 Sand Canyon Ave, Suite 610</p>
                    <p className="text-muted-foreground">Irvine, CA 92618</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <Car className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Parking</p>
                        <p className="text-sm text-muted-foreground">
                          Free parking is available in the Sand Canyon Medical Plaza garage. 
                          Enter from Sand Canyon Avenue and park on any level.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Building Access</p>
                        <p className="text-sm text-muted-foreground">
                          Take the elevator to the 6th floor. Our office is Suite 610, 
                          located to the right as you exit the elevator.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Your Appointment
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                What to expect
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                We want your visit to be as comfortable and efficient as possible. 
                Here&apos;s what you can expect before, during, and after your appointment.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {whatToExpect.map((section) => (
                <Card key={section.title}>
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <ClipboardCheck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
