"use client";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { stages, type Stage } from "@/data/process";

const GAP = 950;
const LOOP = 3200;
const LAYER_TONES = ["rgba(246,221,224,.5)", "rgba(143,184,216,.5)", "rgba(250,243,227,.5)"];

function StageCard({ p, i, n, stage }: { p: MotionValue<number>; i: number; n: number; stage: Stage }) {
  const z = useTransform(p, (v) => -i * GAP + v * GAP * (n - 1));
  const opacity = useTransform(z, (v) => (v > 260 ? 0 : Math.max(0, 1 - Math.min(1, Math.abs(v) / 780))));
  const filter = useTransform(z, (v) => "blur(" + Math.min(7, Math.abs(v) / 190).toFixed(2) + "px)");

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[min(720px,84vw)] rounded-card border border-cream/20 bg-cream/[.14] p-[9px]"
      style={{ x: "-50%", y: "-50%", z, opacity, filter, zIndex: 60 - i }}
    >
      <div
        className={"inner-hi rounded-card-in px-8 py-10 md:px-[46px] md:py-11 " + stage.card + (stage.dots ? " dots" : "")}
        style={stage.dots ? { ["--dot" as string]: "rgba(246,221,224,.13)", ["--dot-r" as string]: "11px", ["--dot-s" as string]: "54px" } : undefined}
      >
        <div className="flex items-center gap-3.5">
          <span className={"font-serif text-[46px] italic leading-none " + stage.numTone}>{stage.n}</span>
          <span className={"rounded-full px-3 py-1.5 font-label text-[9.5px] font-semibold uppercase tracking-[.18em] " + stage.chip}>
            {stage.label}
          </span>
        </div>
        <h3 className={"mt-4 font-display text-[clamp(28px,4vw,40px)] font-bold leading-[1.02] tracking-[-.045em] " + stage.titleTone}>
          {stage.title}
        </h3>
        <p className={"mt-3 text-[16px] font-light leading-[1.7] text-pretty " + stage.bodyTone}>{stage.body}</p>
      </div>
    </motion.div>
  );
}

function DotLayer({ p, i, count }: { p: MotionValue<number>; i: number; count: number }) {
  const cam = useTransform(p, (v) => v * GAP * (stages.length - 1));
  const z = useTransform(cam, (c) => {
    let v = (-i * (LOOP / count) + c * 1.2) % LOOP;
    if (v > 400) v -= LOOP;
    return v;
  });
  const opacity = useTransform(z, (v) => 0.04 + 0.14 * (1 - Math.min(1, Math.abs(v + 1200) / 1700)));

  return (
    <motion.div
      className="dots pointer-events-none absolute left-1/2 top-1/2 h-[1700px] w-[2400px]"
      style={{
        x: "-50%", y: "-50%", z, opacity,
        ["--dot" as string]: LAYER_TONES[i % LAYER_TONES.length],
        ["--dot-r" as string]: "10px",
        ["--dot-s" as string]: "120px",
      }}
    />
  );
}

export default function ProcessTunnel() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const barScale = scrollYProgress;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.round(v * (stages.length - 1)));
  });

  return (
    <section ref={ref} id="process" data-screen-label="Process tunnel" className="relative h-[460vh] bg-teal-deep">
      <div
        className="sticky top-0 h-screen overflow-hidden bg-teal-deep"
        style={{ perspective: "1150px", perspectiveOrigin: "50% 46%" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(46,111,106,.55)_0%,rgba(23,60,57,0)_62%)]" />

        {[0, 1, 2, 3, 4, 5].map((i) => (
          <DotLayer key={i} p={scrollYProgress} i={i} count={6} />
        ))}

        {stages.map((s, i) => (
          <StageCard key={s.n} p={scrollYProgress} i={i} n={stages.length} stage={s} />
        ))}

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-5 px-10 py-[30px]">
          <div className="inline-flex rounded-full border border-pink/30 bg-pink/[.16] px-3.5 py-1.5 font-label text-[10px] font-semibold uppercase tracking-[.2em] text-pink">
            Process · Scroll through
          </div>
          <div className="font-label text-[10.5px] font-medium uppercase tracking-[.2em] text-cream/40">05 stages</div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-10 pb-[34px]">
          <div className="flex gap-[11px]">
            {stages.map((s, i) => (
              <motion.span
                key={s.n}
                className="h-2 w-2 rounded-full"
                animate={{ backgroundColor: i === active ? "#F6DDE0" : "rgba(246,221,224,.22)", scale: i === active ? 1.55 : 1 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              />
            ))}
          </div>
          <div className="h-[2px] w-[min(420px,70vw)] overflow-hidden rounded-full bg-cream/15">
            <motion.div className="h-full origin-left bg-pink" style={{ scaleX: barScale }} />
          </div>
        </div>
      </div>
    </section>
  );
}
