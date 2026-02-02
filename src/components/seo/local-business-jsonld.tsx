import { siteConfig } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Long Beach",
      addressRegion: "CA",
      postalCode: "90807",
      addressCountry: "US"
    },
    areaServed: siteConfig.serviceArea,
    priceRange: "$$$",
    image: `${siteConfig.url}/projects/kitchen-farmhouse.jpg`,
    foundingDate: siteConfig.sinceYear.toString(),
    sameAs: [siteConfig.googleReviewsUrl, siteConfig.bbbUrl]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
