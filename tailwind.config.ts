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
        parchment: {
          DEFAULT: "#D9BD91",
          light: "#F7F0E3",
          cream: "#FAF6EE",
          dark: "#C5A47D",
          deep: "#A9855C",
        },
        ivory: {
          DEFAULT: "#F7F0E3",
          warm: "#FAF6EE",
          soft: "#FFFDF9",
        },
        beige: {
          heritage: "#E9D8BD",
          sandstone: "#C5A47D",
        },
        vermilion: {
          DEFAULT: "#A84B40",
          light: "#C16053",
          dark: "#87362D",
          deep: "#6D251D",
        },
        gold: {
          DEFAULT: "#B58C52",
          light: "#D8B478",
          shimmer: "#F0D8A8",
          dark: "#8C6527",
          antique: "#A57D3E",
        },
        maroon: {
          DEFAULT: "#713C43",
          royal: "#57252C",
          deep: "#41171D",
        },
        forest: {
          DEFAULT: "#455443",
          deep: "#2F3B2E",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        cinzel: ["'Cinzel'", "Trajan Pro", "serif"],
        hindi: ["'Noto Serif Devanagari'", "'Tiro Devanagari Hindi'", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "parchment-pattern": "radial-gradient(ellipse at center, #F7F0E3 0%, #E9D8BD 60%, #D9BD91 100%)",
        "royal-gradient": "linear-gradient(135deg, #713C43 0%, #A84B40 50%, #B58C52 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent 0%, rgba(216,180,120,0.4) 50%, transparent 100%)",
      },
      boxShadow: {
        royal: "0 20px 50px -10px rgba(113, 60, 67, 0.25), 0 10px 20px -5px rgba(181, 140, 82, 0.2)",
        envelope: "0 25px 60px -12px rgba(47, 59, 46, 0.35), 0 0 40px rgba(181, 140, 82, 0.2)",
        card: "0 15px 35px -5px rgba(113, 60, 67, 0.15), 0 0 15px rgba(181, 140, 82, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "floatGentle 6s ease-in-out infinite",
        "shimmer-flow": "shimmerFlow 3s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmerFlow: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
