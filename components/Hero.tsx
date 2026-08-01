import Image from "next/image";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section id="top" data-screen-label="Hero">
      <div className="grid min-h-[calc(100dvh-128px)] items-stretch lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center px-6 py-14 md:px-16">
          <Reveal>
            <h1 className="m-0 font-display text-[clamp(52px,5.4vw,78px)] font-bold leading-[.9] tracking-[-.055em] text-balance">
              Curious<br />about <span className="text-teal">every</span><br />data point.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[440px] text-[16px] font-light leading-[1.7] text-cocoa/75 text-pretty">
              Statistics undergraduate at Universitas Diponegoro. Python, R and SQL — spatial machine learning,
              forecasting, and dashboards that make a decision obvious.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-[26px] flex flex-wrap items-center gap-4">
              <Magnetic
                href="#projects"
                className="flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 shadow-[0_20px_36px_-18px_rgba(43,26,18,.7),inset_0_1px_1px_rgba(255,255,255,.14)]"
              >
                <span className="text-[13.5px] font-bold text-cream">Selected work</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 font-label text-[13px] font-light text-cream">↗</span>
              </Magnetic>
              <a href="mailto:ayunitamaharanipq@gmail.com" className="border-b border-dotted border-cocoa/40 pb-0.5 font-label text-[11.5px] text-cocoa/55">
                ayunitamaharanipq@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-[34px] flex items-center gap-[22px] font-label text-[11px] font-medium uppercase tracking-[.14em] text-cocoa/50">
              <a href="https://www.linkedin.com/in/ayunitamaharani/" target="_blank" rel="noreferrer" className="text-cocoa/50">LinkedIn</a>
              <a href="https://github.com/ayunitamaharani" target="_blank" rel="noreferrer" className="text-cocoa/50">GitHub</a>
              <span className="flex items-center gap-2 text-cocoa/40">
                <span className="inline-block h-[7px] w-[7px] animate-cue rounded-full bg-teal" />
                Scroll
              </span>
            </div>
          </Reveal>
        </div>

        <div
          className="dots relative flex items-center justify-center bg-pink p-8"
          style={{ ["--dot" as string]: "#FFFDF7", ["--dot-r" as string]: "13px", ["--dot-s" as string]: "58px" }}
        >
          <Reveal delay={0.1} className="w-full max-w-[300px]">
            <Tilt className="rounded-card border border-ink/5 bg-ink/[.07] p-[9px]">
              <div className="overflow-hidden rounded-card-in bg-tan shadow-[0_26px_46px_-20px_rgba(43,26,18,.45),inset_0_1px_1px_rgba(255,255,255,.5)]">
                <Image src="/assets/ayunita-portrait.jpg" alt="Ayunita Maharani" width={600} height={750} priority className="block h-auto w-full" />
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
