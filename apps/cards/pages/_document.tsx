import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" type="image/png" href="https://nextjs.org/static/favicon/favicon.ico" />
				<meta name="description" content="aboba" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}