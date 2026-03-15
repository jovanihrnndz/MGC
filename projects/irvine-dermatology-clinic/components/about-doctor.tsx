import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const credentials = [
  "Board Certified by American Board of Dermatology",
  "Specializing in Medical Dermatology",
  "Expert in Cosmetic Dermatology Procedures",
  "Skin Cancer Detection and Treatment Specialist",
]

export function AboutDoctor() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl lg:order-1">
            <Image
              src="/images/doctor-portrait.jpg"
              alt="Dr. Gary Lee, Board-Certified Dermatologist"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 lg:order-2">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Meet Your Doctor
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Gary Lee, MD, FAAD
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Dr. Gary Lee is a board-certified dermatologist providing comprehensive skin care 
              to patients in Irvine and Orange County. With expertise in medical dermatology, 
              cosmetic procedures, and skin cancer treatment, Dr. Lee delivers personalized care for all your skin health needs.
            </p>
            <ul className="flex flex-col gap-3">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{credential}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button className="gap-2" asChild>
                <a href="/about">
                  Learn More About Dr. Lee
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
