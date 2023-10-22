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
        "widget-border": "hsl(var(--widget-border))",
        "widget-input": "hsl(var(--widget-input))",
        "widget-ring": "hsl(var(--widget-ring))",
        "widget-background": "hsl(var(--widget-background))",
        "widget-foreground": "hsl(var(--widget-foreground))",
        "widget-primary": {
          DEFAULT: "hsl(var(--widget-primary))",
          foreground: "hsl(var(--widget-primary-foreground))",
        },
        "widget-secondary": {
          DEFAULT: "hsl(var(--widget-secondary))",
          foreground: "hsl(var(--widget-secondary-foreground))",
        },
        "widget-destructive": {
          DEFAULT: "hsl(var(--widget-destructive))",
          foreground: "hsl(var(--widget-destructive-foreground))",
        },
        "widget-muted": {
          DEFAULT: "hsl(var(--widget-muted))",
          foreground: "hsl(var(--widget-muted-foreground))",
        },
        "widget-accent": {
          DEFAULT: "hsl(var(--widget-accent))",
          foreground: "hsl(var(--widget-accent-foreground))",
        },
        "widget-popover": {
          DEFAULT: "hsl(var(--widget-popover))",
          foreground: "hsl(var(--widget-popover-foreground))",
        },
        "widget-card": {
          DEFAULT: "hsl(var(--widget-card))",
          foreground: "hsl(var(--widget-card-foreground))",
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
