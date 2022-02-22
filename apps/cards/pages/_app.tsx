import {AppProps} from 'next/dist/shared/lib/router/router';
import {Provider} from 'react-redux';
import '../styles/global.css';
import '../styles/nprogress.css';
import Layout from '../components/Layout/Layout';
import {useStore} from '../store/store';
import {useLoader} from '../../utils/useLoader';
import Head from 'next/head';
import {useRAT} from '../../utils/useRAT';
import RATProvider from '../components/RATProvider/RATProvider';

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	useLoader();
	useRAT();

	return (
		<Provider store={store}>
			<RATProvider>
				<Layout>
					<Head>
						<link rel="icon" type="image/png" href="https://nextjs.org/static/favicon/favicon.ico" />
					</Head>
					<Component {...pageProps} />
				</Layout>
			</RATProvider>
		</Provider>
	);
}

export default MyApp;