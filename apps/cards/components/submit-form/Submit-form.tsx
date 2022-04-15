import {Typography, Card, CardContent, CardActions, Button} from '@mui/material';
import {FormEvent} from 'react';
import styles from './Submit-form.less';

export default function SubmitForm(
	{handleSubmit, title, actionName, children}: 
	{handleSubmit: (e: FormEvent) => void, title: string, actionName: string, children: JSX.Element[]}
) {
	return (
		<div className={styles.submitForm}>
			<Typography variant="h2" component="h2">
				{title.toUpperCase()}
			</Typography>
			<Card className={styles.card}>
				<form onSubmit={handleSubmit}>
					<CardContent className={styles.cardContent}>
						<div className={styles.inputs}>
							{children}
						</div>
						<CardActions>
							<Button type='submit' variant="contained">{actionName.toUpperCase()}</Button>
						</CardActions>
					</CardContent>
				</form>
			</Card>
		</div>
	);
}
