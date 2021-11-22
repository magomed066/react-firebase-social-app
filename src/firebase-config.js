import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
} from 'firebase/auth'

const firebaseConfig = {
	// apiKey: process.env.API_KEY,
	// authDomain: process.env.AUTH_DOMAIN,
	// projectId: process.env.PROJECT_ID,
	// storageBucket: process.env.STORAGE_BUCKET,
	// messagingSenderId: process.env.MESSAGING_SENDER_ID,
	// appId: process.env.APP_ID,
	// measurementId: process.env.MEASUREMENT_ID,
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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

const signInWithGoogle = () => signInWithPopup(auth, provider)

export { app, auth, signInWithGoogle, onAuthStateChanged }
