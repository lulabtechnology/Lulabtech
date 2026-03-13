import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bcdcfe",
          300: "#8fc4ff",
          400: "#5aa4ff",
          500: "#2a88ff",
          600: "#0E76FF",
          700: "#095fd1",
          800: "#0b4ca4",
          900: "#103f7f"
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b"
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
      boxShadow: {
        elevated:
          "0 10px 30px rgba(14,118,255,0.08), 0 20px 60px rgba(2,8,23,0.08)",
        soft: "0 8px 24px rgba(2,8,23,0.06)"
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at top, rgba(14,118,255,0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.14), transparent 25%)",
        "brand-grid":
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      maxWidth: {
        container: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
