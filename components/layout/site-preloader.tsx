"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSiteLanguage } from "@/components/providers/site-language";

export function SitePreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const { copy } = useSiteLanguage();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[120] overflow-hidden bg-[#030816]"
          aria-label={copy.preloader.aria}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,118,255,0.24),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />
          <div className="absolute inset-0 bg-grid-brand opacity-[0.08]" />

          <div className="relative flex h-full items-center justify-center px-6">
            <div className="relative flex flex-col items-center text-center">
              <motion.div
                className="absolute h-44 w-44 rounded-full bg-brand-500/20 blur-3xl"
                animate={{ scale: [0.82, 1.06, 0.9], opacity: [0.4, 0.82, 0.45] }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute h-40 w-40 rounded-[42px] border border-white/10"
                animate={{ rotate: [0, 8, 0], scale: [0.95, 1.02, 0.96] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute h-56 w-56 rounded-[56px] border border-brand-400/10"
                animate={{ rotate: [0, -7, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                initial={{ scale: 0.72, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-28 w-28 items-center justify-center rounded-[32px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(14,118,255,0.22)] backdrop-blur"
              >
                <motion.div
                  className="absolute inset-2 rounded-[24px] bg-gradient-to-br from-brand-500/15 to-accent-500/10"
                  animate={{ opacity: [0.35, 0.8, 0.45] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                  animate={{ y: [0, -5, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-20 w-20"
                >
                  <Image
                    src="/brand/lulabtech-mark.png"
                    alt="LulabTech"
                    fill
                    priority
                    sizes="80px"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute left-[68%] top-[22%] h-4 w-4 rounded-full bg-accent-400 shadow-[0_0_30px_rgba(16,185,129,0.8)]"
                animate={{ scale: [0.85, 1.4, 0.95], opacity: [0.7, 1, 0.82] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                  {copy.preloader.title}
                </p>
                <p className="mt-3 max-w-md text-lg font-semibold text-white sm:text-xl">
                  {copy.preloader.subtitle}
                </p>
              </motion.div>

              <div className="mt-8 flex items-center gap-2">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    className="h-2.5 w-2.5 rounded-full bg-white/75"
                    animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.45] }}
                    transition={{ duration: 0.85, repeat: Infinity, delay: index * 0.12 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
