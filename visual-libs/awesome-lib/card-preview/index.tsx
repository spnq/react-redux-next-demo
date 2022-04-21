import {Card, CardContent, Typography, CardActions, Button} from '@mui/material';
import {ICard} from '..';
import styles from './card-preview.module.less';

export function CardPreview({card, action, actionName} : {
	card: ICard, action: () => Promise<boolean>, actionName: string
}) {
	return (
		<Card key={card.id} className={styles.card}>
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
				<Button variant='contained' onClick={action} size="small">{actionName}</Button>
			</CardActions>
		</Card>
	);
}