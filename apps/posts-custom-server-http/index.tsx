import {Card, CardContent, Typography} from '@mui/material';
import React from 'react';

function Home() {
	return <div>
		{
			<Card sx={{minWidth: 275, maxWidth: 800}}>
				<CardContent>
					<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
						Generated on build time:
					</Typography>
					<Typography sx={{mb: 1.5}} color="text.secondary">
						{Math.random()}
					</Typography>
					<Typography variant="body2">
						<br />
					</Typography>
					<Typography variant="body2">
						<br />
					</Typography>
				</CardContent>
			</Card>
		}
	</div>;
}

export default Home;