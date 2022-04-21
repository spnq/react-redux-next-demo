import {ICardsState} from 'apps/cards/store/cards/types';
import {IPage} from 'apps/cards/store/page/types';
import {RootState} from 'apps/cards/store/store';
import {useSelector} from 'react-redux';
import {CardDisplayList} from '../../../../../visual-libs/awesome-lib/card-display-list';
import {TitledPage, NavigationRow} from 'visual-libs/structure';
import {useRouter} from 'next/router';

const LIMIT = 3;

export default function App (): JSX.Element {
	const {currentPage} : IPage = useSelector((state: RootState) => state.page);
	const {current: cards, total} : ICardsState = useSelector((state: RootState) => state.cards);
	const router = useRouter();

	return (
		<TitledPage title={'All Cards'}>
			<CardDisplayList cards={cards} actionName={'Learn More'} action={(id: string | number | undefined) => router.push({pathname: `/card/${id}`})}></CardDisplayList>
			<NavigationRow currentPage={currentPage} total={total} limit={LIMIT} handleBack={() => ({})} handleForward={() => ({})}/>
		</TitledPage>
	);
}