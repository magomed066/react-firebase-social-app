import React from 'react'
import ReactDom from 'react-dom'
import FileBase64 from 'react-file-base64'
import { getFirestore } from '../../firebase-config'
import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { collection, doc, setDoc } from 'firebase/firestore'

const initState = {
	id: '',
	author: '',
	desc: '',
	image: '',
	tags: '',
	likes: 0,
	likedBy: [],
}

const ModalItem = ({ handleClose, show }) => {
	const [formData, setFormData] = useState(initState)
	const user = JSON.parse(localStorage.getItem('user'))

	useEffect(() => {
		setFormData({
			...formData,
			author: {
				email: user.email,
				fullName: user.displayName,
				id: user.uid,
			},
			id: uuidv4(),
			publishedAt: new Date().toLocaleString(),
		})
	}, [])

	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault()

		const db = getFirestore()

		const postRef = doc(collection(db, 'posts'))
		await setDoc(postRef, formData)
	}
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add new post</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={onSubmitHandler}>
					<Form.Group className="mb-3">
						<Form.Label>Description</Form.Label>
						<Form.Control
							type="text"
							name="desc"
							placeholder="Input..."
							onChange={onChangeHandler}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Tags</Form.Label>
						<Form.Control
							type="text"
							name="tags"
							placeholder="#smth#smth"
							onChange={onChangeHandler}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Image</Form.Label>

						<FileBase64
							onDone={({ base64 }) =>
								setFormData({ ...formData, image: base64 })
							}
						/>
					</Form.Group>
					<Button type="submit" variant="primary" className="w-100 mt-4">
						Add post
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="danger" onClick={handleClose}>
					Reset
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

const portalElement = document.getElementById('modal-dialog')

const PostForm = ({ show, setShow }) => {
	const handleClose = () => setShow(false)

	return (
		<>
			{ReactDom.createPortal(
				<ModalItem show={show} handleClose={handleClose} />,
				portalElement,
			)}
		</>
	)
}

export default PostForm
