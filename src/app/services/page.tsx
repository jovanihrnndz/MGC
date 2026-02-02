import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/cta-section";
import { ServiceCards } from "@/components/sections/service-cards";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title:
    "Kitchen, Bathroom & Home Addition Services | Murrieta General Construction",
  description:
    "Full-service residential construction in Long Beach and South Bay. Kitchen and bathroom remodeling, room additions, custom homes. One contractor, every trade."
};

export default function ServicesPage() {
  const residentialServices = services.filter((service) => service.category === "residential");

  return (
    <>
      <ServiceJsonLd />
      <section className="section bg-hero-radial">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            General Contractor Long Beach
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Kitchen, Bathroom & Home Addition Experts
            <span className="sr-only"> General contractor Long Beach</span>
          </h1>
          <p className="max-w-2xl text-base text-neutral-700 md:text-lg">
            One contractor. Every trade. We handle plumbing, electrical, framing, and finishes —
            so you don&apos;t have to juggle five different guys.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              For Homeowners
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Residential Services</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Full-service construction for homeowners across Long Beach and nearby cities.
            </p>
          </div>
          <ServiceCards variant="full" category="residential" />
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Service Details</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Explore what&apos;s included in each service and how we manage every phase of your
              project.
            </p>
          </div>
          <div className="grid gap-6">
            {residentialServices.map((service) => (
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
                {service.testimonial ? (
                  <p className="mt-4 text-sm text-neutral-600">
                    “{service.testimonial.quote}” — {service.testimonial.name},
                    {" "}{service.testimonial.location}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">What Our Clients Say</h2>
          </div>
          <TestimonialStrip items={[testimonials[0], testimonials[2], testimonials[5]]} />
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Ready to Get Started? Request Your Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.phoneHref}>Still have questions? Call us</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-100">
        <div className="container space-y-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              We Also Serve Businesses
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Commercial Services</h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Office buildouts, retail prep, and restaurant construction. We work with landlords
              and tenants to deliver on-time, on-budget commercial spaces.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <ServiceCards variant="full" category="commercial" />
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us for Commercial Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">What to Expect on Cost</h2>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 shadow-soft">
            <p className="mb-3">
              Every project is different, but here&apos;s a general sense:
            </p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Bathroom remodels</span> typically range from
                $15,000–$40,000
              </li>
              <li>
                <span className="font-semibold">Kitchen remodels</span> typically range from
                $30,000–$80,000+
              </li>
              <li>
                <span className="font-semibold">Room additions</span> start around $50,000
                depending on size and scope
              </li>
            </ul>
            <p className="mt-4">
              We work with a range of budgets. During your free consultation, we&apos;ll discuss
              what&apos;s realistic for your goals and give you a detailed written estimate — no
              obligation.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure What You Need?"
        subheadline="Tell us what you&apos;re dealing with. We&apos;ll help you figure out the right approach — even if it turns out we&apos;re not the right fit."
        primaryLabel="Request a Free Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
