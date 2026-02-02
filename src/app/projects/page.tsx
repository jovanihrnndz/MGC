import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { ProjectGrid } from "@/components/sections/project-grid";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work | Kitchen Remodels, Additions & Custom Homes in Murrieta",
  description:
    "Browse completed projects in Murrieta, Temecula, and Menifee. Kitchen remodels, bathroom renovations, room additions, and custom homes."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section bg-hero-radial">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            General Contractor Murrieta
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Recent Builds in Murrieta, Temecula & Menifee
            <span className="sr-only"> General contractor Murrieta</span>
          </h1>
          <p className="max-w-2xl text-base text-neutral-700 md:text-lg">
            Real projects for real neighbors. Browse by type or location.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <ProjectGrid showFilters />
        </div>
      </section>

      <CTASection
        headline="Want Results Like This? Let's Talk."
        subheadline="Tell us about your project and we'll show you what's possible for your home."
        primaryLabel="Start My Project"
        primaryHref="/contact"
        secondaryLabel={`Call ${siteConfig.phone}`}
        secondaryHref={siteConfig.phoneHref}
      />
    </>
  );
}
