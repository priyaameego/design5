/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        // Luxury Deep Teal and Platinum Visual Identity
        deepteal: {
          light: '#0D4F4E',
          DEFAULT: '#073B3A', // Deep Teal: #073B3A
          dark: '#052A29',
          deepest: '#031D1C',
          glow: 'rgba(7, 59, 58, 0.35)',
        },
        pearl: {
          50: '#FFFFFF',
          100: '#F9FBFA',
          DEFAULT: '#F4F7F6', // Pearl White: #F4F7F6
          200: '#E9EFEF',
          300: '#DFE7E5',
          400: '#CAD5D2',
        },
        platinum: {
          light: '#C1DCD7',
          DEFAULT: '#A9C7C2', // Platinum Mint: #A9C7C2
          dark: '#86ABA5',
          darker: '#658D87',
          border: 'rgba(169, 199, 194, 0.40)',
          glow: 'rgba(169, 199, 194, 0.25)',
        },
        graphite: {
          light: '#364845',
          DEFAULT: '#253331', // Graphite: #253331
          dark: '#1B2625',
          black: '#121B1A',
          border: 'rgba(169, 199, 194, 0.18)',
        },
        // Backward compatibility mappings for existing utility classes
        titanium: {
          50: '#FFFFFF',
          100: '#F9FBFA',
          DEFAULT: '#F4F7F6',
          200: '#E9EFEF',
          300: '#DFE7E5',
          400: '#CAD5D2',
        },
        champagne: {
          light: '#C1DCD7',
          DEFAULT: '#A9C7C2',
          dark: '#86ABA5',
          border: 'rgba(169, 199, 194, 0.40)',
          glow: 'rgba(169, 199, 194, 0.25)',
        },
        teal: {
          50: '#F4F7F6',
          100: '#E9EFEF',
          200: '#C1DCD7',
          300: '#A9C7C2',
          400: '#A9C7C2',
          500: '#073B3A',
          600: '#052A29',
          700: '#031D1C',
          glow: 'rgba(169, 199, 194, 0.25)',
        },
        navy: {
          950: "#031D1C",
          900: "#052A29",
          850: "#073B3A",
          800: "#1B2625",
          700: "#253331",
          600: "#364845",
          500: "#495F5C",
          100: "#E9EFEF",
          50: "#F4F7F6",
        },
        corporate: {
          navy: "#073B3A",
          blue: "#253331",
          electric: "#A9C7C2",
          cyan: "#A9C7C2",
          surface: "#F4F7F6",
          charcoal: "#253331",
          dark: "#052A29",
          border: "rgba(169, 199, 194, 0.35)",
          borderSoft: "rgba(7, 59, 58, 0.12)",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brand-glow': '0 0 35px rgba(8, 185, 232, 0.3)',
        'electric-glow': '0 8px 30px rgba(8, 127, 229, 0.35)',
        'corporate-card': '0 10px 30px rgba(7, 27, 73, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'corporate-hover': '0 20px 45px rgba(7, 27, 73, 0.16), 0 0 30px rgba(8, 185, 232, 0.15)',
        'dark-card': '0 16px 40px rgba(4, 15, 43, 0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
