import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skin Health Education - Articles & Resources",
  description: "Learn about skin conditions, treatments, and prevention from Dr. Gary Lee. Educational articles on acne, eczema, skin cancer, anti-aging, and skincare routines.",
  keywords: ["skin health education", "dermatology articles", "skin care tips", "acne information", "skin cancer prevention", "eczema guide", "skincare routine"],
  openGraph: {
    title: "Skin Health Education - Articles & Resources",
    description: "Learn about skin conditions, treatments, and prevention from Dr. Gary Lee. Educational articles on acne, eczema, skin cancer, and more.",
  },
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
