import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      data-screen-label="Contact"
      className="dots relative overflow-hidden bg-ink px-6 pb-[90px] pt-[110px] md:px-16"
      style={{ ["--dot" as string]: "rgba(246,221,224,.1)", ["--dot-r" as string]: "11px", ["--dot-s" as string]: "56px" }}
    >
      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="inline-flex rounded-full bg-pink px-3.5 py-1.5 font-label text-[9.5px] font-bold uppercase tracking-[.2em] text-rose-deep">
              Contact
            </div>
            <h2 className="mt-[22px] font-display text-[clamp(44px,4.6vw,62px)] font-bold leading-[.95] tracking-[-.05em] text-cream">
              Let&rsquo;s build<br />something <span className="font-serif text-[clamp(46px,4.8vw,64px)] font-normal italic text-pink">useful</span>
            </h2>
            <p className="mt-5 max-w-[430px] text-[16px] font-light leading-[1.7] text-cream/70 text-pretty">
              Open to data analyst and data science internships, collaborations, or a chat about spatial statistics.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Magnetic href="mailto:ayunitamaharanipq@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-pink py-2 pl-[22px] pr-2">
                <span className="text-[13px] font-bold text-maroon">ayunitamaharanipq@gmail.com</span>
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-maroon/10 font-label text-[13px] font-light text-maroon">↗</span>
              </Magnetic>
              <Magnetic
                href="https://wa.me/6282137140831"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-full border border-cream/25 bg-cream/[.12] py-2 pl-[22px] pr-2"
              >
                <span className="text-[13px] font-bold text-cream">+62 821-3714-0831</span>
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-cream/15 font-label text-[13px] font-light text-cream">↗</span>
              </Magnetic>
            </div>
            <div className="mt-[30px] flex gap-[22px] font-label text-[11px] font-medium uppercase tracking-[.16em]">
              <a href="https://www.linkedin.com/in/ayunitamaharani/" target="_blank" rel="noreferrer" className="text-cream/55">LinkedIn</a>
              <a href="https://github.com/ayunitamaharani" target="_blank" rel="noreferrer" className="text-cream/55">GitHub</a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-card border border-cream/15 bg-cream/[.08] p-[9px]">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <div className="mt-[70px] flex flex-wrap items-center justify-between gap-5 border-t border-cream/15 pt-[26px]">
          <span className="font-label text-[11px] tracking-[.12em] text-cream/45">© 2026 Ayunita Maharani</span>
          <a href="#top" className="inline-flex items-center gap-2.5 font-label text-[11px] font-medium uppercase tracking-[.16em] text-cream/55">
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/15 font-label text-[12px] font-light text-cream">↑</span>
          </a>
        </div>
      </div>
    </section>
  );
}
