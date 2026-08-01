# Ayunita Maharani — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion. Built from the
\`Portfolio v2.dc.html\` design, keeping the original identity: polka-dot fields,
stacked cards, and the cream / teal / pink / blue palette.

## Run it

\`\`\`bash
npm install
npm run dev      # http://localhost:3000
\`\`\`

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. vercel.com → **Add New → Project** → import the repo.
3. Framework preset is detected as Next.js. No env vars needed. Deploy.

Or from the terminal: \`npx vercel\` (then \`npx vercel --prod\`).

## Before you ship

- [ ] Drop your CV at \`public/assets/CV-Ayunita-Maharani.pdf\` (the nav CV button links there).
- [ ] Replace the two dashed image slots — SkinSense UI (\`data/projects.ts\` → p1 \`media\`)
      and a flood-model chart (p3) — with real screenshots in \`public/assets/\`, switching
      \`kind: "placeholder"\` to \`kind: "image"\`.
- [ ] Fill every **"To fill:"** chip in \`data/projects.ts\` and \`data/experience.ts\`
      (model accuracy, Moran's I, cohort size, budget). They render as dashed pills
      so nothing is silently missing.
- [ ] Update \`metadataBase\` in \`app/layout.tsx\` to your real domain.

## Structure

\`\`\`
app/
  layout.tsx        fonts (next/font) + metadata
  page.tsx          section order
  globals.css       resets + the .dots polka-dot utility
components/
  Reveal.tsx        scroll-in reveal (blur + rise)
  Tilt.tsx          pointer-follow card tilt
  Magnetic.tsx      pill buttons that lean toward the cursor
  Disclosure.tsx    expand-in-place case-study panel
  ProcessTunnel.tsx scroll-driven 3D tunnel (CSS perspective + translateZ)
  tones.ts / PROJECT_TONES.ts   palette bundles so cards stay on-brand
  <Section>.tsx     one file per section
data/
  process.ts projects.ts experience.ts skills.ts certificates.ts
\`\`\`

**Content lives in \`data/\`, never in the components.** To add a project, append to
\`featured\` (full case study) or \`compact\` (one-line row) in \`data/projects.ts\`.

## How the animation works

- **Reveal** — Framer Motion \`whileInView\` with \`once: true\`; opacity + 30px rise + 7px blur out.
- **Marquee** — the tech list is rendered twice and the track translates \`-50%\` on loop,
  so the seam is invisible. Pure CSS keyframe in \`tailwind.config.ts\`.
- **Process tunnel** — the section is \`460vh\` tall with a \`sticky\` viewport inside.
  \`useScroll\` gives progress 0→1; each stage card maps that to \`translateZ\`
  (\`-i * 950px + progress * 950 * 4\`) under a \`1150px\` perspective, with opacity and
  blur falling off by distance. Six dot layers loop through Z for parallax depth.
  No WebGL — it is CSS 3D, so it costs almost nothing.
- **Expand in place** — \`AnimatePresence\` animating \`height: auto\`, which pushes the
  page down instead of covering it in a modal.
- \`prefers-reduced-motion\` is honoured globally in \`globals.css\`, and the intro is
  skipped entirely for those visitors.
