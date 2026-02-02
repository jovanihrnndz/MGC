"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileCallBar() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="fixed bottom-4 left-1/2 z-40 flex min-h-12 w-[90%] -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-3 text-sm font-semibold text-neutral-950 shadow-card md:hidden"
      aria-label="Call now"
    >
      <Phone className="h-4 w-4" />
      Call {siteConfig.phone}
    </a>
  );
}
