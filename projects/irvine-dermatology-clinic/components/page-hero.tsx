interface PageHeroProps {
  badge?: string
  title: string
  description: string
}

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {badge}
            </div>
          )}
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
