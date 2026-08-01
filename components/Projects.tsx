import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import CaseBody from "./CaseBody";
import { featured, compact } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" data-screen-label="Projects" className="relative overflow-hidden bg-ink px-6 py-[110px] md:px-14">
      <div
        className="dots pointer-events-none absolute inset-0"
        style={{ ["--dot" as string]: "rgba(246,221,224,.14)", ["--dot-r" as string]: "10px", ["--dot-s" as string]: "52px" }}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="inline-flex rounded-full bg-pink px-3.5 py-1.5 font-label text-[9.5px] font-bold uppercase tracking-[.2em] text-rose-deep">
                Projects
              </div>
              <h2 className="mt-5 font-display text-[clamp(38px,6vw,60px)] font-bold leading-[.94] tracking-[-.05em] text-cream">
                Things I built<br />and <span className="font-serif text-[62px] font-normal italic text-pink">shipped</span>
              </h2>
            </div>
            <span className="font-label text-[10.5px] uppercase tracking-[.18em] text-cream/45">
              06 selected · expand for the full case
            </span>
          </div>
        </Reveal>

        <div className="mt-[52px] flex flex-col gap-[22px]">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p}>
                <CaseBody project={p} />
              </ProjectCard>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <div className="rounded-[2.2rem] border border-cream/15 bg-cream/[.07] p-2">
              <div className="inner-hi rounded-[calc(2.2rem-8px)] bg-sand px-[26px] py-2">
                {compact.map((c, i) => (
                  <div
                    key={c.num}
                    className={"grid grid-cols-[44px_1fr_auto] items-center gap-[22px] py-5 sm:grid-cols-[44px_1fr_auto_auto] " + (i < compact.length - 1 ? "border-b border-dotted border-cocoa/25" : "")}
                  >
                    <span className="font-serif text-[30px] italic text-rose">{c.num}</span>
                    <div>
                      <div className="font-display text-[clamp(19px,2.4vw,26px)] font-bold tracking-[-.035em] text-ink">{c.title}</div>
                      <div className="mt-[5px] font-label text-[11.5px] text-cocoa/55">{c.sub}</div>
                    </div>
                    <span className="hidden font-label text-[10.5px] uppercase tracking-[.14em] text-cocoa/40 sm:block">{c.year}</span>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={c.title}
                      className={"flex h-[38px] w-[38px] items-center justify-center rounded-full font-label text-[14px] font-light transition-transform duration-500 ease-soft hover:scale-110 " + c.chip}
                    >
                      ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
