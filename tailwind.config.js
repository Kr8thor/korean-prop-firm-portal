/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Korean-inspired color scheme
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          primary: '#FFD700',
          secondary: '#FCD34D'
        },
        dark: {
          bg: '#000000',
          card: '#1a1a1a',
          border: '#333333'
        },
        accent: {
          blue: '#007AFF'
        }
      },
      fontFamily: {
        // Korean-optimized fonts
        'korean': ['Pretendard', 'Noto Sans KR', 'Malgun Gothic', 'sans-serif'],
        'display': ['Pretendard', 'system-ui', 'sans-serif'],
        'body': ['Pretendard', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Korean text sizing
        'xs-ko': ['0.75rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'sm-ko': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'base-ko': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'lg-ko': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl-ko': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        '2xl-ko': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        '3xl-ko': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '4xl-ko': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.03em' }]
      },
      spacing: {
        // Korean UI spacing
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem'
      },
      borderRadius: {
        // Modern Korean design
        'korean': '0.5rem',
        'korean-lg': '0.75rem'
      },
      backdropBlur: {
        // Glassmorphism effects
        'korean': '16px'
      },
      animation: {
        // Korean-style animations
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      boxShadow: {
        // Korean design shadows
        'korean': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'korean-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.3)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}