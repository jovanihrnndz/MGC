"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadFormValues, leadSchema } from "@/lib/validation";
import { trackEvent } from "@/components/analytics/track";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const projectTypes = [
  "Kitchen",
  "Bathroom",
  "Addition",
  "Custom Home",
  "Repair/Other"
];

const referralSources = [
  "Google Search",
  "Yelp",
  "Referral",
  "Social Media",
  "Drive By",
  "Other"
];

const budgetRanges = [
  "Under $25K",
  "$25K–$50K",
  "$50K–$100K",
  "$100K+",
  "Not sure yet"
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      budgetRange: "",
      projectDescription: "",
      referralSource: "",
      honey: ""
    }
  });

  const onSubmit = async (values: LeadFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      trackEvent("form_submission", { form: "contact" });
      reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <label className="text-sm font-semibold">Name</label>
        <Input placeholder="Full name" {...register("name")} />
        {errors.name ? (
          <p className="text-xs text-red-600">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold">Phone</label>
        <Input placeholder="(951) 555-0123" {...register("phone")} />
        {errors.phone ? (
          <p className="text-xs text-red-600">{errors.phone.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold">Email</label>
        <Input type="email" placeholder="you@email.com" {...register("email")} />
        {errors.email ? (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold">Project Type</label>
        <Select {...register("projectType")}>
          <option value="">Select a project</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        {errors.projectType ? (
          <p className="text-xs text-red-600">{errors.projectType.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold">Budget Range</label>
        <Select {...register("budgetRange")}>
          <option value="">Optional</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold">Project Description</label>
        <Textarea
          placeholder="Tell us about your goals, timeline, and budget range."
          {...register("projectDescription")}
        />
        {errors.projectDescription ? (
          <p className="text-xs text-red-600">{errors.projectDescription.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold">How did you hear about us?</label>
        <Select {...register("referralSource")}>
          <option value="">Optional</option>
          {referralSources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </Select>
      </div>

      <div className="hidden">
        <label className="text-sm font-semibold">Leave this field empty</label>
        <Input autoComplete="off" tabIndex={-1} {...register("honey")} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send My Request"}
      </Button>

      {status === "success" ? (
        <p className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          Got it. You&apos;ll hear from [Owner Name] or our project manager within one business
          day — usually sooner. Keep an eye on your phone.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please call us at (951) 555-0123.
        </p>
      ) : null}
    </form>
  );
}
