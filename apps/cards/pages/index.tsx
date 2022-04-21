import {GetServerSidePropsContext} from 'next';
import Head from 'next/head';
import {ThunkDispatch} from 'redux-thunk';
// import {setCursors, setCurrentPage} from '../store/page/actions';
// import {setDarkMode} from '../store/dark-mode/actions';
import Root from '../components/pages/root/root';
import {ActionsType} from '../store';
import {CURRENT_CARDS_LOADED} from '../store/actionTypes';
import {setCurrentPage} from '../store/page/actions';
import {initializeStore, RootState} from '../store/store';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>biba</title>
			</Head>
			<Root />
		</>
	);
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	const store = initializeStore({} as RootState);
	const { dispatch }: {dispatch: ThunkDispatch<RootState, unknown, ActionsType>} = store;
	const isFirstRender: boolean = !ctx?.req?.url?.includes('.json') || false;

	if (isFirstRender) {
		const req = await fetch('https://my-json-server.typicode.com/spnq/fake-api/cards');
		const cards = await req.json();
		dispatch({type: CURRENT_CARDS_LOADED, cards});
		dispatch(setCurrentPage(1));
		return {
			props: {
				initialReduxState: {
					page: store.getState().page,
					cards: store.getState().cards,
					isDarkMode: store.getState().isDarkMode
				}
			}
		};
	} else {
		const req = await fetch('https://my-json-server.typicode.com/spnq/fake-api/cards');
		const cards = await req.json();
		dispatch({type: CURRENT_CARDS_LOADED, cards});
		dispatch(setCurrentPage(1));
		return {
			props: {
				initialReduxState: {
					page: store.getState().page,
					cards: store.getState().cards,
				}
			}
		};
	}}
