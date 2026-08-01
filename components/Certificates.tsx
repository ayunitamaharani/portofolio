import Reveal from "./Reveal";
import Tilt from "./Tilt";
import Magnetic from "./Magnetic";
import { codingCamp, sideCerts } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" data-screen-label="Certificates" className="relative overflow-hidden bg-cream px-6 py-[110px] md:px-16">
      <div
        className="dots pointer-events-none absolute inset-0"
        style={{ ["--dot" as string]: "rgba(224,152,158,.16)", ["--dot-r" as string]: "9px", ["--dot-s" as string]: "50px" }}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="inline-flex rounded-full bg-mint px-3.5 py-1.5 font-label text-[10px] font-semibold uppercase tracking-[.2em] text-teal">
                Certificates
              </div>
              <h2 className="mt-5 font-display text-[52px] font-bold tracking-[-.045em]">
                Learning, <span className="font-serif text-[54px] font-normal italic text-teal">documented</span>
              </h2>
            </div>
            <span className="font-label text-[11px] font-medium uppercase tracking-[.18em] text-cocoa/45">04 programmes · 10 courses</span>
          </div>
        </Reveal>

        <div className="mt-[46px] grid items-start gap-[18px] lg:grid-cols-[1.32fr_1fr]">
          <Reveal>
            <div className="rounded-card border border-teal/20 bg-teal/10 p-[9px]">
              <div className="inner-hi overflow-hidden rounded-card-in bg-mint">
                <div
                  className="dots flex flex-wrap items-end justify-between gap-4 bg-teal px-7 py-6"
                  style={{ ["--dot" as string]: "rgba(246,221,224,.3)", ["--dot-r" as string]: "10px", ["--dot-s" as string]: "46px" }}
                >
                  <div>
                    <div className="font-label text-[9.5px] font-medium uppercase tracking-[.2em] text-cream/70">{codingCamp.org}</div>
                    <div className="mt-2 whitespace-pre-line font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.05] tracking-[-.04em] text-cream">
                      {codingCamp.title}
                    </div>
                  </div>
                  <a
                    href={codingCamp.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-none items-center gap-2.5 rounded-full bg-cream/90 py-[7px] pl-3.5 pr-[7px] font-label text-[10px] font-semibold uppercase tracking-[.14em] text-teal-dark transition-transform duration-500 ease-soft hover:scale-[1.04]"
                  >
                    Certificate
                    <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-teal-dark/10 font-label text-[12px] font-light">↗</span>
                  </a>
                </div>

                <div className="px-7 pb-7 pt-[26px]">
                  <p className="m-0 text-[14.5px] font-light leading-[1.65] text-teal-deep/80">{codingCamp.blurb}</p>
                  <Magnetic
                    href={codingCamp.allCerts}
                    target="_blank"
                    className="mt-[18px] inline-flex items-center gap-[11px] rounded-full bg-teal py-[7px] pl-[18px] pr-[7px]"
                  >
                    <span className="text-[12.5px] font-bold text-mint-light">All 10 certificates</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cream/20 font-label text-[12px] font-light text-mint-light">↗</span>
                  </Magnetic>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {codingCamp.courses.map((c) => (
                      <span key={c} className="rounded-full border border-ink/10 bg-cream px-[15px] py-2 text-[12.5px] font-medium text-ink">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3.5">
            {sideCerts.map((c, i) => (
              <Reveal key={c.title} delay={0.06 + i * 0.06}>
                <Tilt className={"rounded-[1.9rem] border p-[7px] " + c.outer}>
                  <div className={"inner-hi rounded-[calc(1.9rem-7px)] px-[26px] py-6 " + c.inner}>
                    <div className={"font-label text-[9.5px] uppercase tracking-[.18em] " + c.orgTone}>{c.org}</div>
                    <div className={"mt-[7px] font-display text-[24px] font-bold tracking-[-.035em] " + c.titleTone}>{c.title}</div>
                    <p className={"mt-2.5 text-[14px] font-light leading-[1.6] " + c.bodyTone}>{c.body}</p>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className={"mt-3.5 inline-flex items-center gap-2.5 rounded-full py-1.5 pl-4 pr-1.5 transition-transform duration-500 ease-soft hover:scale-[1.04] " + c.pill}
                    >
                      <span className={"text-[11.5px] font-bold " + c.pillText}>View certificate</span>
                      <span className={"flex h-6 w-6 items-center justify-center rounded-full font-label text-[11px] font-light " + c.pillIcon}>↗</span>
                    </a>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
