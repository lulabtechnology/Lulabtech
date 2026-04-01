"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SitePreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[120] overflow-hidden bg-[#020817]"
          aria-label="Cargando sitio"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,118,255,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_28%)]" />
          <div className="absolute inset-0 bg-grid-brand opacity-[0.09]" />

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute h-28 w-28 rounded-[34px] bg-brand-500/30 blur-2xl"
                animate={{ scale: [0.92, 1.12, 0.98], opacity: [0.5, 0.9, 0.55] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />

              <motion.div
                className="absolute h-36 w-36 rounded-[42px] border border-white/10"
                animate={{ rotate: [0, 7, 0], scale: [0.96, 1.02, 0.98] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-24 w-24 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(14,118,255,0.22)]"
              >
                <Image
                  src="/brand/lulabtech-mark.png"
                  alt="LulabTech"
                  fill
                  priority
                  sizes="96px"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute left-[72%] top-[26%] h-4 w-4 rounded-full bg-accent-400 shadow-[0_0_26px_rgba(16,185,129,0.75)]"
                animate={{ scale: [0.9, 1.35, 1], opacity: [0.75, 1, 0.85] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="mt-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
                LulabTech
              </p>
              <p className="mt-3 max-w-md text-lg font-semibold text-white sm:text-xl">
                Diseño premium, estructura clara y ejecución seria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.2 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.28, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-[3px] w-48 origin-left overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400"
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "0%", "8%"] }}
                transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
