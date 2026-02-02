import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Murrieta General Construction",
  description:
    "Family-owned contractor serving Southwest Riverside County for 25+ years. Licensed, bonded, and insured. Learn our story."
};

const values = [
  "Integrity — We do what we say we'll do.",
  "Quality — We never cut corners.",
  "Communication — You'll always know what's happening.",
  "Respect — For your home, your time, and your budget."
];

const credentials = [
  "California Contractor's License #XXXXXX",
  "Fully Bonded and Insured",
  "OSHA Safety Certified",
  "Member, Murrieta Chamber of Commerce",
  "BBB Accredited Business"
];

export default function AboutPage() {
  return (
    <>
      <section className="section bg-hero-radial">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            General Contractor Murrieta
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Murrieta-Based. Family-Owned. Built on Trust.
          </h1>
          <p className="max-w-2xl text-base text-neutral-700 md:text-lg">
            For over 25 years, we've helped families and businesses across Southwest Riverside
            County build, remodel, and renovate with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold md:text-4xl">Our Story</h2>
            <p className="text-sm text-neutral-700 md:text-base">
              Murrieta General Construction started in 1999 with a simple belief: construction
              doesn't have to be stressful. Founder [Owner Name] grew up in the trades,
              learning from his father that quality work and honest communication go hand in
              hand.
            </p>
            <p className="text-sm text-neutral-700 md:text-base">
              Today, we're still a family-owned company — and we still treat every project
              like it's our own home. We live and work in this community, and our reputation
              is everything to us.
            </p>
            <p className="text-sm text-neutral-700 md:text-base">
              When you work with us, you're not getting a faceless contractor. You're getting
              neighbors who take pride in building something that lasts.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold">Licensed. Bonded. Insured.</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold md:text-4xl">What We Stand For</h2>
            <ul className="space-y-3 text-sm text-neutral-700 md:text-base">
              {values.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold">Meet the Team</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Our crew includes licensed journeymen, certified electricians and plumbers, and
              experienced project managers — all committed to doing the job right.
            </p>
            <div className="mt-4 text-sm text-neutral-700">
              <p>Project managers with 10+ years of local build experience.</p>
              <p>Dedicated crews for remodels, additions, and custom builds.</p>
              <p>Trusted trade partners aligned with our quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's Build Something Together"
        subheadline="Ready to talk about your project? We'd love to hear from you."
        primaryLabel={`Call Us: ${siteConfig.phone}`}
        primaryHref={siteConfig.phoneHref}
      />
    </>
  );
}
