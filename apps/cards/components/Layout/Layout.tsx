import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useEffect, useState, KeyboardEvent, useMemo} from 'react';
import Router from 'next/router';
import {Switch, createTheme, ThemeProvider} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Navbar, NavBox, SearchField, NotificationsBox} from 'visual-libs/structure';
import {setDarkMode, toggleDarkMode} from '../../store/dark-mode/actions';
// import {setNotifications} from '../../store/notifications/actions';

function Layout({children}: {children: React.ElementType}) {
	const notifications = useSelector((state: RootState) => state.notifications);
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
	}, [ dispatch ]);


	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
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

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar title={'DEMO'}>
				<NavBox>
					<Button onClick={() => Router.push({pathname: '/'})} variant='contained'>HOME</Button>
					<Button onClick={() => Router.push({pathname: '/create'})} variant='contained'>CREATE</Button>
				</NavBox>
				<NavBox>
					<Button onClick={() => Router.push({pathname: '/login'})} variant='contained'>LOGIN</Button>
					<Button variant='contained'>SIGN OUT</Button>
				</NavBox>

				<SearchField
					handleKeyDown={handleKeyDown}
					handleSearch={handleSearch}
					searchValue={search}
				/>

				<NotificationsBox notifications={notifications} />
				<Box>
					<Switch checked={isDarkMode} onChange={handleToggle} />
				</Box>
			</Navbar>
			<main>
				{children}
			</main>
		</ThemeProvider>
	);
}

export default Layout;
