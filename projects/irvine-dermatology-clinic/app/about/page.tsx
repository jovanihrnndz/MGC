import Image from "next/image"
import { Metadata } from "next"
import { CheckCircle, Award, GraduationCap, Heart } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Dr. Gary Lee - Board Certified Dermatologist Irvine",
  description: "Meet Dr. Gary Lee, FAAD, a board-certified dermatologist in Irvine, CA with expertise in medical dermatology, cosmetic procedures, and skin cancer treatment. Serving Orange County for over a decade.",
  keywords: ["Dr. Gary Lee", "dermatologist Irvine", "board certified dermatologist", "FAAD", "skin doctor Orange County", "dermatology credentials"],
  openGraph: {
    title: "About Dr. Gary Lee - Board Certified Dermatologist Irvine",
    description: "Meet Dr. Gary Lee, FAAD, a board-certified dermatologist in Irvine, CA with expertise in medical dermatology, cosmetic procedures, and skin cancer treatment.",
    images: ["/images/doctor-portrait.jpg"],
  },
}

const credentials = [
  "Board Certified by American Board of Dermatology",
  "Fellow of the American Academy of Dermatology (FAAD)",
  "Member of the American Society for Dermatologic Surgery",
  "Member of the Skin Cancer Foundation",
]

const education = [
  { title: "Medical School", institution: "UCLA School of Medicine", year: "Doctor of Medicine" },
  { title: "Residency", institution: "UC Irvine Medical Center", year: "Dermatology Residency" },
  { title: "Fellowship", institution: "Advanced Dermatologic Surgery", year: "Procedural Dermatology" },
]

const philosophy = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every patient receives individualized attention and a personalized treatment plan tailored to their unique skin concerns and goals.",
  },
  {
    icon: Award,
    title: "Excellence in Practice",
    description: "Committed to staying at the forefront of dermatological advances through continuing education and adopting evidence-based treatments.",
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "Empowering patients with knowledge about their skin health, prevention strategies, and treatment options for informed decision-making.",
  },
]

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <PageHero
          badge="About Dr. Lee"
          title="Dedicated to your skin health"
          description="Board-certified dermatologist providing comprehensive, compassionate care to patients in Irvine and Orange County for over a decade."
        />

        {/* Biography Section */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/doctor-portrait.jpg"
                  alt="Dr. Gary Lee, Board-Certified Dermatologist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                  Gary Lee, MD, FAAD
                </h2>
                <div className="flex flex-col gap-4 text-muted-foreground">
                  <p className="text-pretty leading-relaxed">
                    Dr. Gary Lee is a board-certified dermatologist who has been serving patients in Irvine and 
                    throughout Orange County for over a decade. His passion for dermatology began during his 
                    medical training, where he developed a deep appreciation for the intersection of medical 
                    science and aesthetic medicine.
                  </p>
                  <p className="text-pretty leading-relaxed">
                    After completing his dermatology residency at UC Irvine Medical Center, Dr. Lee pursued 
                    additional training in procedural dermatology, allowing him to offer comprehensive care 
                    that spans medical, surgical, and cosmetic dermatology.
                  </p>
                  <p className="text-pretty leading-relaxed">
                    Dr. Lee takes a holistic approach to skin health, considering each patient&apos;s lifestyle, 
                    concerns, and goals when developing personalized treatment plans. He is committed to 
                    providing the highest quality care in a comfortable, welcoming environment.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 pt-4">
                  {credentials.map((credential) => (
                    <li key={credential} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Training */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Education & Training
              </p>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Credentials & certifications
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {education.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Philosophy */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Our Approach
              </p>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Practice philosophy
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {philosophy.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
