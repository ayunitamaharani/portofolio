import Magnetic from "./Magnetic";

const links = [
  ["About", "#about"], ["Process", "#process"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["Skills", "#skills"], ["Certificates", "#certificates"], ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <div
      className="dots sticky top-0 z-40 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 bg-cocoa px-4 py-3 backdrop-blur md:justify-between md:px-[26px] md:py-4"
      style={{ ["--dot" as string]: "rgba(246,221,224,.9)", ["--dot-r" as string]: "9px", ["--dot-s" as string]: "44px" }}
    >
      <a
        href="#top"
        className="rounded-full bg-cream px-4 py-2 font-display text-[15px] font-bold tracking-[-.02em] text-ink transition-transform duration-500 ease-soft hover:scale-[1.04]"
      >
        Ayunita Maharani
      </a>
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-cream/[.18] p-1.5 backdrop-blur-md">
        <div className="flex flex-wrap justify-center gap-x-[17px] gap-y-2 px-3.5 text-[12px] font-semibold text-cream">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-cream hover:text-pink">{label}</a>
          ))}
        </div>
        <Magnetic
          href="/assets/Resume_Ayunita Maharani.pdf"
          target="_blank"
          className="flex items-center gap-2 rounded-full bg-blue py-2 pl-4 pr-2 text-[12px] font-bold text-navy-soft"
        >
          CV
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-navy-soft/15 font-label text-[12px] font-light">↓</span>
        </Magnetic>
      </div>
    </div>
  );
}
