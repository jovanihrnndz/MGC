import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ServiceCards } from "@/components/sections/service-cards";
import { TestimonialStrip } from "@/components/sections/testimonial-strip";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Murrieta General Construction | Licensed Contractor in Murrieta, CA",
  description:
    "Trusted general contractor in Murrieta, CA. Kitchen remodels, bathroom renovations, room additions, and custom homes. Licensed, bonded, insured. Free estimates."
};

const trustItems = [
  "Licensed & Insured (Lic. #XXXXXX)",
  "25+ Years Experience",
  "500+ Projects Completed",
  "4.9★ Google Rating"
];

const whyChoose = [
  "Clear, Upfront Pricing — Detailed estimates with no surprise fees",
  "Licensed & Fully Insured — Your home and investment are protected",
  "On-Time Project Completion — We respect your schedule and keep our word",
  "Direct Communication — Talk to your project lead, not a call center",
  "Quality Craftsmanship — Built right the first time, guaranteed"
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-radial">
        <div className="container grid gap-10 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              General Contractor Murrieta
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">
              Murrieta&apos;s Trusted General Contractor
            </h1>
            <p className="mt-4 text-base text-neutral-700 md:text-lg">
              From kitchen remodels to custom builds, we deliver quality construction with
              honest communication — on time and on budget.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Your Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur">
            <h2 className="text-lg font-semibold">Local. Licensed. Ready to Build.</h2>
            <p className="mt-3 text-sm text-neutral-600">
              We specialize in high-quality renovations, additions, and custom builds across
              Murrieta, Temecula, and Southwest Riverside County.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-neutral-700">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-neutral-200/70 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-5 text-sm font-semibold text-neutral-700">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">What We Build</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Full-service construction for homes and businesses across Southwest Riverside
              County.
            </p>
          </div>
          <ServiceCards />
          <Link href="/services" className="inline-flex items-center text-sm font-semibold text-brand-700">
            View All Services →
          </Link>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Why Murrieta Homeowners Trust Us
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-neutral-700">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Local Trust Signals</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Licensed, bonded, and insured. Over 25 years serving Murrieta homeowners and
              small commercial clients with transparent pricing and reliable timelines.
            </p>
            <div className="mt-6 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-500" />
                500+ Projects Completed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-500" />
                4.9★ Google Rating
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-500" />
                Licensed, Bonded & Insured
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">How It Works</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              From consultation to final walkthrough, our team keeps you informed and your
              project on schedule.
            </p>
          </div>
          <ProcessSteps />
          <Button asChild size="lg">
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Recent Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Recent Work in Your Neighborhood
            </h2>
          </div>
          <ProjectGrid limit={3} />
          <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-brand-700">
            See More Projects →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">What Our Clients Say</h2>
          </div>
          <TestimonialStrip />
        </div>
      </section>

      <CTASection
        headline="Ready to Start Your Project?"
        subheadline="Get a free, no-obligation estimate from Murrieta's most trusted contractor."
        primaryLabel="Get Your Free Estimate"
        primaryHref="/contact"
        secondaryText={`Or call us at ${siteConfig.phone}`}
      />
    </>
  );
}
