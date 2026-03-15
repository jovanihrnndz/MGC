import { ArrowRight, Stethoscope, Sparkles, Shield, Microscope, Syringe, Sun } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Stethoscope,
    title: "General Dermatology",
    description: "Comprehensive skin exams, diagnosis and treatment of skin conditions including acne, eczema, psoriasis, and rashes.",
  },
  {
    icon: Shield,
    title: "Skin Cancer Screening",
    description: "Early detection and treatment of skin cancers including melanoma, basal cell, and squamous cell carcinoma.",
  },
  {
    icon: Microscope,
    title: "Mohs Surgery",
    description: "Precise surgical technique for removing skin cancer with the highest cure rate while preserving healthy tissue.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dermatology",
    description: "Aesthetic treatments including Botox, fillers, chemical peels, and laser therapies for youthful skin.",
  },
  {
    icon: Syringe,
    title: "Injectable Treatments",
    description: "Expert administration of dermal fillers and neuromodulators for natural-looking rejuvenation.",
  },
  {
    icon: Sun,
    title: "Phototherapy",
    description: "Light-based treatments for conditions like psoriasis, vitiligo, and eczema using UVB and PUVA therapy.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Our Services
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive dermatology care
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            From routine skin checks to advanced surgical procedures, we offer a full range of 
            dermatological services tailored to your individual needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
