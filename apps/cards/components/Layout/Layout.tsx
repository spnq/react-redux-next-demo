
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import SearchRounded from '@mui/icons-material/SearchRounded';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CssBaseline from '@mui/material/CssBaseline';
import React, {MouseEvent, useEffect, useState, KeyboardEvent, useMemo} from 'react';
import Router from 'next/router';
import {Badge, IconButton, InputAdornment, Paper, Popover, TextField, Switch, createTheme, ThemeProvider} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
// import {setNotifications} from '../../store/notifications/actions';
import {setDarkMode, toggleDarkMode} from '../../store/dark-mode/actions';
import styles from './layout.module.less';

function Layout({children}: {children: React.ElementType}) {
	const notifications = useSelector((state: RootState) => state.notifications);
	const [ anchorEl, setAnchorEl ] = useState<EventTarget & Element | null>(null);
	const [ search, setSearch ] = useState('');
	const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
	const dispatch = useDispatch();
	const theme = useMemo(() =>
		createTheme({
			palette: {
				mode: isDarkMode ? 'dark' : 'light'
			},
		}),
	[ isDarkMode ],
	);

	useEffect(() => {
		dispatch(setDarkMode());
	}, [dispatch]);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const handleOpenPopOver = (event: MouseEvent) => {
		setAnchorEl(event.currentTarget);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	const handleKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
		if (event.key === 'Enter') {
			Router.push({
				pathname: '/search', query: {
					title: search,
					page: 1
				}
			});
		}
	};

	const handleToggle = () => dispatch(toggleDarkMode());

	return (<ThemeProvider theme={theme}>
		<CssBaseline />
		<AppBar position="static" className={styles.AppBar}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						className={styles.brand}
						variant="h6"
						noWrap
						component="div"
					>
						DEMO
					</Typography>
					<Box className={styles.box}>
						<Button onClick={() => Router.push({pathname: '/'})} variant='contained'>HOME</Button>
						<Button onClick={() => Router.push({pathname: '/create'})} variant='contained'>CREATE</Button>
					</Box>
					<Box className={styles.box}>
						<Button onClick={() => Router.push({pathname: '/login'})} variant='contained'>LOGIN</Button>
						<Button variant='contained'>SIGN OUT</Button>
					</Box>

					<Box>
						<TextField
							variant="standard"
							value={search}
							onKeyDown={handleKeyDown}
							onChange={handleSearch}
							className={styles.search}
							size="medium"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchRounded />
									</InputAdornment>
								),
							}}
						/>
					</Box>

					<Box className={styles.notification}>
						<Tooltip title="Notification">
							<IconButton onClick={handleOpenPopOver}>
								<Badge badgeContent={notifications.length} color="primary">
									<MailIcon color="action" />
								</Badge>
							</IconButton>
						</Tooltip>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							className={styles.popover}
						>
							<Paper elevation={3} className={styles.paperOuter}>
								{notifications && notifications.map(notification =>
									<Paper className={styles.paperInner} elevation={3} key={notification.id}>{notification.message}</Paper>
								)}
							</Paper>
						</Popover>
					</Box>
					<Box>
						<Switch checked={isDarkMode} onChange={handleToggle} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
		<main>
			{children}
		</main>
	</ThemeProvider>);
}

export default Layout;
