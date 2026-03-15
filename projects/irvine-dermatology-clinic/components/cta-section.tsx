import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to schedule your consultation?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-primary-foreground/90">
          Take the first step towards healthier skin. Book your appointment today and experience 
          personalized dermatological care from a board-certified specialist.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="gap-2">
            Book Online
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Phone className="h-4 w-4" />
            (949) 555-1234
          </Button>
        </div>
      </div>
    </section>
  )
}
