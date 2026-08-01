import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:     "#FFFDF7",
        sand:      "#FAF3E3",
        tan:       "#EDE3D6",
        ink:       "#2B1A12",
        cocoa:     "#3A2318",
        brown:     "#7A5B45",
        teal:      "#2E6F6A",
        "teal-deep": "#173C39",
        "teal-dark": "#1E4F4B",
        mint:      "#DFEDEB",
        "mint-light": "#F4FBFA",
        pink:      "#F6DDE0",
        rose:      "#C86E76",
        "rose-deep": "#A9535B",
        maroon:    "#43201F",
        plum:      "#6E3A38",
        blue:      "#8FB8D8",
        "blue-pale": "#DDE9F2",
        navy:      "#12283A",
        "navy-soft": "#1D3346",
        steel:     "#3E6688",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        serif:   ["var(--font-instrument)", "serif"],
        sans:    ["var(--font-jakarta)", "system-ui", "sans-serif"],
        label:   ["var(--font-fredoka)", "sans-serif"],
      },
      borderRadius: {
        card: "2.6rem",
        "card-in": "calc(2.6rem - 9px)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(.32,.72,0,1)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        cue: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.35" },
          "50%":     { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        cue: "cue 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
