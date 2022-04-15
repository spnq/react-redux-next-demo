import {Button, Typography} from '@mui/material';
import {ICardsState} from 'apps/cards/store/cards/types';
import {IPage} from 'apps/cards/store/page/types';
import {RootState} from 'apps/cards/store/store';
import {useDispatch, useSelector} from 'react-redux';
import {CardDisplayList} from '../../card-display-list/CardDisplayList';
import {setPrevPage, setNextPage} from '../../../store/page/actions';
import styles from './Root.module.less';

const LIMIT = 3;

export default function App (): JSX.Element {
	const {currentPage} : IPage = useSelector((state: RootState) => state.page);
	const {current: cards, total} : ICardsState = useSelector((state: RootState) => state.cards);
	const dispatch = useDispatch();

	return (
		<div className={styles.App}>
			<Typography variant="h2" component="h2">
				All Cards
			</Typography>
			<div className={styles.displayList}>
				{cards && cards.map( card => (
					<CardDisplayList key={card.id} card={card}></CardDisplayList>
				))}
			</div>
			<div className={styles.buttonRow}>
				<Button variant="contained" disabled={currentPage === 1} onClick={() => dispatch(setPrevPage())}>PREV</Button>
				<Button variant="contained" disabled={currentPage > Math.floor(total/LIMIT)} onClick={() => dispatch(setNextPage())}>NEXT</Button>
			</div>
		</div>
	);
}