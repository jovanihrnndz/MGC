import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Services } from "@/components/services"
import { AboutDoctor } from "@/components/about-doctor"
import { PatientResources } from "@/components/patient-resources"
import { PatientEducation } from "@/components/patient-education"
import { OfficeInfo } from "@/components/office-info"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <AboutDoctor />
        <PatientResources />
        <PatientEducation />
        <OfficeInfo />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
