import { CreatePage } from '../components/pages/create/create';
import Head from 'next/head';

export default function Create(): JSX.Element {

	return (
		<>
			<Head>
				<title>boba</title>
				<meta property="og:title" content="Page title" key="title" />
			</Head>
			<CreatePage />
		</>
	);
}
