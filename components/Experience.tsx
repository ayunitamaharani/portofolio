import Reveal from "./Reveal";
import Disclosure from "./Disclosure";
import { jobs } from "@/data/experience";
import { TONES } from "./tones";

export default function Experience() {
  return (
    <section id="experience" data-screen-label="Experience" className="relative overflow-hidden bg-sand px-6 py-[110px] md:px-16">
      <div
        className="dots pointer-events-none absolute inset-0"
        style={{ ["--dot" as string]: "rgba(58,35,24,.07)", ["--dot-r" as string]: "9px", ["--dot-s" as string]: "50px" }}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="inline-flex rounded-full bg-mint px-3.5 py-1.5 font-label text-[10px] font-semibold uppercase tracking-[.2em] text-teal">
                Experience
              </div>
              <h2 className="mt-5 font-display text-[52px] font-bold tracking-[-.045em]">
                Where I&rsquo;ve<br />been <span className="font-serif text-[54px] font-normal italic text-teal">working</span>
              </h2>
            </div>
            <span className="font-label text-[11px] font-medium uppercase tracking-[.18em] text-cocoa/45">
              2025 — 2026 · tap a card to expand
            </span>
          </div>
        </Reveal>

        <div className="mt-[52px] flex flex-col gap-5">
          {jobs.map((job, i) => {
            const t = TONES[job.tone];
            return (
              <Reveal key={job.id} delay={i * 0.08}>
                <div className={"rounded-card border p-[9px] " + t.outer}>
                  <div className={"inner-hi overflow-hidden rounded-card-in " + t.inner}>
                    <div className="grid md:grid-cols-[212px_1fr]">
                      <div
                        className={"dots flex flex-col justify-between gap-6 px-[26px] py-[30px] " + t.rail}
                        style={{ ["--dot" as string]: t.railDot, ["--dot-r" as string]: "9px", ["--dot-s" as string]: "42px" }}
                      >
                        <div className={"inline-flex self-start rounded-full px-3 py-1.5 font-label text-[10px] font-semibold uppercase tracking-[.12em] " + t.badge}>
                          {job.badge}
                        </div>
                        <div>
                          <div className={"font-display text-[42px] font-bold leading-none tracking-[-.04em] " + t.year}>{job.year}</div>
                          <div className={"mt-2 font-label text-[11.5px] font-medium uppercase leading-[1.5] tracking-[.1em] " + t.month}>{job.months}</div>
                        </div>
                      </div>

                      <div className="px-7 pb-[30px] pt-[34px] md:px-9">
                        <h3 className={"m-0 font-display text-[clamp(24px,3vw,31px)] font-bold leading-[1.12] tracking-[-.038em] " + t.title}>
                          {job.title}{" "}
                          {job.titleAccent && <span className={"font-serif text-[29px] font-normal italic " + t.accent}>{job.titleAccent}</span>}
                        </h3>
                        <div className={"mt-[7px] text-[13px] font-medium " + t.org}>{job.org}</div>
                        <ul className={"mt-4 list-disc pl-[18px] text-[15px] font-light leading-[1.7] " + t.body}>
                          {job.bullets.map((b) => <li key={b}>{b}</li>)}
                        </ul>

                        <Disclosure
                          labelOpen="Read the full story"
                          labelClose="Close"
                          buttonClass={"mt-[22px] inline-flex cursor-pointer items-center gap-[11px] rounded-full border-0 py-[7px] pl-5 pr-[7px] text-[12.5px] font-bold transition-transform duration-500 ease-soft hover:scale-[1.03] " + t.btn + " " + t.btnText}
                          iconClass={"flex h-7 w-7 items-center justify-center rounded-full font-label text-[12px] font-light " + t.icon}
                        >
                          <div className={"mt-[26px] border-t border-dotted pt-[26px] " + t.rule}>
                            <div className="grid gap-8 md:grid-cols-2">
                              <div>
                                {job.detail.left.map((b) => (
                                  <div key={b.heading} className="mt-[22px] first:mt-0">
                                    <div className={"font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>{b.heading}</div>
                                    {b.body && <p className={"mt-2.5 text-[14.5px] font-light leading-[1.7] text-pretty " + t.body}>{b.body}</p>}
                                    {b.list && (
                                      <ul className={"mt-2.5 list-disc pl-[18px] text-[14.5px] font-light leading-[1.7] " + t.body}>
                                        {b.list.map((x) => <li key={x}>{x}</li>)}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                              <div>
                                <div className={"font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>{job.detail.rightHeading}</div>
                                <div className="mt-3 grid grid-cols-2 gap-2.5">
                                  {job.detail.stats.map((s) => (
                                    <div key={s.label} className={"rounded-[1.1rem] px-[18px] py-4 " + t.stat}>
                                      <div className={"font-display text-[26px] font-bold tracking-[-.04em] " + t.statNum}>{s.value}</div>
                                      <div className={"mt-[3px] font-label text-[9px] uppercase tracking-[.14em] " + t.statLabel}>{s.label}</div>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-4 flex flex-wrap gap-[7px]">
                                  {job.detail.todo.map((x) => (
                                    <span key={x} className={"rounded-full border border-dashed px-3 py-[5px] font-label text-[9.5px] font-medium uppercase tracking-[.1em] " + t.todo}>{x}</span>
                                  ))}
                                </div>
                                {job.detail.tags && (
                                  <>
                                    <div className={"mt-[22px] font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>Tools</div>
                                    <div className="mt-2.5 flex flex-wrap gap-[7px]">
                                      {job.detail.tags.map((x) => (
                                        <span key={x} className={"rounded-full px-3 py-1.5 text-[11.5px] font-medium " + t.tag}>{x}</span>
                                      ))}
                                    </div>
                                  </>
                                )}
                                {job.detail.link && (
                                  <>
                                    <div className={"mt-[22px] font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>Capstone</div>
                                    <a href={job.detail.link.href} className={"mt-2.5 inline-flex items-center gap-2.5 rounded-full border py-[7px] pl-[18px] pr-[7px] " + t.outer}>
                                      <span className={"text-[12px] font-bold " + t.accent}>{job.detail.link.label}</span>
                                      <span className={"flex h-[26px] w-[26px] items-center justify-center rounded-full font-label text-[12px] font-light " + t.stat + " " + t.accent}>↓</span>
                                    </a>
                                  </>
                                )}
                                {job.detail.tail && (
                                  <>
                                    <div className={"mt-[22px] font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>{job.detail.tail.heading}</div>
                                    <p className={"mt-2.5 text-[14.5px] font-light leading-[1.7] text-pretty " + t.body}>{job.detail.tail.body}</p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </Disclosure>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
