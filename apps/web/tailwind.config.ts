import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0A2E73",
          gold: "#D4A437",
          ink: "#1A1A1A",
          mist: "#F5F7FA",
          teal: "#0F766E"
        }
      },
      boxShadow: {
        premium: "0 24px 80px rgba(10, 46, 115, 0.12)",
        soft: "0 14px 40px rgba(26, 26, 26, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
