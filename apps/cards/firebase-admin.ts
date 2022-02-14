import admin from 'firebase-admin';
import {applicationDefault} from 'firebase-admin/app';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: applicationDefault(),
		databaseURL: 'https://react-demo-7d4ce-default-rtdb.europe-west1.firebasedatabase.app'
	});
}

export {admin};