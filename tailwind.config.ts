import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-accent": "#4CC9F0",
      },
      backgroundImage: {
        "rotating-border-background":
          "conic-gradient(#4361EE, #3A0CA3, #000000, #4361EE)",
        "highlight-gradient":
          "linear-gradient(90deg, #4CC9F0, #C08EF5, #4CC9F0)",
        "radial-glow": "radial-gradient(closest-side, #4CC9F023, #4CC9F000)",
        "radial-glow-white":
          "radial-gradient(circle, #ffffff10 0%, #ffffff00 50%)",
      },
      keyframes: {
        "spin-in": {
          "0%": { transform: "rotate(180deg)", opacity: "0%" },
          "100%": { transform: "rotate(360deg)", opacity: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
