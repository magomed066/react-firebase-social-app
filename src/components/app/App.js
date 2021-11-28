import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { db, collection, onSnapshot, auth } from '../../firebase-config'
import { Header, Modal, Post } from '../'
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {
	const [posts, setPosts] = useState([])
	const [isActive, setIsActive] = useState(false)
	const [user, setUser] = useState(null)

	useEffect(() => {
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				// User logged in
				console.log(authUser)
				setUser(authUser)

				if (authUser.displayName) {
				} else {
					return authUser.updateProfile({
						displayName: username,
					})
				}
			} else {
				setUser(null)
				// User logged out
			}
		})
	}, [])

	useEffect(() => {
		onSnapshot(collection(db, 'posts'), (snap) => {
			const posts = snap.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}))
			setPosts(posts)
		})
	}, [])

	return (
		<Router>
			<div className="app">
				{isActive && <Modal setIsActive={setIsActive} />}
				<Header setIsActive={setIsActive} />
				{posts.map(({ id, userName, imageUrl, caption }) => (
					<Post
						key={id}
						userName={userName}
						imageUrl={imageUrl}
						caption={caption}
					/>
				))}
			</div>
		</Router>
	)
}

export default App
