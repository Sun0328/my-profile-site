// tailwind.config.ts
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'text-primary': '#E5E7EB',
        'text-secondary': '#D1D5DB',
        background: {
          DEFAULT: 'transparent',
        },
      },
      fontFamily: {
        sans: [
          'JetBrains Mono',
          'Fira Code',
          'monospace',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
