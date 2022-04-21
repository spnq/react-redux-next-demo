import {Button} from '@mui/material';
import {ActionsType} from 'apps/cards/store';
import {GetServerSidePropsContext} from 'next';
import Router, {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {CardDisplayList, ICard} from 'visual-libs/awesome-lib';
import {loadNewSearchPage} from '../../store/search/actions';
// import {SearchAction} from '../../store/search/types';
// import {getData} from '../api/fake/search/[query]';
import {initializeStore, RootState} from '../../store/store';
import styles from './Search.module.less';

function Search({query}: {cards: ICard[], query: {title: string}}) {
	const {cards, currentPage: page} = useSelector((state: RootState) => state.search);
	const router = useRouter();

	return <div className={styles.search}>
		<CardDisplayList actionName={'Learn More'} action={(id: string | number | undefined) => router.push({pathname: `/card/${id}`})} cards={cards} />
		<Button variant='contained' onClick={() => Router.push({pathname: '/search', query: {...query, page: parseInt(page) + 1}})}>NEXT</Button>
	</div>;
}

export async function getServerSideProps({query: {title, page}} : GetServerSidePropsContext) {
	const store = initializeStore({} as RootState);
	const { dispatch }: {dispatch: ThunkDispatch<RootState, unknown, ActionsType>} = store;

	dispatch(loadNewSearchPage(page as string, title as string));
	return {
		props: {
			query: {title}
		}
	};
}

export default Search;
