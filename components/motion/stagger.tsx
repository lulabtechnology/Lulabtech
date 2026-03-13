"use client";

import { Children } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpContainer, fadeUpItem } from "@/components/motion/fade-up";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  once = true
}: StaggerProps) {
  const items = Children.toArray(children);
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{items}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={fadeUpContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {items.map((child, index) => (
        <motion.div key={index} variants={fadeUpItem}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
