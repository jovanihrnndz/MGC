import type { Metadata } from "next";
import { CallLink } from "@/components/analytics/call-link";
import { ContactForm } from "@/components/sections/contact-form";
import { FAQ } from "@/components/sections/faq";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate | Murrieta General Construction",
  description:
    "Get a free estimate from Long Beach's trusted contractor. Call (562) 786-0682 or request a quote online. Same-day response."
};

export default function ContactPage() {
  return (
    <>
      <FaqJsonLd />
      <section className="section bg-hero-radial">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            General Contractor Long Beach
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Let&apos;s Talk About Your Project
            <span className="sr-only"> General contractor Long Beach</span>
          </h1>
          <p className="max-w-2xl text-base text-neutral-700 md:text-lg">
            Whether you&apos;re ready to start or just exploring options, we&apos;re here to help.
            No sales pitch. No pressure. Just a conversation about what you&apos;re trying to build.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Call Us</h2>
              <CallLink className="mt-2 block text-lg font-semibold text-brand-700" href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </CallLink>
              <p className="mt-2 text-sm text-neutral-600">{siteConfig.hours.weekdays}</p>
              <p className="text-sm text-neutral-600">{siteConfig.hours.saturday}</p>
              <p className="mt-3 text-sm text-neutral-600">
                We answer our phones. If we miss you, we&apos;ll call back the same day.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Email Us</h2>
              <a className="mt-2 block text-sm text-brand-700" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Visit Us</h2>
              <p className="mt-2 text-sm text-neutral-600">{siteConfig.address}</p>
              <p className="text-sm text-neutral-600">{siteConfig.cityStateZip}</p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Service Area</h2>
              <p className="mt-2 text-sm text-neutral-600">
                {siteConfig.serviceArea.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container grid gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Questions Before You Reach Out?
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Find Us in Long Beach</h2>
          <div className="overflow-hidden rounded-3xl border border-neutral-200">
            <iframe
              title="Long Beach service area map"
              src="https://www.google.com/maps?q=Long%20Beach%2C%20CA%2090807&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
