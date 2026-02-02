import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/cta-section";
import { ServiceCards } from "@/components/sections/service-cards";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Construction Services | Murrieta General Construction",
  description:
    "Full-service construction in Murrieta and Temecula. Kitchen and bathroom remodeling, room additions, custom homes, and commercial tenant improvements."
};

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />
      <section className="section bg-hero-radial">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            General Contractor Murrieta
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Construction Services Built Around You
          </h1>
          <p className="max-w-2xl text-base text-neutral-700 md:text-lg">
            Whether you're remodeling a kitchen or building from the ground up, we bring the
            expertise and attention your project deserves.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Our Services</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Full-service construction for homes and businesses across Southwest Riverside
              County.
            </p>
          </div>
          <ServiceCards variant="full" />
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Service Details</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Explore what's included in each service and how we manage every phase of your
              project.
            </p>
          </div>
          <div className="grid gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Get a Quote for {service.name}</Link>
                  </Button>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{service.description}</p>
                <ul className="mt-4 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure What You Need?"
        subheadline="Tell us about your project and we'll help you figure out the best approach."
        primaryLabel="Request a Free Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
