import styles from './titled-page.module.less';
import {Typography} from '@mui/material';

export function TitledPage({children, title} : {children: JSX.Element[], title: string}) {
	return (
		<div className={styles.page}>
			<Typography variant="h2" component="h2">
				{title}
			</Typography>
			{children}
		</div>
	);
}