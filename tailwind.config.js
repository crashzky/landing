module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'tt-travels': ['TT Travels'],
			},
			fontSize: {
				'base': '14px',
				'md': '16px',
			},
			colors: {
				gray: '#B9B9B9',
				purple: '#8166EF',
			},
		},
	},
	plugins: [],
};
