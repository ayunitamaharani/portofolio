import Reveal from "./Reveal";
import Tilt from "./Tilt";

const cards = [
  { kicker: "Studying",    title: "Statistics\nUniversitas Diponegoro", outer: "bg-ink/5 border-ink/10",   inner: "bg-sand",  kickerTone: "text-cocoa/45", titleTone: "text-ink" },
  { kicker: "Focus",       title: "Spatial ML &\nforecasting",           outer: "bg-teal/10 border-teal/20", inner: "bg-teal",  kickerTone: "text-mint-light/65", titleTone: "text-mint-light" },
  { kicker: "Looking for", title: "Data analyst /\nscience internship",  outer: "bg-ink/5 border-ink/10",   inner: "bg-pink",  kickerTone: "text-rose-deep/80", titleTone: "text-maroon" },
];

export default function About() {
  return (
    <section id="about" data-screen-label="About" className="bg-cream px-6 py-[120px] md:px-16">
      <div className="mx-auto grid max-w-[1240px] items-start gap-16 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-pink px-3.5 py-1.5 font-label text-[9.5px] font-bold uppercase tracking-[.2em] text-rose-deep">
            About
          </div>
          <h2 className="mt-[22px] font-display text-[52px] font-bold leading-[.95] tracking-[-.045em]">
            Statistics with<br />a <span className="font-serif text-[54px] font-normal italic text-teal">soft spot</span><br />for maps.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="m-0 text-[18px] font-light leading-[1.75] text-cocoa/80 text-pretty">
            I&rsquo;m Ayunita — a Statistics undergraduate who likes the unglamorous half of data science: cleaning,
            checking, and asking whether the number actually means what everyone thinks it means.
          </p>
          <p className="mt-5 text-[16px] font-light leading-[1.75] text-cocoa/70 text-pretty">
            My toolkit spans Python (Pandas, NumPy, scikit-learn, PyTorch), R and SQL across the whole pipeline —
            preprocessing, exploratory analysis, model development and evaluation, then deployment with Streamlit.
            I&rsquo;ve applied supervised and unsupervised learning and spatial statistics to real classification
            problems, from mangrove ecosystems to skin disease imagery.
          </p>
          <div className="mt-[34px] grid gap-3.5 sm:grid-cols-3">
            {cards.map((c) => (
              <Tilt key={c.kicker} className={"rounded-[1.7rem] border p-[7px] " + c.outer}>
                <div className={"inner-hi rounded-[calc(1.7rem-7px)] p-5 " + c.inner}>
                  <div className={"font-label text-[9.5px] uppercase tracking-[.16em] " + c.kickerTone}>{c.kicker}</div>
                  <div className={"mt-2 whitespace-pre-line font-display text-[19px] font-bold leading-[1.25] tracking-[-.025em] " + c.titleTone}>
                    {c.title}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
