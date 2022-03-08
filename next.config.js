module.exports = {
	distDir: 'build',
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		externalDir: true,
	},
	webpack: (config, {isServer}) => {
		if (!isServer) {
			config.module.rules.unshift({
				test: /\.(less|css)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: '[local]_[hash:base64:5]',
							},
						},
					},
					"less-loader",
				],
			}, )
		} else {
			config.module.rules.unshift({
				test: /\.(less|css)$/,
				use: [
					{
						loader: "css-loader",
						options: {
							modules: {
								exportOnlyLocals: true,
								exportLocalsConvention: 'camelCase',
                            	localIdentName: '[local]_[hash:base64:5]'
							},
						},
					},
					"less-loader"
				],
			}, )
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