import {Button} from '@mui/material';
import {GetServerSidePropsContext} from 'next';
import Router from 'next/router';
import React from 'react';
import {useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {CardDisplayList, ICard} from '../../components/CardDisplayList/CardDisplayList';
import {loadNewSearchPage} from '../../store/search/actions';
import {SearchAction} from '../../store/search/types';
import {initializeStore, RootState} from '../../store/store';
import styles from './Search.module.css';

function Search({query}: {cards: ICard[], query: {title: string}}) {
	const {cards, currentPage: page} = useSelector((state: RootState) => state.search);



	return <div className={styles.search}>
		<div className={styles.seachList}>
			{cards && cards.map( card => (
				<CardDisplayList key={card.id} card={card}></CardDisplayList>
			))}
		</div>
		<Button variant='contained' onClick={() => Router.push({pathname: '/search', query: {...query, page: parseInt(page) + 1}})}>NEXT</Button>
	</div>;
}

export async function getServerSideProps({query: {title, page}} : GetServerSidePropsContext) {
	const store = initializeStore();
	const {dispatch} : {dispatch : ThunkDispatch<RootState, void, SearchAction>} = store;
	await dispatch(loadNewSearchPage(page as string, title as string));
	return {
		props: {
			initialReduxState: {
				search: store.getState().search
			},
			query: {title}
		}
	};
}

export default Search;
