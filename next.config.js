const baseFileLoaderRule = (options = {}) => ({
	test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
	use: [{
		loader: 'file-loader',
		options: {
			context: '',
			outputPath: 'static',
			publicPath: '/_next/static',
			name: '[path][name].[hash].[ext]',
			useRelativePath: false,
			...options,
		}
	}, ]
});

const baseCssLoaderRule = (options = {}) => ({
		loader: "css-loader",
		options: {
			modules: {
				localIdentName: '[local]_[hash:base64:5]',
				...options
			},
		},
});

module.exports = {
	distDir: 'build',
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack5: false,
	experimental: {
		externalDir: true,
	},
	webpack: (config, {
		isServer
	}) => {
		if (!isServer) {
			config.module.rules.unshift({
				test: /\.(less|css)$/,
				use: [
					"style-loader",
					baseCssLoaderRule(),
					"less-loader",
				],
			}, baseFileLoaderRule() )
		} else {
			config.module.rules.unshift({
				test: /\.(less|css)$/,
				use: [
					baseCssLoaderRule({
						exportOnlyLocals: true,
						exportLocalsConvention: 'camelCase',
					}), 
					"less-loader"
				],
			}, baseFileLoaderRule({emitFile: false}) )
		}
		return config
	},
	async rewrites() {
		return [{
				source: '/:path*',
				destination: '/:path*',
			},
			{
				source: '/posts',
				destination: 'http://localhost:4000/posts',
			},
			{
				source: '/posts/:path*',
				destination: 'http://localhost:4000/posts/:path*',
			},
		];
	},
}