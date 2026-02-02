import { siteConfig } from "@/lib/site";

export function OwnerJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.ownerName,
    jobTitle: siteConfig.ownerTitle,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name
    },
    description: siteConfig.ownerBio
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
