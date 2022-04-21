import {Typography, Card, CardContent, CardActions, Button} from '@mui/material';
import {FormEvent} from 'react';
import {StackedInputs} from 'visual-libs/structure';
import styles from './submit-form.less';

export function SubmitForm(
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
						<StackedInputs>
							{children}
						</StackedInputs>
						<CardActions>
							<Button type='submit' variant="contained">{actionName.toUpperCase()}</Button>
						</CardActions>
					</CardContent>
				</form>
			</Card>
		</div>
	);
}
