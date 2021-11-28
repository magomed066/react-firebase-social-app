import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import reactDOM from 'react-dom'
import { auth } from '../../../firebase-config'
import classes from './modal.module.scss'

const ModalBackdrop = ({ setIsActive }) => (
	<div
		onClick={() => setIsActive((prev) => !prev)}
		className={classes['modal__overflow']}
	></div>
)

const initState = {
	userName: '',
	email: '',
	password: '',
}

const ModalContent = ({ setIsActive }) => {
	const [data, setData] = useState(initState)
	const [error, setError] = useState(false)

	const onChangeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault()

		await createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((data) => {
				clear()
				setIsActive()
			})
			.catch((err) => setError(err.message))
	}

	const clear = () => setData(initState)

	return (
		<div className={classes.modal}>
			<ModalBackdrop setIsActive={setIsActive} />
			<div className={classes['modal-dialog']}>
				{error && <h4>{error}</h4>}
				<img
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="modal__logo"
					className={classes['modal-dialog__logo']}
				/>

				<form className={classes['modal-form']} onSubmit={onSubmitHandler}>
					<div className={classes['modal-form__group']}>
						<label htmlFor="userName" className={classes['modal-form__label']}>
							User name
						</label>
						<input
							id="userName"
							type="text"
							className={classes['modal-form__input']}
							name="userName"
							value={data.userName}
							onChange={onChangeHandler}
						/>
					</div>
					<div className={classes['modal-form__group']}>
						<label htmlFor="email" className={classes['modal-form__label']}>
							Email
						</label>
						<input
							id="email"
							type="text"
							className={classes['modal-form__input']}
							value={data.email}
							name="email"
							onChange={onChangeHandler}
						/>
					</div>
					<div className={classes['modal-form__group']}>
						<label htmlFor="password" className={classes['modal-form__label']}>
							Password
						</label>
						<input
							id="password"
							type="password"
							className={classes['modal-form__input']}
							name="password"
							value={data.password}
							onChange={onChangeHandler}
						/>
					</div>

					<button type="submit" className={classes['modal-form__btn']}>
						Sign Up
					</button>
					<button
						className={classes['modal__close']}
						onClick={() => setIsActive((prev) => !prev)}
					>
						&times;
					</button>
				</form>
			</div>
		</div>
	)
}

const Modal = ({ setIsActive }) => {
	return (
		<>
			{reactDOM.createPortal(
				<ModalContent setIsActive={setIsActive} />,
				document.getElementById('modal'),
			)}
		</>
	)
}

export default Modal
