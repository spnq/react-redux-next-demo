import {Html, Head, Main, NextScript} from 'next/document';

export function Document({favicon}:{favicon: string}) {
	return (
		<Html>
			<Head>
				<link rel="icon" type="image/png" href={favicon} />
				<meta name="description" content="aboba" key="title"/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}