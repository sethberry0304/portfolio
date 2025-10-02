import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Chogokuboso Gothic', 'A-OTF UD Shin Go Pr6N', 'ヒラギノ角ゴ Std W1', 'Hiragino Sans W1', 'system-ui', 'sans-serif'],
        'display': ['var(--font-dela-gothic-one)', 'Dela Gothic One', 'system-ui', 'sans-serif'],
        'mono': ['Chogokuboso Gothic', 'A-OTF UD Shin Go Pr6N', 'ヒラギノ角ゴ Std W1', 'Hiragino Sans W1', 'monospace'],
        'heading': ['Chogokuboso Gothic', 'A-OTF UD Shin Go Pr6N', 'ヒラギノ角ゴ Std W1', 'Hiragino Sans W1', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand_red: '#FF0040',
        brand_blue: '#0080FF',
        dark_bg: '#001122',
        light_text: '#FFFFFF',
        accent_red: '#FF1744',
        accent_blue: '#2196F3',
        blue_bg: '#0055AA',
      },
      boxShadow: {
        'glow': '0 0 0 2px #FF0040, 0 0 20px rgba(255, 0, 64, 0.5)',
        'glow-red': '0 0 0 2px #FF0040, 0 0 15px rgba(255, 0, 64, 0.6)',
        'glow-blue': '0 0 0 2px #0080FF, 0 0 15px rgba(0, 128, 255, 0.6)',
        'contrast-red': '0 4px 20px rgba(255, 0, 64, 0.3)',
        'contrast-blue': '0 4px 20px rgba(0, 128, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'red-blue-gradient': 'linear-gradient(135deg, rgba(255, 45, 85, 0.1) 0%, rgba(0, 102, 255, 0.1) 100%)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}
export default config