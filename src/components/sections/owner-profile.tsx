import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function OwnerProfile() {
  return (
    <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
      <div className="relative h-64 w-full overflow-hidden rounded-3xl">
        <Image
          src="/images/owner-headshot.jpg"
          alt={`${siteConfig.ownerName} on a Murrieta job site`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Meet {siteConfig.ownerName}</h3>
        <p className="text-sm text-neutral-600 md:text-base">{siteConfig.ownerTitle}</p>
        <p className="text-sm text-neutral-700 md:text-base">{siteConfig.ownerBio}</p>
        <p className="text-sm text-neutral-700 md:text-base">
          When he&apos;s not on a job site, you&apos;ll find him {siteConfig.ownerDetail}.
        </p>
      </div>
    </div>
  );
}
