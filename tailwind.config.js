const colors = {
	red: {
		default: '#DE4A54',
		300: '#EB9297',
		100: '#F2B7B9',
		contrast: '#FFF',
	},
	blue: {
		default: '#2376D4',
		300: '#7BADE4',
		100: '#A7C8EC',
		contrast: '#FFF',
		'300-contrast': '#000',
		'100-contrast': '#000',
	},
}

module.exports = {
	purge: ['./src/**/*.jsx', './src/**/*.js'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
		},
		extend: {
			colors: {
				...colors,
				primary: colors.blue,
			},
			spacing: {
				'96': '24rem',
				'128': '32rem',
			},
		},
	},
	variants: {},
	plugins: [],
}
