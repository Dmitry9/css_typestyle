module.exports = {
	entry: './src/app.tsx',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	resolve: {
		extensions : ['.ts','.tsx','.js']
	},
	module: {
		loaders: [
			{test: /\.tsx?$/, loader: 'ts-loader'},
			{ test: /\.tsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}
