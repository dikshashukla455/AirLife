/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
	theme: {
		extend:{
		width: {
			'100': '27rem',
		  }
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.stone,
			green: colors.teal,
			purple: colors.violet,
			yellow: colors.amber,
			pink: colors.fuchsia,
			red: colors.rose,
			blue: colors.indigo,
			orange: colors.orange,
			grey:colors.slate,
			aqua:colors.cyan,
		},
		screens: {
			'sm': '800px',
			'md': '1000px', 
		  },
	},
	plugins: [],
};
