module.exports = {
	distDir: 'build',
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
    	externalDir: true,
  	},
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