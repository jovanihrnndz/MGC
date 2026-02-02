import Link from "next/link";
import {
  ArrowUpRight,
  Hammer,
  Paintbrush,
  Home,
  Building2,
  Wrench,
  Layout
} from "lucide-react";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = [Hammer, Paintbrush, Home, Building2, Layout, Wrench];

interface ServiceCardsProps {
  variant?: "summary" | "full";
  limit?: number;
  category?: "residential" | "commercial";
}

export function ServiceCards({
  variant = "summary",
  limit,
  category
}: ServiceCardsProps) {
  const filtered = category
    ? services.filter((service) => service.category === category)
    : services;
  const list = typeof limit === "number" ? filtered.slice(0, limit) : filtered;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((service, index) => {
        const Icon = iconMap[index % iconMap.length];
        return (
          <Card key={service.slug} className="group flex h-full flex-col">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <Badge className="mt-4 w-fit" variant={service.category === "commercial" ? "dark" : "accent"}>
                {service.category}
              </Badge>
              <CardTitle className="mt-4 text-xl">{service.name}</CardTitle>
              <p className="mt-2 text-sm text-neutral-600">
                {variant === "summary" ? service.shortDescription : service.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto">
              {variant === "full" ? (
                <ul className="mb-4 space-y-2 text-sm text-neutral-600">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {service.testimonial ? (
                <p className="mb-4 text-xs text-neutral-500">
                  “{service.testimonial.quote}” — {service.testimonial.name},{" "}
                  {service.testimonial.location}
                </p>
              ) : null}
              <Link
                href={`/services#${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
              >
                {variant === "summary" ? "Get a Quote" : `Get a Quote for ${service.name}`}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
