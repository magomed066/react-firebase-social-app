import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login } from '../../actions/auth/auth'
import { signInWithGoogle } from '../../firebase-config'
import classes from './style.module.css'

const LoginForm = ({ setUser }) => {
	const dispatch = useDispatch()

	const signIn = async () => {
		const { user } = await signInWithGoogle()

		dispatch(login(user))
		setUser(user)
		localStorage.setItem('user', JSON.stringify(user))

		return <Navigate to="/feed" />
	}

	return (
		<div className={classes.form}>
			<Button
				className={`w-100 mt-3 ${classes['signin-btn']}`}
				onClick={signIn}
			>
				<span>Sign In with Google</span>
				<i className="fab fa-google"></i>
			</Button>
		</div>
	)
}

export default LoginForm
