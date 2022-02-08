module.exports = {
	distDir: 'build',
	async rewrites() {
		return [
			{
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
};