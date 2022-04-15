import {AppProps} from 'next/app';
import '../styles/global.css';
import Layout from '../components/layout/Layout';
import {useStore} from '../store/store';
import {DefMyApp} from '@defaults/app';

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);
	return (
		<DefMyApp 
			Component={Component}
			pageProps={pageProps}
			Layout={Layout}
			store={store} 
		/>
	);
}

export default MyApp;