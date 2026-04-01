"use client";

import { motion } from "framer-motion";
import { Layers3, Sparkles, Zap } from "lucide-react";

const chipAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 5.5,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export function FloatingElements() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-brand-400/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-0 top-8 h-52 w-52 rounded-full bg-accent-400/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-brand-200/30 blur-3xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[4%] top-[19%] hidden rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-soft backdrop-blur lg:flex lg:items-center lg:gap-2"
        animate={chipAnimation}
      >
        <Sparkles className="h-4 w-4 text-brand-600" />
        <span className="text-xs font-semibold text-ink-700">Diseño a medida</span>
      </motion.div>

      <motion.div
        className="absolute right-[6%] top-[24%] hidden rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-soft backdrop-blur xl:flex xl:items-center xl:gap-2"
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 6.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Layers3 className="h-4 w-4 text-accent-600" />
        <span className="text-xs font-semibold text-ink-700">Experiencia fluida</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] right-[18%] hidden rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-soft backdrop-blur lg:flex lg:items-center lg:gap-2"
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Zap className="h-4 w-4 text-brand-600" />
        <span className="text-xs font-semibold text-ink-700">Ejecución sólida</span>
      </motion.div>
    </>
  );
}
