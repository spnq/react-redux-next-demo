
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import {SearchRounded} from '@mui/icons-material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CssBaseline from '@mui/material/CssBaseline';
import React, {MouseEvent, useEffect, useState, KeyboardEvent, useMemo} from 'react';
import Router from 'next/router';
import {Badge, IconButton, InputAdornment, Paper, Popover, TextField, Switch, createTheme, ThemeProvider} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {notificationCollection} from '../../firebase';
import {query, onSnapshot} from 'firebase/firestore';
import {RootState} from '../../store/store';
import {setNotifications} from '../../store/notifications/actions';
import {toggleDarkMode} from '../../store/dark-mode/actions';

function Layout({children}: {children: React.ReactNode}) {
	const notifications = useSelector((state: RootState) => state.notifications);
	const [anchorEl, setAnchorEl] = useState<EventTarget & Element | null>(null);
	const [search, setSearch] = useState('');
	const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
	const dispatch = useDispatch();
	const theme = useMemo(() =>
		createTheme({
			palette: {
				mode: isDarkMode ? 'dark' : 'light'
			},
		}),
	[isDarkMode],
	);

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
	const handleKeyDown = (event:  KeyboardEvent<HTMLImageElement>) => {
		if (event.key === 'Enter') {
			Router.push({pathname: '/search', query: {
				title: search,
				page: 1
			}});
		}
	};

	const handleToggle = () => dispatch(toggleDarkMode());

	useEffect(() => {
		const docsRef = query(notificationCollection);
		const unsubscribe = onSnapshot(docsRef, (snapshot) => {
			const data = snapshot.docs.map(doc => doc.data());
			dispatch(setNotifications([...data]));
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
						>
							DEMO
						</Typography>
						<Box sx={{ flexGrow: 1, alignItems: 'center' ,display: { xs: 'none', md: 'flex' } }}>
							<Button onClick={() => Router.push({pathname: '/'})} style={{margin: '12px'}} variant='contained'>HOME</Button>
							<Button onClick={() => Router.push({pathname: '/submit-form'})} variant='contained'>CREATE</Button>
						</Box>

						<Box>
							<TextField 
								variant="standard"
								value={search} 
								onKeyDown={handleKeyDown} 
								onChange={handleSearch}
								size="medium"
								style={{
									marginRight: '8px'
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchRounded />
										</InputAdornment>
									),
								}}
							/>
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Notification">
								<IconButton onClick={handleOpenPopOver} sx={{ p: 0 }}>
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
								style={{
									minHeight: '100%'
								}}
							>
								<Paper elevation={3} sx={
									{
										display: 'block',
										overflow: 'auto'
									}
								}>
									{notifications && notifications.map(notification => 
										<Paper elevation={3} style={{padding: '12px', margin: '20px'}} key={notification.id}>{notification.message}</Paper>
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
		</ThemeProvider>
	);
}

export default Layout;
