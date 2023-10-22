/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "widget-border": "hsl(214.3 31.8% 91.4%)",
        "widget-input": "hsl(214.3 31.8% 91.4%)",
        "widget-ring": "hsl(221.2 83.2% 53.3%)",
        "widget-background": "hsl(0 0% 100%)",
        "widget-foreground": "hsl(222.2 84% 4.9%)",
        "widget-primary": {
          DEFAULT: "hsl(221.2 83.2% 53.3%)",
          foreground: "hsl(210 40% 98%)",
        },
        "widget-secondary": {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        "widget-destructive": {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(--widget-destructive-foreground)",
        },
        "widget-muted": {
          DEFAULT: "hsl(--widget-muted)",
          foreground: "hsl(210 40% 98%)",
        },
        "widget-accent": {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        "widget-popover": {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
        "widget-card": {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
      },
      borderRadius: {
        lg: "var(--widget-radius)",
        md: "calc(var(--widget-radius) - 2px)",
        sm: "calc(var(--widget-radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
