"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

/** Pill buttons that lean toward the cursor. */
export default function Magnetic({
  children, className, href, target,
}: { children: ReactNode; className?: string; href: string; target?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 22 });
  const sy = useSpring(y, { stiffness: 300, damping: 22 });

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={className}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.03 }}
      transition={{ ease: [0.32, 0.72, 0, 1] }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 10);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 7);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.a>
  );
}
