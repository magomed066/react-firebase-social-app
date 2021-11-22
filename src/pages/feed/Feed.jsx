import React from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, UserProfileCard, Post, PostForm } from '../../components'
import { getFirestore } from '../../firebase-config'
import { collection, onSnapshot } from 'firebase/firestore'
import { useState } from 'react'

const Feed = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(async () => {
		setLoading(true)
		const db = getFirestore()

		onSnapshot(collection(db, 'posts'), (snap) => {
			const posts = snap.docs.map((doc) => doc.data())

			setPosts(posts)
			setLoading(false)
		})
	}, [])

	console.log(posts)

	const load = loading ? <h2>Loading...</h2> : ''

	const content = !loading
		? posts.map((post) => (
				<Post key={post.id || Math.floor(Math.random() * 10000)} item={post} />
		  ))
		: null

	return (
		<>
			<Header />
			<Container className="mt-5">
				<Row className="d-flex justify-content-between">
					<Col xs={12} sm={12} md={4}>
						<UserProfileCard />
					</Col>
					<Col xs={12} sm={12} md={8}>
						{load}
						{content}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Feed
