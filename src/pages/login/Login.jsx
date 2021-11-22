import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../../components'
import classes from './style.module.css'

const Login = () => {
	const [user, setUser] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'))

		if (user) {
			return navigate('/feed', { replace: true })
		}
	}, [user])

	return (
		<div className={classes.login}>
			<Container className="container">
				<Row className={`shadow rounded ${classes['overflow__hidden']}`}>
					<Col md={6} lg={6} className="p-0 login-img">
						<Image
							src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
							alt="bg-image"
							className={classes['login__bg']}
						/>
					</Col>
					<Col md={6} className={classes['login-form']}>
						<LoginForm setUser={setUser} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Login
