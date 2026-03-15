import { Award, GraduationCap, Clock, Users } from "lucide-react"

const badges = [
  {
    icon: Award,
    title: "Board Certified",
    description: "American Board of Dermatology",
  },
  {
    icon: GraduationCap,
    title: "Stanford Trained",
    description: "Residency & Fellowship",
  },
  {
    icon: Clock,
    title: "15+ Years",
    description: "Clinical Experience",
  },
  {
    icon: Users,
    title: "10,000+",
    description: "Patients Treated",
  },
]

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
