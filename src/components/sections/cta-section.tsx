import Link from "next/link";
import { CallLink } from "@/components/analytics/call-link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  headline: string;
  subheadline: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
  secondaryText?: string;
}

export function CTASection({
  headline,
  subheadline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  tertiaryLabel,
  tertiaryHref,
  secondaryText
}: CTASectionProps) {
  const isPhoneLink = primaryHref.startsWith("tel:");
  return (
    <section className="section">
      <div className="container">
        <div className="gradient-panel relative overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="relative grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">{headline}</h2>
              <p className="mt-3 text-sm text-white/80 md:text-base">{subheadline}</p>
              {secondaryText ? (
                <p className="mt-4 text-sm text-white/70">{secondaryText}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="default">
                {isPhoneLink ? (
                  <CallLink href={primaryHref}>{primaryLabel}</CallLink>
                ) : (
                  <Link href={primaryHref}>{primaryLabel}</Link>
                )}
              </Button>
              {secondaryLabel && secondaryHref ? (
                <Button asChild size="lg" variant="outline">
                  {secondaryHref.startsWith("tel:") ? (
                    <CallLink href={secondaryHref}>{secondaryLabel}</CallLink>
                  ) : (
                    <Link href={secondaryHref}>{secondaryLabel}</Link>
                  )}
                </Button>
              ) : null}
            </div>
            {tertiaryLabel && tertiaryHref ? (
              <div className="mt-4">
                <Link className="text-sm font-semibold text-white underline" href={tertiaryHref}>
                  {tertiaryLabel}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
