import { Metadata } from "next"
import { Stethoscope, Sparkles, Shield, Microscope, Syringe, Sun, Zap, Droplets, Eye, Scissors, Pill, Activity } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dermatology Services - Medical, Cosmetic & Skin Cancer Treatment",
  description: "Comprehensive dermatology services in Irvine, CA: medical dermatology, cosmetic treatments (Botox, fillers, laser), skin cancer screening & treatment. Dr. Gary Lee, board-certified dermatologist.",
  keywords: ["medical dermatology Irvine", "cosmetic dermatology", "skin cancer treatment", "Botox Irvine", "dermal fillers", "acne treatment", "eczema treatment", "psoriasis", "laser treatment", "chemical peel"],
  openGraph: {
    title: "Dermatology Services - Medical, Cosmetic & Skin Cancer Treatment",
    description: "Comprehensive dermatology services in Irvine, CA: medical dermatology, cosmetic treatments, skin cancer screening & treatment by Dr. Gary Lee.",
  },
}

const medicalServices = [
  {
    icon: Stethoscope,
    title: "General Dermatology",
    description: "Comprehensive diagnosis and treatment of skin conditions including acne, eczema, psoriasis, rosacea, and rashes.",
  },
  {
    icon: Microscope,
    title: "Skin Biopsies",
    description: "Diagnostic procedures to examine skin tissue and identify conditions, infections, or abnormal growths.",
  },
  {
    icon: Pill,
    title: "Acne Treatment",
    description: "Customized treatment plans for all types of acne, from mild to severe, including prescription medications and therapies.",
  },
  {
    icon: Activity,
    title: "Eczema & Psoriasis",
    description: "Advanced management of chronic skin conditions with the latest therapies and personalized care plans.",
  },
  {
    icon: Droplets,
    title: "Wart & Mole Removal",
    description: "Safe and effective removal of warts, moles, skin tags, and other benign growths using various techniques.",
  },
  {
    icon: Eye,
    title: "Rash Evaluation",
    description: "Expert diagnosis and treatment of skin rashes, allergic reactions, and contact dermatitis.",
  },
]

const cosmeticServices = [
  {
    icon: Syringe,
    title: "Botox & Dysport",
    description: "FDA-approved neuromodulators to reduce fine lines and wrinkles for a refreshed, natural appearance.",
  },
  {
    icon: Sparkles,
    title: "Dermal Fillers",
    description: "Restore volume and smooth deep wrinkles with hyaluronic acid fillers for natural-looking results.",
  },
  {
    icon: Zap,
    title: "Laser Treatments",
    description: "Advanced laser therapies for skin resurfacing, pigmentation, vascular lesions, and hair removal.",
  },
  {
    icon: Sun,
    title: "Chemical Peels",
    description: "Medical-grade peels to improve skin texture, reduce sun damage, and reveal brighter, smoother skin.",
  },
  {
    icon: Droplets,
    title: "Microneedling",
    description: "Collagen induction therapy to improve skin texture, reduce scars, and promote skin rejuvenation.",
  },
  {
    icon: Activity,
    title: "PRP Therapy",
    description: "Platelet-rich plasma treatments to promote healing, hair restoration, and skin rejuvenation.",
  },
]

const surgicalServices = [
  {
    icon: Shield,
    title: "Skin Cancer Screening",
    description: "Comprehensive full-body skin examinations for early detection of melanoma and other skin cancers.",
  },
  {
    icon: Microscope,
    title: "Mohs Surgery Referral",
    description: "Referrals to Mohs surgeons for the precise removal of skin cancer with the highest cure rates.",
  },
  {
    icon: Scissors,
    title: "Excisional Surgery",
    description: "Surgical removal of skin cancers, cysts, lipomas, and other growths with careful attention to cosmetic outcomes.",
  },
  {
    icon: Activity,
    title: "Cryotherapy",
    description: "Freezing treatment for precancerous lesions, warts, and other skin growths using liquid nitrogen.",
  },
]

function ServiceSection({ 
  title, 
  subtitle, 
  description, 
  services 
}: { 
  title: string
  subtitle: string
  description: string
  services: typeof medicalServices 
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            {subtitle}
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            {description}
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
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <PageHero
          badge="Our Services"
          title="Comprehensive dermatology care"
          description="From routine skin checks to advanced cosmetic procedures, Dr. Lee offers a full range of dermatological services tailored to your individual needs."
        />

        <div className="bg-background">
          <ServiceSection
            subtitle="Medical Dermatology"
            title="Diagnose & treat skin conditions"
            description="Expert diagnosis and treatment of a wide range of skin, hair, and nail conditions using the latest evidence-based approaches."
            services={medicalServices}
          />
        </div>

        <div className="bg-secondary">
          <ServiceSection
            subtitle="Cosmetic Dermatology"
            title="Enhance your natural beauty"
            description="Advanced aesthetic treatments to help you look and feel your best, with natural-looking results tailored to your goals."
            services={cosmeticServices}
          />
        </div>

        <div className="bg-background">
          <ServiceSection
            subtitle="Skin Cancer & Surgical Dermatology"
            title="Detection & treatment"
            description="Early detection and expert treatment of skin cancers and precancerous lesions, with a focus on optimal outcomes."
            services={surgicalServices}
          />
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
