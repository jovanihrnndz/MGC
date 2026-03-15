import { FileText, CreditCard, ClipboardList, Download, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const resources = [
  {
    icon: FileText,
    title: "New Patient Forms",
    description: "Download and complete your intake forms before your first visit to save time.",
    action: "Download Forms",
  },
  {
    icon: CreditCard,
    title: "Insurance & Billing",
    description: "We accept most major insurance plans. View our accepted providers and payment options.",
    action: "View Insurance",
  },
  {
    icon: ClipboardList,
    title: "Prepare for Your Visit",
    description: "Learn what to expect during your appointment and how to prepare for different procedures.",
    action: "Learn More",
  },
]

export function PatientResources() {
  return (
    <section id="resources" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Patient Resources
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Everything you need for your visit
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Access important information, forms, and resources to make your appointment as smooth as possible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="group transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <CardDescription className="text-base leading-relaxed">
                  {resource.description}
                </CardDescription>
                <Button variant="ghost" className="w-fit gap-2 p-0 text-primary hover:bg-transparent hover:text-primary/80">
                  {resource.action}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
