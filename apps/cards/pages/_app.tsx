import {AppProps} from 'next/dist/shared/lib/router/router';
import {Provider} from 'react-redux';
import '../styles/global.css';
import '../styles/nprogress.css';
import Layout from '../components/Layout/Layout';
import {useStore} from '../store/store';
import {useRAT} from '../../utils/useRAT';
import Head from 'next/head';
import {AuthProvider} from '../components/auth-provider/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	useRAT();

	return (
		<Provider store={store}>
			<AuthProvider>
				<Layout>
					<Head>
						<link rel="icon" type="image/png" href="https://nextjs.org/static/favicon/favicon.ico" />
					</Head>
					<Component {...pageProps} />
				</Layout>
			</AuthProvider>
		</Provider>
	);
}

export default MyApp;