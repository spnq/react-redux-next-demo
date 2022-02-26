import {Card, CardContent, Typography, CardActions, Button} from '@mui/material';
import Link from 'next/link';

export interface ICard {
  id?: number | string;
  title: string;
  description: string;
}

export const CardDisplayList = ({ card } : { card: ICard}): JSX.Element => {
	return (
		<Card sx={{width: 275, margin: 8}}>
			<CardContent>
				<Typography sx={{fontSize: 14}} color="text.primary" gutterBottom>
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
