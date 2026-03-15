"use client"

import { useState } from "react"
import { Metadata } from "next"
import Image from "next/image"
import { Search, ArrowRight } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categories = [
  { id: "all", label: "All Topics" },
  { id: "skin-care", label: "Skin Care" },
  { id: "conditions", label: "Conditions" },
  { id: "treatments", label: "Treatments" },
  { id: "prevention", label: "Prevention" },
  { id: "cosmetic", label: "Cosmetic" },
]

const articles = [
  {
    id: 1,
    category: "prevention",
    categoryLabel: "Prevention",
    title: "The Ultimate Guide to Sunscreen: SPF, Application, and Reapplication",
    excerpt: "Learn how to properly protect your skin from harmful UV rays with expert advice on choosing and using sunscreen effectively.",
    image: "/images/hero-clinic.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "conditions",
    categoryLabel: "Conditions",
    title: "Understanding Acne: Causes, Types, and Treatment Options",
    excerpt: "A comprehensive overview of acne, from hormonal causes to the latest treatment breakthroughs available today.",
    image: "/images/hero-clinic.jpg",
    readTime: "7 min read",
  },
  {
    id: 3,
    category: "prevention",
    categoryLabel: "Prevention",
    title: "Skin Cancer Warning Signs: The ABCDEs of Melanoma Detection",
    excerpt: "Know what to look for during self-examinations to catch skin cancer early when it is most treatable.",
    image: "/images/hero-clinic.jpg",
    readTime: "4 min read",
  },
  {
    id: 4,
    category: "skin-care",
    categoryLabel: "Skin Care",
    title: "Building Your Daily Skincare Routine: A Dermatologist's Guide",
    excerpt: "Dr. Lee shares his expert recommendations for creating an effective daily skincare routine for every skin type.",
    image: "/images/hero-clinic.jpg",
    readTime: "6 min read",
  },
  {
    id: 5,
    category: "conditions",
    categoryLabel: "Conditions",
    title: "Managing Eczema: Tips for Relief and Long-Term Care",
    excerpt: "Practical strategies for managing eczema symptoms and preventing flare-ups throughout the year.",
    image: "/images/hero-clinic.jpg",
    readTime: "5 min read",
  },
  {
    id: 6,
    category: "cosmetic",
    categoryLabel: "Cosmetic",
    title: "Botox vs. Fillers: Understanding the Difference",
    excerpt: "Learn about the key differences between neuromodulators and dermal fillers and which might be right for you.",
    image: "/images/hero-clinic.jpg",
    readTime: "4 min read",
  },
  {
    id: 7,
    category: "treatments",
    categoryLabel: "Treatments",
    title: "What to Expect During a Chemical Peel Treatment",
    excerpt: "A complete guide to chemical peels, including preparation, the procedure itself, and aftercare instructions.",
    image: "/images/hero-clinic.jpg",
    readTime: "6 min read",
  },
  {
    id: 8,
    category: "skin-care",
    categoryLabel: "Skin Care",
    title: "Anti-Aging Ingredients That Actually Work",
    excerpt: "Cut through the marketing hype and discover which anti-aging ingredients are backed by scientific evidence.",
    image: "/images/hero-clinic.jpg",
    readTime: "8 min read",
  },
  {
    id: 9,
    category: "conditions",
    categoryLabel: "Conditions",
    title: "Psoriasis: Modern Treatments and Management Strategies",
    excerpt: "Explore the latest advances in psoriasis treatment, from topicals to biologics and lifestyle modifications.",
    image: "/images/hero-clinic.jpg",
    readTime: "7 min read",
  },
]

export default function EducationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || article.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <PageHero
          badge="Patient Education"
          title="Learn about your skin health"
          description="Educational resources to help you understand skin conditions, treatments, and how to maintain healthy skin."
        />

        {/* Search and Filters */}
        <section className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-6">
              {/* Search Bar */}
              <div className="relative mx-auto w-full max-w-xl">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-4">
            {filteredArticles.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="group cursor-pointer">
                    <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary">{article.categoryLabel}</span>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="mb-2 text-balance text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <Button variant="ghost" className="gap-2 p-0 text-primary hover:bg-transparent hover:text-primary/80">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
