import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    category: "Skin Care",
    title: "The Ultimate Guide to Sunscreen: SPF, Application, and Reapplication",
    excerpt: "Learn how to properly protect your skin from harmful UV rays with expert advice on choosing and using sunscreen.",
  },
  {
    category: "Conditions",
    title: "Understanding Acne: Causes, Types, and Treatment Options",
    excerpt: "A comprehensive overview of acne, from hormonal causes to the latest treatment breakthroughs.",
  },
  {
    category: "Prevention",
    title: "Skin Cancer Warning Signs: The ABCDEs of Melanoma Detection",
    excerpt: "Know what to look for during self-examinations to catch skin cancer early when it is most treatable.",
  },
]

export function PatientEducation() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Patient Education
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              Learn about your skin health
            </h2>
          </div>
          <Button variant="outline" className="gap-2">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group cursor-pointer">
              <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-muted" />
              <p className="mb-2 text-sm font-medium text-primary">{article.category}</p>
              <h3 className="mb-2 text-balance text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {article.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
