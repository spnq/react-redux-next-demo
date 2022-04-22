import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class DefDocument extends Document {
	favicon = '';

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" type="image/png" href={this.favicon} />
					<meta name="description" content="aboba" key="title" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}