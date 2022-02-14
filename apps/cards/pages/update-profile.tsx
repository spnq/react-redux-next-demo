import {Button, Card, CardActions, CardContent, TextField, Typography} from '@mui/material';
import {updateEmail, updateProfile, User} from 'firebase/auth';
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../firebase';
import {RootState} from '../store/store';
import styles from '../styles/App.module.css';
import Image from 'next/image';
import {setUserProfilePhoto, setUserSettings} from '../store/user/actions';
import {UserState} from '../store/user/types';

function UpdateProfile() {
	const userSettings = (useSelector((state: RootState) => state.user) as UserState).settings;
	const [email, setEmail] = useState(userSettings?.email || '');
	const [displayName, setDisplayName] = useState(userSettings?.displayName || '');
	const dispatch = useDispatch();

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e?.target?.files) {
			handlePhotoUpload(e.target.files[0]);
		}
	};

	const handlePhotoUpload = (file: Blob | Uint8Array | ArrayBuffer) => {
		if (file) {
			const imageStorage = ref(getStorage(), `${userSettings?.uid}/profile-pic`);
			uploadBytes(imageStorage, file).then((snapshot) => {
				return getDownloadURL(ref(getStorage(), snapshot.ref.fullPath));
			}).then((imgPath) => {
				console.log(imgPath)
				updateProfile(auth.currentUser as User, {
					photoURL: imgPath
				}).then(() => dispatch(setUserProfilePhoto(imgPath)));
			});
		}
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateProfile(auth.currentUser as User, {displayName}).then(() => dispatch(setUserSettings({...userSettings, displayName})));
		updateEmail(auth.currentUser as User, email).then(() => dispatch(setUserSettings({...userSettings, email})));
	};

	return (
		<div className={styles.App}>
			<Typography variant="h2" component="h2">
				{userSettings?.displayName || userSettings?.uid}
			</Typography>
			<Card sx={{ minWidth: 900 }}>
				<form onSubmit={handleSubmit}>
					<CardContent style={{flexDirection: 'column'}}>
						<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-evenly',
								maxWidth: '450px',
								marginBottom: '8px',
								gap: '18px',
								flex: '50%',
							}}>
								<TextField style={{maxWidth: '300px'}} value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" />
								<TextField style={{maxWidth: '300px'}} value={displayName} onChange={e => setDisplayName(e.target.value)} label="Dispaly Name" variant="outlined" />
							</div>
							<div style={{flexDirection: 'column', flex: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
								{userSettings?.photoURL && 
									<div style={{width: '100%', height: '100%', position: 'relative'}}>
										<Image src={userSettings?.photoURL.replace('https://firebasestorage.googleapis.com/', '') || ''} placeholder='empty' layout='fill' objectFit='contain'></Image>
									</div>
								}

								<Button
									variant="contained"
									component="label"
									style={{maxWidth: '300px'}}
								>
									PICK NEW PHOTO
									<input
										type="file"
										hidden
										onChange={handleFileSelect}
									/>
								</Button>
							</div>
						</div>
						<CardActions>
							<Button type='submit'>UPDATE</Button>
						</CardActions>
					</CardContent>
				</form>
			</Card>
		</div>
	);
}

export default UpdateProfile;