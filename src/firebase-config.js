import { initializeApp } from 'firebase/app'
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { collection, onSnapshot } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyC69FD8l0BoxW4mUNhElVGP-znO4ZyO31w',
	authDomain: 'social-media-app-962a3.firebaseapp.com',
	projectId: 'social-media-app-962a3',
	storageBucket: 'social-media-app-962a3.appspot.com',
	messagingSenderId: '161246098339',
	appId: '1:161246098339:web:5541f71d5b9a4a78582016',
	measurementId: 'G-L180HE1CNX',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore()

export {
	auth,
	db,
	collection,
	onSnapshot,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
}
