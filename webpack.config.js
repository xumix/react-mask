module.exports = {
	entry: './lib/react-mask.jsx',
	output: {
		filename: 'dist/react-mask.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel'
			}
		]
	}
};
