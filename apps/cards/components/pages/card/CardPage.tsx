import {Button, Paper, TextField, Typography} from '@mui/material';
import {useRouter} from 'next/router';
import styles from './Card.module.less';

export function CardPage({title, description} : {title: string, description: string}): JSX.Element {
	const router = useRouter();

	return (
		<div className={styles.card}>
			<Paper className={styles.paper} elevation={3}>
				<Typography variant="h3" component="h3">
					{title}
				</Typography>
				<div className={styles.inputs}>
					<TextField disabled value={title} label="Title" variant="outlined" />
					<TextField disabled value={description} label="Description" variant="outlined" />
				</div>
				<div className={styles.buttonRow}>
					<Button variant="contained" onClick={() => router.push({
						pathname: '/'
					})}>BACK</Button>
				</div>
			</Paper>
		</div>
	);
}
