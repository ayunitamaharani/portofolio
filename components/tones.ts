/** Shared colour bundles so cards stay on-palette without repeating class strings. */
export const TONES = {
  teal: {
    outer: "bg-teal/10 border-teal/20", inner: "bg-mint", rail: "bg-teal",
    railDot: "rgba(246,221,224,.32)",
    badge: "bg-cream/90 text-teal-dark", year: "text-cream", month: "text-cream/70",
    title: "text-teal-deep", accent: "text-teal", org: "text-teal-deep/65", body: "text-teal-deep/80",
    btn: "bg-teal", btnText: "text-mint-light", icon: "bg-cream/20 text-mint-light",
    rule: "border-teal-deep/30", kicker: "text-teal-deep/50",
    stat: "bg-cream", statNum: "text-teal-deep", statLabel: "text-teal-deep/50",
    todo: "border-teal-deep/35 text-teal-deep/55", tag: "bg-cream/75 text-teal-dark",
  },
  blue: {
    outer: "bg-blue/20 border-blue/30", inner: "bg-blue-pale", rail: "bg-blue",
    railDot: "rgba(255,253,247,.5)",
    badge: "bg-navy-soft/15 text-navy", year: "text-navy", month: "text-navy/60",
    title: "text-navy", accent: "text-steel", org: "text-navy/65", body: "text-navy/78",
    btn: "bg-navy", btnText: "text-cream", icon: "bg-cream/15 text-cream",
    rule: "border-navy/25", kicker: "text-navy/50",
    stat: "bg-cream", statNum: "text-navy", statLabel: "text-navy/50",
    todo: "border-navy/35 text-navy/55", tag: "bg-cream/75 text-navy-soft",
  },
  rose: {
    outer: "bg-rose/20 border-rose/30", inner: "bg-pink", rail: "bg-rose",
    railDot: "rgba(255,253,247,.42)",
    badge: "bg-cream/90 text-rose-deep", year: "text-cream", month: "text-cream/75",
    title: "text-maroon", accent: "text-rose-deep", org: "text-maroon/65", body: "text-maroon/80",
    btn: "bg-rose-deep", btnText: "text-cream", icon: "bg-cream/20 text-cream",
    rule: "border-maroon/25", kicker: "text-maroon/50",
    stat: "bg-cream", statNum: "text-maroon", statLabel: "text-maroon/50",
    todo: "border-maroon/35 text-maroon/55", tag: "bg-cream/75 text-plum",
  },
} as const;

export type ToneKey = keyof typeof TONES;
