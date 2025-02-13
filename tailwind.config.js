/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom: {
          "text-body": "hsl(var(--text-body))",
          "text-primary": "hsl(var(--text-primary))",
          "black-50": "hsl(var(--black-50))",
          "black-100": "hsl(var(--black-100))",
          "black-300": "hsl(var(--black-300))",
          "black-500": "hsl(var(--black-500))",
          "black-900": "hsl(var(--black-900))",
          "secondary": "hsl(var(--secondary))",
          "header-bg": "hsl(var(--header-bg))",
          "benefit-bg": "hsl(var(--benefit-bg))",
          "statistic-bg": "hsl(var(--statistic-bg))",
          "testimonial-bg": "hsl(var(--testimonial-bg))",
          "testimonial-card-bg": "hsl(var(--testimonial-card-bg))",
          "testimonial-card-border": "hsl(var(--testimonial-card-border))",
        }
      },
      fontFamily: {
        headingFont: '"Playfair Display", serif',
        poppinsFont: '"Poppins", sans-serif',
        bodyRegularFont: '"Satoshi-Regular", serif',
        bodyMediumFont: '"Satoshi-Medium", serif',
        bodyBoldFont: '"Satoshi-Bold", serif',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}