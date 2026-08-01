"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

/** Expand-in-place panel: pushes the rest of the page down rather than overlaying it. */
export default function Disclosure({
  labelOpen, labelClose, buttonClass, iconClass, children,
}: {
  labelOpen: string; labelClose: string;
  buttonClass: string; iconClass: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className={buttonClass}>
        <span>{open ? labelClose : labelOpen}</span>
        <motion.span
          className={iconClass}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.62, ease: [0.32, 0.72, 0, 1] }, opacity: { duration: 0.4 } }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
