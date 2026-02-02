import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ServiceCards } from "@/components/sections/service-cards";
import { TestimonialStrip } from "@/components/sections/testimonial-strip";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Murrieta General Contractor | 500+ Projects, 25 Years | Kitchen & Bath Remodels",
  description:
    "Licensed general contractor in Murrieta, CA. Kitchen remodels, bathroom renovations, room additions, and custom homes. 500+ local projects. Free estimates. (951) 555-0123"
};

const trustItems = [
  "Licensed & Insured (Lic. #XXXXXX)",
  "25+ Years in Murrieta",
  "500+ Projects Completed",
  "Workmanship Guaranteed"
];

const whyChoose = [
  "No Surprise Invoices — Your final bill matches your estimate, or we eat the difference",
  "One Point of Contact — Your project manager answers the phone. Always.",
  "We Clean Up Daily — Your home stays livable, even mid-renovation",
  "Licensed Crews Only — No random subcontractors. Same team, start to finish.",
  "Written Warranty — We stand behind our work, in writing"
];

const homeFaqs = [faqs[1], faqs[4], faqs[3], faqs[8]];
const featuredTestimonials = [testimonials[0], testimonials[1], testimonials[5]];

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={homeFaqs} />
      <section className="relative overflow-hidden bg-hero-radial">
        <div className="container grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              General Contractor Murrieta
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">
              500+ Murrieta Projects. Zero Excuses.
              <span className="sr-only"> General contractor Murrieta</span>
            </h1>
            <p className="mt-4 text-base text-neutral-700 md:text-lg">
              From kitchen remodels to custom builds — on your schedule, not ours. Licensed and
              insured in California since 1999.
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
            <div className="relative h-56 w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/owner-hero.jpg"
                alt="Owner and crew on a Murrieta job site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Owner-led crews on real projects in Murrieta, Temecula, and Menifee.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-neutral-200/70 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-5 text-sm font-semibold text-neutral-700">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <a className="link-underline" href={siteConfig.googleReviewsUrl}>
              {siteConfig.googleRating}★ — Read Our {siteConfig.googleReviewCount} Google Reviews →
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Featured Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Recent Builds in Murrieta, Temecula & Menifee
            </h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Real projects. Real neighbors. See what we&apos;ve done down the street.
            </p>
          </div>
          <ProjectGrid limit={3} />
          <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-brand-700">
            See More Projects →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Why Murrieta Homeowners Call Us Back
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-neutral-700">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Local Trust Signals</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Licensed, bonded, and insured. Written workmanship warranty. 500+ local projects
              since {siteConfig.sinceYear}.
            </p>
            <div className="mt-6 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                Licensed, Bonded & Insured — verified with CSLB
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                4.9★ Google Rating ({siteConfig.googleReviewCount} reviews)
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                Written workmanship warranty on all labor
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Here&apos;s How It Works</h2>
          </div>
          <ProcessSteps />
          <Button asChild size="lg">
            <Link href="/contact">Schedule Your Free Walkthrough</Link>
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">What We Build</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              One contractor. Every trade. From cabinets to concrete.
            </p>
          </div>
          <ServiceCards category="residential" limit={4} />
          <Link href="/services" className="inline-flex items-center text-sm font-semibold text-brand-700">
            View All Services →
          </Link>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">From Our Neighbors</h2>
          </div>
          <TestimonialStrip items={featuredTestimonials} />
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Questions? We Get These a Lot.
            </h2>
          </div>
          <FAQ items={homeFaqs} />
          <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-brand-700">
            See All FAQs →
          </Link>
        </div>
      </section>

      <CTASection
        headline="Not Sure Where to Start?"
        subheadline="That's fine. Most people aren't. Tell us what you're thinking and we'll help you figure out the next step — no pressure, no obligation."
        primaryLabel="Get Your Free Estimate"
        primaryHref="/contact"
        secondaryLabel={`Call ${siteConfig.phone}`}
        secondaryHref={siteConfig.phoneHref}
        tertiaryLabel="Just have a quick question? →"
        tertiaryHref="/contact"
        secondaryText="Or call (951) 555-0123 — we answer."
      />
    </>
  );
}
