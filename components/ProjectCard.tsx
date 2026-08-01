"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import Magnetic from "./Magnetic";
import type { Project } from "@/data/projects";
import { PROJECT_TONES } from "./PROJECT_TONES";

export default function ProjectCard({ project, children }: { project: Project; children: ReactNode }) {
  const t = PROJECT_TONES[project.tone];
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-card border border-cream/15 bg-cream/[.07] p-2">
      <div className={"inner-hi overflow-hidden rounded-[calc(2.6rem-8px)] " + t.card}>
        <div className="grid lg:grid-cols-[1.1fr_.9fr]">
          <div className="px-8 pb-9 pt-10 md:px-[42px]">
            <div className="flex items-center gap-3">
              <span className={"font-serif text-[44px] italic leading-none " + t.num}>{project.num}</span>
              <span className={"rounded-full px-3 py-[5px] font-label text-[9.5px] font-semibold uppercase tracking-[.16em] " + t.chip}>
                {project.kicker}
              </span>
            </div>
            <h3 className={"mt-3.5 font-display text-[clamp(32px,4.6vw,46px)] font-bold leading-[1.02] tracking-[-.045em] " + t.title}>
              {project.title}
              {project.titleBreak && <><br />{project.titleBreak}</>}
            </h3>
            <p className={"mt-3.5 max-w-[480px] text-[15.5px] font-light leading-[1.7] text-pretty " + t.body}>{project.blurb}</p>

            <div className="mt-[22px] flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className={"rounded-full px-3.5 py-[7px] text-[11.5px] font-medium " + t.tag}>{tag}</span>
              ))}
            </div>

            <div className="mt-[26px] flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className={"inline-flex cursor-pointer items-center gap-3 rounded-full border-0 py-2 pl-[22px] pr-2 text-[13px] font-bold transition-transform duration-500 ease-soft hover:scale-[1.03] " + t.btn}
              >
                <span>{open ? "Close case" : "Read the full case"}</span>
                <motion.span
                  className={"flex h-[30px] w-[30px] items-center justify-center rounded-full font-label text-[13px] font-light " + t.icon}
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  ↓
                </motion.span>
              </button>

              {project.links.map((l) => (
                <Magnetic
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  className={"inline-flex items-center gap-3 rounded-full border py-2 pl-[22px] pr-2 text-[13px] font-bold " + t.ghost}
                >
                  {l.label}
                  <span className={"flex h-[30px] w-[30px] items-center justify-center rounded-full font-label text-[13px] font-light " + t.ghostIcon}>↗</span>
                </Magnetic>
              ))}
            </div>
          </div>

          <div
            className={"dots flex min-h-[240px] items-center justify-center p-7 " + t.mediaBg}
            style={{ ["--dot"]: t.mediaDot, ["--dot-r"]: "12px", ["--dot-s"]: "56px" } as React.CSSProperties}
          >
            {project.media?.kind === "image" && (
              <div className="w-full rounded-[1.6rem] bg-cream/[.12] p-[7px]">
                <Image
                  src={project.media.src}
                  alt={project.media.alt}
                  width={1200}
                  height={800}
                  className="block h-auto w-full rounded-[calc(1.6rem-7px)] shadow-[0_22px_40px_-20px_rgba(0,0,0,.6)]"
                />
              </div>
            )}
            {project.media?.kind === "placeholder" && (
              <div
                className={"flex aspect-[4/3] w-full items-center justify-center rounded-[1.6rem] border border-dashed p-5 text-center " + t.slotBorder}
                style={{ background: t.slotFill }}
              >
                <span className={"font-mono text-[11px] leading-[1.6] tracking-[.06em] " + t.slotText}>{project.media.text}</span>
              </div>
            )}
          </div>
        </div>

        {/* Full-width case study: expands in place and pushes the page down. */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="case"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ height: { duration: 0.62, ease: [0.32, 0.72, 0, 1] }, opacity: { duration: 0.4 } }}
              className="overflow-hidden"
            >
              <div className="px-8 md:px-[42px]">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
