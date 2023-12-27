/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './js/*.js'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '978px',
			xl: '1440px'
		},
		fontFamily: {
			sans: ['Open Sans',
				'sans-serif'],
		},
		extend: {
			colors: {
				'lightPink': 'hsl(354, 92%, 67%)',
				'dark': '#111111',
				'lightDark': '#121212',
				'lighterDark': '#242424',
			},
		}
	},
	plugins: [],
}