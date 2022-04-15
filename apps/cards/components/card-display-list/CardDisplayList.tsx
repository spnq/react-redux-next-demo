import {Card, CardContent, Typography, CardActions, Button} from '@mui/material';
import Link from 'next/link';
import styles from './CardDisplayList.module.less';

export interface ICard {
  id?: number | string;
  title: string;
  description: string;
}

export const CardDisplayList = ({ card } : { card: ICard}): JSX.Element => {
	return (
		<Card className={styles.card}>
			<CardContent className={styles.content}>
				<Typography color="text.primary" gutterBottom>
					{card.title}
				</Typography>
				<Typography variant="body2">
					{card.description}
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Link prefetch={false} href={`/card/${card.id}`}>
					<Button variant='contained' size="small">Learn More</Button>
				</Link>
			</CardActions>
		</Card>
	);
};
