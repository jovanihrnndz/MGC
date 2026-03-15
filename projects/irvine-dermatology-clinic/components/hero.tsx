import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Board-Certified Dermatologist
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Expert skin care you can trust
            </h1>
            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Dr. Gary Lee provides comprehensive dermatological care in Irvine, California. 
              Specializing in medical dermatology, cosmetic procedures, and skin cancer treatment with a personalized approach.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
            <Image
              src="/images/hero-clinic.jpg"
              alt="Modern dermatology clinic interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
