const tailwindCss = require('tailwindcss')

const withSass = require('@zeit/next-sass')
module.exports = withSass({
	webpack(config, options) {
		const rules = [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [tailwindCss('./tailwind.config.js')],
						},
					},
					{ loader: 'sass-loader' },
				],
			},
		]
		return {
			...config,
			module: {
				...config.module,
				rules: [...config.module.rules, ...rules],
			},
		}
	},
})
