module.exports = {
	distDir: 'build',
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		loader: 'imgix',
		path: 'https://firebasestorage.googleapis.com/',
	},
	//https://firebasestorage.googleapis.com/v0/b/react-demo-7d4ce.appspot.com/o/
			 //https://firebasestorage.googleapis.com/v0/b/react-demo-7d4ce.appspot.com/o/wULPLUQYTnaRoijhWDJlgrqifNA2%2Fprofile-pic?alt=media&token=2f353cac-921b-4c51-9df6-255f0cc62d49
	//https://firebasestorage.googleapis.com/v0/b/react-demo-7d4ce.appspot.com/o/wULPLUQYTnaRoijhWDJlgrqifNA2/profile-pic?auto=format&fit=max&w=2048


	//https://firebasestorage.googleapis.com/v0/b/react-demo-7d4ce.appspot.com/o/wULPLUQYTnaRoijhWDJlgrqifNA2%2Fprofile-pic?alt=media&token=2f353cac-921b-4c51-9df6-255f0cc62d49
	//https://firebasestorage.googleapis.com/v0/b/react-demo-7d4ce.appspot.com/o/wULPLUQYTnaRoijhWDJlgrqifNA2%2Fprofile-pic
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