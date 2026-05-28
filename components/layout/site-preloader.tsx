"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSiteLanguage } from "@/components/providers/site-language";

const PRELOADER_STORAGE_KEY = "lulabtech_preloader_seen";
const FIRST_LOAD_DELAY_MS = 850;
const REDUCED_MOTION_DELAY_MS = 250;

export function SitePreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const { copy } = useSiteLanguage();

  useEffect(() => {
    const alreadySeen = window.sessionStorage.getItem(PRELOADER_STORAGE_KEY) === "true";

    if (alreadySeen) {
      setIsVisible(false);
      return;
    }

    const timer = window.setTimeout(
      () => {
        window.sessionStorage.setItem(PRELOADER_STORAGE_KEY, "true");
        setIsVisible(false);
      },
      prefersReducedMotion ? REDUCED_MOTION_DELAY_MS : FIRST_LOAD_DELAY_MS
    );

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[120] overflow-hidden bg-[#030816]"
          aria-label={copy.preloader.aria}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,118,255,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-grid-brand opacity-[0.07]" />

          <div className="relative flex h-full items-center justify-center px-6">
            <div className="relative flex flex-col items-center text-center">
              <div className="absolute h-44 w-44 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="absolute h-40 w-40 rounded-[42px] border border-white/10" />
              <div className="absolute h-56 w-56 rounded-[56px] border border-brand-400/10" />

              <motion.div
                initial={prefersReducedMotion ? false : { scale: 0.86, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-28 w-28 items-center justify-center rounded-[32px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(14,118,255,0.22)] backdrop-blur"
              >
                <div className="absolute inset-2 rounded-[24px] bg-gradient-to-br from-brand-500/15 to-accent-500/10" />

                <div className="relative h-20 w-20">
                  <Image
                    src="/brand/lulabtech-mark.png"
                    alt="LulabTech"
                    fill
                    priority
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.32 }}
                className="mt-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                  {copy.preloader.title}
                </p>
                <p className="mt-3 max-w-md text-lg font-semibold text-white sm:text-xl">
                  {copy.preloader.subtitle}
                </p>
              </motion.div>

              <div className="mt-8 flex items-center gap-2" aria-hidden="true">
                {[0, 1, 2].map((index) => (
                  <span key={index} className="h-2.5 w-2.5 rounded-full bg-white/65" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
