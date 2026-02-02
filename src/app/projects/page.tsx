import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";
import { ProjectGrid } from "@/components/sections/project-grid";

export const metadata: Metadata = {
  title: "Our Work | Murrieta General Construction",
  description:
    "Browse completed kitchen remodels, bathroom renovations, and custom homes in Murrieta, Temecula, and Menifee."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section bg-hero-radial">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            General Contractor Murrieta
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">Our Work Speaks for Itself</h1>
          <p className="max-w-2xl text-base text-neutral-700 md:text-lg">
            Browse recent projects from kitchens to custom homes — all completed right here
            in the Murrieta and Temecula area.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <ProjectGrid showFilters />
        </div>
      </section>

      <CTASection
        headline="Your Project Could Be Next"
        subheadline="Let's discuss your vision and make it a reality."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
      />
    </>
  );
}
