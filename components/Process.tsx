"use client";
import { motion } from "framer-motion";
import { stages } from "@/data/process";

/** Five stage cards that stack on top of each other as you scroll. */
export default function Process() {
  return (
    <section
      id="process"
      data-screen-label="Process"
      className="relative overflow-hidden bg-teal-deep px-6 pb-[150px] pt-24 md:px-16"
    >
      <div
        className="dots pointer-events-none absolute inset-0"
        style={{ ["--dot"]: "rgba(246,221,224,.07)", ["--dot-r"]: "9px", ["--dot-s"]: "54px" } as React.CSSProperties}
      />
      <div className="relative mx-auto max-w-[1000px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="inline-flex rounded-full border border-pink/30 bg-pink/[.16] px-3.5 py-1.5 font-label text-[10px] font-semibold uppercase tracking-[.2em] text-pink">
              Process
            </div>
            <h2 className="mt-5 font-display text-[clamp(36px,5.4vw,54px)] font-bold leading-[.98] tracking-[-.045em] text-cream">
              How a question becomes<br />a <span className="font-serif text-[clamp(38px,5.6vw,56px)] font-normal italic text-pink">decision</span>
            </h2>
          </div>
          <span className="font-label text-[10.5px] uppercase tracking-[.2em] text-cream/40">05 stages</span>
        </div>

        <div className="mt-[52px]">
          {stages.map((s, i) => (
            <div
              key={s.n}
              className="sticky mb-[30px] last:mb-0"
              style={{ top: "calc(88px + " + i * 18 + "px)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
                className="rounded-card border border-cream/20 bg-cream/[.14] p-[9px] shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] backdrop-blur-sm"
              >
                <div
                  className={"inner-hi grid gap-x-8 gap-y-5 rounded-card-in px-8 py-9 md:grid-cols-[130px_1fr] md:px-11 md:py-10 " + s.card + (s.dots ? " dots" : "")}
                  style={s.dots ? ({ ["--dot"]: "rgba(246,221,224,.13)", ["--dot-r"]: "11px", ["--dot-s"]: "54px" } as React.CSSProperties) : undefined}
                >
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                    <span className={"font-serif text-[clamp(46px,7vw,68px)] italic leading-[.85] " + s.numTone}>{s.n}</span>
                    <span className={"rounded-full px-3 py-1.5 font-label text-[9.5px] font-semibold uppercase tracking-[.18em] " + s.chip}>
                      {s.label}
                    </span>
                  </div>
                  <div>
                    <h3 className={"m-0 font-display text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.05] tracking-[-.04em] " + s.titleTone}>
                      {s.title}
                    </h3>
                    <p className={"mt-3 max-w-[560px] text-[16px] font-light leading-[1.7] text-pretty " + s.bodyTone}>{s.body}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
