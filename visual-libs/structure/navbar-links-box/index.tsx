import {Box} from '@mui/material';
import styles from './navbar-links-box.module.less';

export function NavBox({children} : {children: JSX.Element[] | JSX.Element}) {
	return (
		<Box className={styles.box}>
			{children}
		</Box>
	);
}