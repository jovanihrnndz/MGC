const steps = [
  {
    title: "Quick Phone Call",
    description:
      "Tell us about your project in 5 minutes. We'll let you know if we're the right fit."
  },
  {
    title: "Free On-Site Visit",
    description:
      "We walk your property, discuss your vision, and assess the scope."
  },
  {
    title: "Detailed Written Proposal",
    description:
      "You get a clear estimate with timeline, materials, and costs. No surprises."
  },
  {
    title: "Expert Construction",
    description:
      "Our licensed crew builds to code with quality materials. Same team, every day."
  },
  {
    title: "Final Walkthrough",
    description:
      "We review every detail together. You don't pay the final invoice until you're satisfied."
  }
];

export function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-5">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`relative rounded-3xl border p-6 ${
            index === 0
              ? "border-brand-200 bg-brand-50"
              : "border-neutral-200 bg-white"
          }`}
        >
          <div
            className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
              index === 0 ? "bg-brand-700 text-white" : "bg-accent-100 text-accent-700"
            }`}
          >
            {index}
          </div>
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
          {index < steps.length - 1 ? (
            <div className="absolute right-4 top-1/2 hidden h-[2px] w-8 -translate-y-1/2 bg-neutral-200 md:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
