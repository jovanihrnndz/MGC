import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";

export function ReviewJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating,
      reviewCount: siteConfig.googleReviewCount.toString()
    },
    review: testimonials.slice(0, 3).map((testimonial) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: testimonial.name
      },
      reviewBody: testimonial.quote
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
