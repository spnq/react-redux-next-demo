import {Card, CardContent, Typography} from '@mui/material';
import React from 'react';
import styles from '../styles/App.module.css';

interface Post {
	id: number;
	body: string;
	title: string;
	userId: number;
}

interface User {
	id: number;
	name: string;
}

function Home({post, user}:{post: Post, user: User}) {
	return <div className={styles.App}>
		{(post && user) &&
		<Card sx={{ minWidth: 275, maxWidth: 800 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Generated on build time:
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					<b>{post.title}</b>
				</Typography>
				<Typography variant="body2">
					{post.body}
					<br />
				</Typography>
				<Typography variant="body2">
					by <b>{user.name}</b>
					<br />
				</Typography>
			</CardContent>
		</Card>
		}
	</div>;
}

export async function getStaticProps() {
	const URL = 'https://jsonplaceholder.typicode.com';
	const post: Post = await (await fetch(`${URL}/posts/${Math.floor(Math.random() * 100)}`)).json();
	const user: User = await (await fetch(`${URL}/users/${post.userId}`)).json();

	return {
		props: {
			post,
			user
		}
	};
}

export default Home;
