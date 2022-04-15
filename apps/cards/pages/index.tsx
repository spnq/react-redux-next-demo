import {RootState, initializeStore} from '../store/store';
import Head from 'next/head';
import {getCards, getTotalCards} from '../store/cards/actions';
import {setCursors, setCurrentPage} from '../store/page/actions';
import {ThunkDispatch} from 'redux-thunk';
import {ActionsType} from '../store';
import {GetServerSidePropsContext} from 'next';
import {setDarkMode} from '../store/dark-mode/actions';
import Root from '../components/pages/root/Root';

export default function Home (): JSX.Element {
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
		await Promise.all(
			[dispatch(setCursors()), dispatch(getCards()), dispatch(getTotalCards()),dispatch(setDarkMode())]
		);
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
		await Promise.all(
			[dispatch(setCursors()), dispatch(getCards()), dispatch(getTotalCards())]
		);
		dispatch(setCurrentPage(1));
		return {
			props: {
				initialReduxState: {
					page: store.getState().page,
					cards: store.getState().cards,
				}
			}
		};
	}

}