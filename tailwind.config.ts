import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

        "base-primary": 'var(--color-base-primary)',
        "base-secondary": 'var(--color-base-secondary)',
        "base-teritary": 'var(--color-base-teritary)',
      }
    }
  },
  plugins: [],
}
export default config
