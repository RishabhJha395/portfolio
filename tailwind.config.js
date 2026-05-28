/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        panel: "#111111",
        emerald: {
          primary: "#10B981",
          soft: "#34D399"
        },
        highlight: "#FBBF24",
        muted: "#A1A1AA"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(16, 185, 129, 0.35)",
        gold: "0 0 24px rgba(251, 191, 36, 0.28)"
      },
      backgroundImage: {
        "radial-emerald": "radial-gradient(circle at 25% 10%, rgba(16, 185, 129, 0.18), transparent 28%)",
        "glass-line": "linear-gradient(135deg, rgba(16, 185, 129, 0.20), rgba(255,255,255,0.04))"
      }
    }
  },
  plugins: []
};
