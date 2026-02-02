"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "Kitchens", value: "kitchen" },
  { label: "Bathrooms", value: "bathroom" },
  { label: "Additions", value: "addition" },
  { label: "Custom Homes", value: "custom-home" },
  { label: "Commercial", value: "commercial" }
];

interface ProjectGridProps {
  showFilters?: boolean;
  limit?: number;
}

export function ProjectGrid({ showFilters = false, limit }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    const list =
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.type === activeFilter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [activeFilter, limit]);

  return (
    <div className="space-y-8">
      {showFilters ? (
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeFilter === filter.value
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-neutral-200 text-neutral-700 hover:border-brand-200"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <button className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white text-left shadow-soft">
                <div className="relative h-52 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="dark">{project.location}</Badge>
                    <Badge variant="accent">{project.type.replace(/-/g, " ")}</Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{project.description}</p>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent>
              <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="dark">{project.location}</Badge>
                    <Badge variant="accent">{project.type.replace(/-/g, " ")}</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-neutral-600">{project.description}</p>
                  <div className="grid gap-2 text-sm text-neutral-700">
                    <p>
                      <span className="font-semibold text-brand-700">Duration:</span>{" "}
                      {project.duration}
                    </p>
                    <p>
                      <span className="font-semibold text-brand-700">Budget Tier:</span>{" "}
                      {project.budgetTier}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
