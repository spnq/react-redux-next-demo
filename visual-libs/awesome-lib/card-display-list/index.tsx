import {CardPreview} from '../card-preview';
import styles from './card-display-list.module.less';

export interface ICard {
  id?: number | string;
  title: string;
  description: string;
}

export const CardDisplayList = ({ cards, action, actionName } : { cards: ICard[], action: (id: string | number | undefined) => Promise<boolean>, actionName: string}): JSX.Element => {

	return (
		<div className={styles.displayList}>
			{cards && cards.map( card => (
				<CardPreview card={card} key={card.id} actionName={actionName} action={() => action(card.id)} />
			))}
		</div>
	);
};
