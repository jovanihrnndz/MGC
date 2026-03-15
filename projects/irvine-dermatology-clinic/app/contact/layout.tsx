import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Schedule an Appointment",
  description: "Contact Gary Lee MD Dermatology in Irvine, CA. Schedule an appointment, ask questions, or request information. Call (949) 555-1234 or use our online contact form.",
  keywords: ["contact dermatologist Irvine", "schedule dermatology appointment", "dermatologist phone number", "Gary Lee MD contact"],
  openGraph: {
    title: "Contact Us - Schedule an Appointment",
    description: "Contact Gary Lee MD Dermatology in Irvine, CA. Schedule an appointment or ask questions. Call (949) 555-1234.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
