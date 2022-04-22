import {Button} from '@mui/material';
import {FormEvent} from 'react';
import styles from './navigation-row.module.less';

export function NavigationRow(
	{currentPage, total, limit, handleBack, handleForward} : 
	{currentPage: number, total: number, limit: number, handleBack: (e: FormEvent) => void, handleForward: (e: FormEvent) => void}
) {
	return (
		<div className={styles.navigationRow}>
			<Button variant="contained" onClick={handleBack} disabled={currentPage === 1}>PREV</Button>
			<Button variant="contained" onClick={handleForward} disabled={currentPage > Math.floor(total/limit)}>NEXT</Button>
		</div>
	);
}