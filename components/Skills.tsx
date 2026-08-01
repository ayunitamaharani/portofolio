"use client";
import { useEffect, useRef } from "react";
import Tilt from "./Tilt";
import Reveal from "./Reveal";
import { skillCards } from "@/data/skills";

/**
 * The four cards start stacked in 3D and deal out into a row as the section
 * enters the viewport. Positions are measured from layout, so the effect
 * follows the responsive grid instead of hard-coded offsets.
 */
export default function Skills() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const n = cards.length;
    const mid = (n - 1) / 2;
    let raf = 0;
    let last = -1;

    const tick = () => {
      raf = 0;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (window.innerWidth < 900 || reduced) {
        cards.forEach((c) => { c.style.transform = "none"; c.style.opacity = "1"; });
        return;
      }
      const r = el.getBoundingClientRect();
      const start = window.innerHeight * 1.18;
      const end = window.innerHeight * -0.08;
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      if (Math.abs(p - last) < 0.002) return;
      last = p;

      const e = 1 - Math.pow(1 - p, 2.4);
      const inv = 1 - e;
      const wc = el.clientWidth / 2;

      cards.forEach((c, i) => {
        const cc = c.offsetLeft + c.offsetWidth / 2;
        const dx = (wc - cc) * inv;
        const dy = (i - mid) * 14 * inv;
        const dz = -Math.abs(i - mid) * 90 * inv;
        const ry = (i - mid) * 11 * inv;
        c.style.transform =
          "translate3d(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px," + dz.toFixed(1) + "px) rotateY(" + ry.toFixed(2) + "deg)";
        c.style.opacity = (0.55 + 0.45 * e).toFixed(3);
        c.style.zIndex = String(n - i);
      });
    };

    const schedule = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section id="skills" data-screen-label="Skills" className="bg-cream px-6 py-[110px] md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="inline-flex rounded-full bg-tan px-3.5 py-1.5 font-label text-[9.5px] font-bold uppercase tracking-[.2em] text-brown">
                Skills
              </div>
              <h2 className="mt-5 font-display text-[52px] font-bold tracking-[-.045em]">The toolkit</h2>
            </div>
            <span className="font-label text-[11px] font-medium uppercase tracking-[.18em] text-cocoa/45">
              Scroll to deal the deck
            </span>
          </div>
        </Reveal>

        <div
          ref={wrap}
          className="mt-11 grid gap-4 [perspective:1200px] [transform-style:preserve-3d] sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCards.map((c) => (
            <div key={c.kicker} className="will-change-transform">
              <Tilt className={"h-full rounded-[2rem] border p-[7px] " + c.outer}>
                <div className={"inner-hi h-full rounded-[calc(2rem-7px)] px-6 py-[26px] " + c.inner}>
                  <div className={"font-label text-[9.5px] uppercase tracking-[.16em] " + c.kickerTone}>{c.kicker}</div>
                  <div className={"mt-4 flex flex-col gap-[9px] text-[15px] font-medium " + c.itemTone}>
                    {c.items.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
