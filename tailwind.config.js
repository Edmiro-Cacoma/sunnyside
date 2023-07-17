/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "soft-red": "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)", //(graphic design text)
        "dark-blue": "hsl(198, 62%, 26%)", //(photography text)
        "dark-moderate-cyan": "hsl(168, 34%, 41%)", //(footer)

        // Neutral
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        fontBarlow: ['"Barlow"', "sans-serif"],
        fontFraunces: ['"Fraunces"', "serif"],
      },

      backgroundImage: {
        defaultBackground: "url('/src/images/mobile/image-header.jpg')",
        mediumBackground: "url('/src/images/desktop/image-header.jpg')",
        largeBackground: "url('/src/images/desktop/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
