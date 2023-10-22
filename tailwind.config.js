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
        border: "hsl(var(--widget-border))",
        input: "hsl(var(--widget-input))",
        ring: "hsl(var(--widget-ring))",
        background: "hsl(var(--widget-background))",
        foreground: "hsl(var(--widget-foreground))",
        primary: {
          DEFAULT: "hsl(var(--widget-primary))",
          foreground: "hsl(var(--widget-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--widget-secondary))",
          foreground: "hsl(var(--widget-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--widget-destructive))",
          foreground: "hsl(var(--widget-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--widget-muted))",
          foreground: "hsl(var(--widget-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--widget-accent))",
          foreground: "hsl(var(--widget-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--widget-popover))",
          foreground: "hsl(var(--widget-popover-foreground))",
        },
        card: {
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
