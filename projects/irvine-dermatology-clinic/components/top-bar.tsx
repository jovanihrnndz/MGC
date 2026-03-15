import { Phone, MapPin } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="flex flex-col items-center justify-between gap-2 text-sm sm:flex-row">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+19495551234" 
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Phone className="h-4 w-4" />
              <span>(949) 555-1234</span>
            </a>
            <div className="hidden items-center gap-2 sm:flex">
              <MapPin className="h-4 w-4" />
              <span>Irvine, California</span>
            </div>
          </div>
          <p className="text-sm opacity-90">Now accepting new patients</p>
        </div>
      </div>
    </div>
  )
}
