import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
       'main': ['Alfa Slab One'],
       'secondary': ['Josefin Sans'],
       'mono': ['Roboto Mono']
      },
      colors: {
        'secondary': 'var(--f-clr-secondary)',
        'background': 'var(--bg-clr-light)'
      },
      
      /****** TYPEWRITER ANIMATION - 08272023 *******/
      animation: {
        'typewriter-after': 'typewriter 4s steps(16) 1s forwards, blink 750ms steps(16) infinite',
        'typewriter-before': 'typewriter 4s steps(16) 1s forwards'
      },
      keyframes: {
        typewriter: {
          to: { left: '100%' }
        },
        blink: {
          to: { background: 'transparent' } // should be the backg
        },
      }
    },
  },
  plugins: [
    plugin(function({ matchComponents }) {
      matchComponents({
        'typewriter-after': (steps: string) => ({
          animation: `typewriter 7s steps(${steps}) 1s forwards, blink 750ms steps(${steps}) infinite`
        }),
        'typewriter-before': (steps: string) => ({
          animation: `typewriter 7s steps(${steps}) 1s forwards`
        })
      })
    })
  ],
}
export default config
