import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        void: "#080a0f",
        "void-2": "#0d1117",
        "void-3": "#141a22",
        surface: "#1a2332",
        "surface-2": "#1e2a3a",
        border: "#1f3044",
        "border-2": "#2a4060",
        cyan: {
          DEFAULT: "#00e5ff",
          dim: "#00b8cc",
          glow: "#00e5ff33",
        },
        green: {
          term: "#39ff14",
          "term-dim": "#2acc10",
        },
        amber: {
          term: "#ffb300",
        },
        text: {
          primary: "#e8edf5",
          secondary: "#8899aa",
          muted: "#4a6070",
        },
      },
      animation: {
        "cursor-blink": "blink 1.1s step-end infinite",
        "scan-line": "scanline 8s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        flicker: "flicker 0.15s infinite",
        "slide-in": "slideIn 0.4s ease forwards",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        flicker: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.92" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-16px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
