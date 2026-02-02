import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site";

export function CredentialsBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={siteConfig.licenseUrl} className="inline-flex items-center">
        <Badge variant="accent">{siteConfig.license}</Badge>
      </a>
      <a href={siteConfig.bbbUrl} className="inline-flex items-center">
        <Badge variant="dark">BBB Accredited — A+ Rating</Badge>
      </a>
      <a href={siteConfig.googleReviewsUrl} className="inline-flex items-center">
        <Badge variant="default">
          {siteConfig.googleRating}★ on Google ({siteConfig.googleReviewCount} reviews)
        </Badge>
      </a>
      <Badge variant="default">Licensed, Bonded & Insured</Badge>
    </div>
  );
}
