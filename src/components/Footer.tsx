import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-200">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500 text-neutral-950 font-semibold">
              MGC
            </div>
            <div className="text-base font-semibold">{siteConfig.name}</div>
          </div>
          <p className="text-sm text-neutral-300">
            Licensed, bonded, and insured general contractor serving Long Beach and nearby
            communities.
          </p>
          <div className="text-sm text-neutral-300">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.cityStateZip}</p>
            <p>
              <a className="link-underline" href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a className="link-underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a className="link-underline" href={siteConfig.googleReviewsUrl}>
                {siteConfig.googleRating}★ — Read Our {siteConfig.googleReviewCount} Google Reviews
              </a>
            </p>
          </div>
          <p className="text-sm text-neutral-400">
            <a className="link-underline" href={siteConfig.licenseUrl}>
              {siteConfig.license}
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">Navigate</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">Service Area</h3>
          <p className="text-sm text-neutral-300">
            {siteConfig.serviceArea.join(" · ")}
          </p>
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
