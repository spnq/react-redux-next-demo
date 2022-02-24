import {AppProps} from 'next/dist/shared/lib/router/router';
import {Provider} from 'react-redux';
import '../styles/global.css';
import '../styles/nprogress.css';
import Layout from '../components/Layout/Layout';
import {useStore} from '../store/store';
import {useLoader} from '../../utils/useLoader';
import Head from 'next/head';
import {updateRatIfNeeded} from '../../utils/updateRatIfNeeded';

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	useLoader();
	updateRatIfNeeded();

	return (
		<Provider store={store}>
			<Layout>
				<Head>
					<link rel="icon" type="image/png" href="https://nextjs.org/static/favicon/favicon.ico" />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;