import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf5f2",
          100: "#d8e8e2",
          200: "#b2d1c6",
          300: "#8bb9aa",
          400: "#65a18e",
          500: "#3f8a73",
          600: "#2f6c59",
          700: "#214e40",
          800: "#143127",
          900: "#09170f"
        },
        accent: {
          50: "#fff6e8",
          100: "#ffe8c2",
          200: "#ffd28a",
          300: "#ffbc52",
          400: "#ffa41f",
          500: "#e98b06",
          600: "#c26d03",
          700: "#9c5200",
          800: "#6f3700",
          900: "#3a1c00"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 32, 24, 0.12)",
        card: "0 16px 40px rgba(15, 35, 27, 0.16)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top left, rgba(63, 138, 115, 0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(233, 139, 6, 0.35), transparent 50%)"
      }
    }
  },
  plugins: []
};

export default config;
