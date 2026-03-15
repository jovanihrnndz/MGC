import Link from "next/link"

const footerLinks = {
  services: [
    { label: "Medical Dermatology", href: "/services" },
    { label: "Cosmetic Dermatology", href: "/services" },
    { label: "Skin Cancer Treatment", href: "/services" },
    { label: "All Services", href: "/services" },
  ],
  patients: [
    { label: "New Patient Forms", href: "/patient-info" },
    { label: "Insurance", href: "/patient-info" },
    { label: "Patient Portal", href: "/patient-info" },
    { label: "FAQs", href: "/patient-info" },
  ],
  about: [
    { label: "Meet Dr. Lee", href: "/about" },
    { label: "Our Practice", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">GL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight text-foreground">Gary Lee MD</span>
                <span className="text-sm leading-tight text-muted-foreground">Dermatology</span>
              </div>
            </Link>
            <p className="mb-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Board-certified dermatology practice providing comprehensive skin care 
              services in Irvine, California. Specializing in medical dermatology, cosmetic dermatology, and skin cancer treatment.
            </p>
            <p className="text-sm text-muted-foreground">
              16300 Sand Canyon Ave, Suite 610<br />
              Irvine, CA 92618
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">For Patients</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.patients.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">About</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gary Lee MD Dermatology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
