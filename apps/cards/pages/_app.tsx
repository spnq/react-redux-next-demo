import {AppProps} from 'next/app';
import Layout from '../components/layout/layout';
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