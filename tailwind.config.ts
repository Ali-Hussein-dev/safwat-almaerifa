import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      colors: {
        primary: {
          DEFAULT: '#09FDA7',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F2FFFA',
          300: '#C9FFEC',
          400: '#A1FEDD',
          500: '#78FECF',
          600: '#40FEBB',
          700: '#09FDA7',
          800: '#02CC85',
          900: '#019561',
          950: '#01794F'
        },
      }
    },
  },
  plugins: [
    require("tailwind-custom-utilities"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate")
  ],
} satisfies Config;
