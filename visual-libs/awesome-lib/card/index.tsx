import {Paper, Typography, TextField, Button, CardActions} from '@mui/material';
import {StackedInputs} from '../../structure';
import styles from './card.module.less';

export function Card({title, description, backAction} : {title: string, description: string, backAction: () => Promise<boolean>}) {
	return (
		<div className={styles.card}>
			<Paper className={styles.paper} elevation={3}>
				<Typography variant="h3" component="h3">
					{title}
				</Typography>
				<StackedInputs>
					<TextField disabled value={title} label="Title" variant="outlined" />
					<TextField disabled value={description} label="Description" variant="outlined" />
				</StackedInputs>
				<CardActions>
					<Button variant="contained" onClick={backAction}>BACK</Button>
				</CardActions>
			</Paper>
		</div>
	);
}
