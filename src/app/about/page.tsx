import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/cta-section";
import { CredentialsBadges } from "@/components/sections/credentials-badges";
import { OwnerProfile } from "@/components/sections/owner-profile";
import { OwnerJsonLd } from "@/components/seo/owner-jsonld";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Murrieta General Construction | Family-Owned Since 1999",
  description:
    "Family-owned contractor serving Los Angeles County for 25+ years. Meet [Owner Name] and learn why 500+ Long Beach homeowners trust us."
};

const credentials = [
  "California Contractor's License #XXXXXX",
  "Fully Bonded and Insured",
  "OSHA Safety Certified",
  "Member, Long Beach Chamber of Commerce",
  "BBB Accredited Business — A+ Rating",
  `${siteConfig.googleRating}★ on Google (${siteConfig.googleReviewCount} reviews)`
];

export default function AboutPage() {
  return (
    <>
      <OwnerJsonLd />
      <section className="section bg-hero-radial">
        <div className="container grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
              General Contractor Long Beach
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Long Beach-Based. Family-Owned. Here to Stay.
              <span className="sr-only"> General contractor Long Beach</span>
            </h1>
            <p className="max-w-2xl text-base text-neutral-700 md:text-lg">
              25 years, 500+ projects, and still working within 15 miles of where we started.
            </p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/owner-on-site.jpg"
              alt={`${siteConfig.ownerName} on a job site`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold md:text-4xl">How We Got Here</h2>
            <p className="text-sm text-neutral-700 md:text-base">
              In 1999, {siteConfig.ownerName} took on his first solo project — a kitchen
              remodel for a neighbor on Washington Avenue. No crew, no office, just a truck and
              a reputation to build.
            </p>
            <p className="text-sm text-neutral-700 md:text-base">
              Word spread. One neighbor told another. Twenty-five years and 500+ projects later,
              we&apos;re still doing the same thing: quality work for people who live down the
              street.
            </p>
            <p className="text-sm text-neutral-700 md:text-base">
              We&apos;re not a franchise. We&apos;re not a lead-generation company that farms out your
              project to whoever&apos;s available. We&apos;re a family-owned business, and
              {" "}{siteConfig.ownerName} still walks every job site.
            </p>
            <p className="text-sm text-neutral-700 md:text-base">
              When you call us, you&apos;re not getting a sales rep. You&apos;re getting a neighbor who
              takes pride in this community — and in building something that lasts.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Licensed. Bonded. Insured. Verified.</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <Link href={siteConfig.licenseUrl}>Verify Our License →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container space-y-6">
          <OwnerProfile />
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl">Our Promise to You</h2>
            <p className="text-sm text-neutral-700 md:text-base">
              We stand behind every project with a written workmanship warranty. If something&apos;s
              not right, we come back and fix it — no arguments, no runaround.
            </p>
            <p className="text-sm text-neutral-700 md:text-base">
              Your satisfaction isn&apos;t just a goal. It&apos;s how we&apos;ve stayed in business for 25
              years.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Credentials at a Glance</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Licensed, bonded, insured, and reviewed by neighbors across Long Beach and the
              South Bay.
            </p>
            <div className="mt-4">
              <CredentialsBadges />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's Talk About Your Project"
        subheadline="Call us directly or request a callback at a time that works for you."
        primaryLabel={`Call ${siteConfig.phone}`}
        primaryHref={siteConfig.phoneHref}
        secondaryLabel="Request a Callback"
        secondaryHref="/contact"
      />
    </>
  );
}
