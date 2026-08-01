"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/** Subtle pointer-follow tilt used on the stacked cards. */
export default function Tilt({
  children, className, max = 5,
}: { children: ReactNode; className?: string; max?: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 240, damping: 26 });
  const sy = useSpring(my, { stiffness: 240, damping: 26 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max * 0.8, -max * 0.8]);
  const lift = useTransform(sy, [-0.5, 0.5], [-5, -5]);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, y: lift, transformPerspective: 900, willChange: "transform" }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => { mx.set(0); my.set(0); }}
    >
      {children}
    </motion.div>
  );
}
