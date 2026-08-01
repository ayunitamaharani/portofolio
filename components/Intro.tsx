"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const SHOW_DURATION = 7000;

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShow(false); return; }
    const t = setTimeout(() => setShow(false), SHOW_DURATION);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="dots fixed inset-0 z-[200] flex items-center justify-center bg-ink pointer-events-none"
          style={{ ["--dot" as string]: "rgba(246,221,224,.16)", ["--dot-r" as string]: "11px", ["--dot-s" as string]: "54px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: EASE }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="font-label text-[10px] font-medium uppercase tracking-[.34em] text-pink/60"
              initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2.4, ease: EASE }}
            >
              Portfolio 2026
            </motion.div>
            <motion.div
              className="text-center font-display text-[clamp(38px,7vw,86px)] font-bold leading-[.95] tracking-[-.055em] text-cream"
              initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2.7, delay: 0.15, ease: EASE }}
            >
              Ayunita <span className="font-serif italic font-normal text-pink">Maharani</span>
            </motion.div>
            <motion.div
              className="h-[2px] w-[min(320px,60vw)] origin-left bg-pink"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.3, ease: EASE }}
            />
            <motion.div
              className="font-label text-[11.5px] uppercase tracking-[.2em] text-cream/55"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2.4, delay: 0.3, ease: EASE }}
            >
              Statistics · Spatial ML · Forecasting
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
