"use client";

import { ComponentProps } from "react";
import { trackEvent } from "@/components/analytics/track";

interface CallLinkProps extends ComponentProps<"a"> {
  label?: string;
}

export function CallLink({ label = "click_to_call", onClick, ...props }: CallLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent("click_to_call", { label });
        onClick?.(event);
      }}
    />
  );
}
