"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/tracking";

export function PageViewTracker() {
  const pathname = usePathname();
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    trackPageView({ source: "next_app_router" });
  }, [pathname]);

  return null;
}
