import {Button} from '@mui/material';
import {CardDisplayList} from '../components/CardDisplayList/CardDisplayList';
import styles from '../styles/App.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {RootState, initializeStore} from '../store/store';
import Head from 'next/head';
import {getCards, getTotalCards} from '../store/cards/actions';
import {ICardsState} from '../store/cards/types';
import {setPrevPage, setNextPage, setCursors, setCurrentPage} from '../store/page/actions';
import {IPage} from '../store/page/types';
import {ThunkDispatch} from 'redux-thunk';
import {ActionsType} from '../store';
import {GetServerSidePropsContext} from 'next';
import {setDarkMode} from '../store/dark-mode/actions';
import Link from 'next/link';
import {useRouter} from 'next/router';

const LIMIT = 3;

const content = {
	en: {
		title: 'Your News'
	},
	fr: {
		title: 'Vos nouvelles'
	},
};

export default function Home (): JSX.Element {
	const {currentPage} : IPage = useSelector((state: RootState) => state.page);
	const {current: cards, total} : ICardsState = useSelector((state: RootState) => state.cards);
	const dispatch = useDispatch();
	const router = useRouter();
	const {locale} = useRouter();

	return (
		<div className={styles.App}>
			<Head>
				<title>biba</title>
			</Head>
			<Typography variant="h2" component="h2">
				All Cards
			</Typography>
			<Button variant="contained" onClick={() => router.push('/', '/', { locale: 'fr' })}>
				Fr
			</Button>
			{router.locale}
			{/* {content[router.locale].title} */}
			{content && locale && content[locale as 'fr' | 'en'].title}
			<div style={{
				display: 'flex',
				flexWrap: 'wrap'
			}}>
				{cards && cards.map( card => (
					<CardDisplayList key={card.id} card={card}></CardDisplayList>
				))}
			</div>
			<div style={{
				display: 'flex',
				justifyContent: 'space-around',
				minWidth: '200px'
			}}>
				<Button variant="contained" disabled={currentPage === 1} onClick={() => dispatch(setPrevPage())}>PREV</Button>
				<Button variant="contained" disabled={currentPage > Math.floor(total/LIMIT)} onClick={() => dispatch(setNextPage())}>NEXT</Button>
			</div>
		</div>
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