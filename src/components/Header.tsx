"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/90 backdrop-blur">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-700 text-white font-semibold">
            MGC
          </div>
          <div className="hidden text-sm font-semibold uppercase tracking-wide text-neutral-800 md:block">
            Murrieta General Construction
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-neutral-700 transition hover:text-brand-700",
                pathname === link.href && "text-brand-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            Call Now: {siteConfig.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Get Estimate</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-neutral-200 bg-white p-2 text-brand-700"
            aria-label="Call now"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="rounded-full border border-neutral-200 bg-white p-2"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-base font-semibold text-neutral-700",
                      pathname === link.href && "text-brand-700"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild>
                  <Link href="/contact">Get Your Free Estimate</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
