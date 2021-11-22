import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../actions/auth/auth'
import classes from './style.module.css'

const UserProfileCard = () => {
	const user = JSON.parse(localStorage.getItem('user'))
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onLogout = () => {
		dispatch(logout())

		return navigate('/', { replace: true })
	}
	return (
		<Card className={`${classes.card} pt-3 border-0 shadow`}>
			<Image src={user.photoURL} className={classes['user__photo']} />
			<Card.Title className="mt-3">{user.displayName}</Card.Title>
			<Card.Text className="mt-3">
				<span className="fw-bold">E-mail:</span> {user.email}
			</Card.Text>

			<Card.Footer className="w-100">
				<Button onClick={onLogout}>Logout</Button>
			</Card.Footer>
		</Card>
	)
}

export default UserProfileCard
