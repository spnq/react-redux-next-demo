import {Typography, Toolbar, AppBar, Container} from '@mui/material';
import styles from './navbar.module.less';

export function Navbar({children, title} : {children: JSX.Element[], title: string}) {
	return (
		<AppBar position="static" className={styles.AppBar}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						className={styles.brand}
						variant="h6"
						noWrap
						component="div"
					>
						{title}
					</Typography>
					{children}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
