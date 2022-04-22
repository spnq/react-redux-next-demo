import {Box, Tooltip, IconButton, Badge, Popover, Paper} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import {INotification} from 'apps/cards/store/notifications/types';
import {MouseEvent, useState} from 'react';
import styles from './notifications-box.module.less';


export function NotificationsBox(
	{notifications} : 
	{notifications: INotification[]}
) {
	const [ anchorEl, setAnchorEl ] = useState<EventTarget & Element | null>(null);
	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const handleOpenPopOver = (event: MouseEvent) => {
		setAnchorEl(event.currentTarget);
	};

	return (
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
	);
}