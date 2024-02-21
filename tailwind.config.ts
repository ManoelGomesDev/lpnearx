import type { Config } from 'tailwindcss'

const config: Config = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#fff",
        blue: "#91AAEB",
        gray: {
          200: "#BCBCBC",
          500:"#363752",
          600: "#5C5771",
        },
        card:{
          static:'rgba(74, 61, 95, 0.20)'
        },
        primary: {
          default: "#7F31FF",
          hover: "#9345FF",
        },
        bgDark: "#141415",
        bgLight: "#272C37",
        bgNetraul: "rgba(255, 255, 255, 0.05)",
        bgCard: "#25232E",
        borderCard: "#363752",
        


        text: {
          default: "#EEE",
          gray: "#BCBCBC",
        },
      },
    },
    screens: {

      mobileS: "320px",

      mobileM: "375px",
      // => @media (min-width: 375px) { ... }

      mobileL: "425px",
      // => @media (min-width: 425px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      macair: "1440px",
      // => @media (min-width: 1024px) { ... }
      desktop: "2560px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
}
export default config
