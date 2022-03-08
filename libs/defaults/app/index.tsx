import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {useLoader} from '../../../libs/utils/useLoader';
import {updateRatIfNeeded} from '../../../libs/utils/updateRatIfNeeded';
import {Store} from 'redux';

export interface DeffAppProps extends Omit<AppProps, 'router'> {
	store: Store;
	Layout: React.ElementType;
} 

export function DefMyApp({ Component, pageProps, store, Layout}: DeffAppProps) {

	useLoader();
	updateRatIfNeeded();

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}