"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialStrip() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-soft"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center gap-2 text-accent-500">
        {Array.from({ length: testimonials[index].rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold text-neutral-800">
        "{testimonials[index].quote}"
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
        <span className="font-semibold text-neutral-800">
          {testimonials[index].name}
        </span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>{testimonials[index].location}</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span>{testimonials[index].projectType}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {testimonials.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Show testimonial ${dotIndex + 1}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              dotIndex === index ? "bg-brand-700" : "bg-neutral-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
