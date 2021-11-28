import React from 'react'

import classes from './header.module.scss'

const Header = ({ setIsActive }) => {
	return (
		<header className={classes.header}>
			<div className={classes['header-container']}>
				<div className={classes['header-logo']}>
					<img
						src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
						alt="logo"
						className={classes['header__img']}
					/>
				</div>
				<button
					className={classes['header__btn']}
					onClick={() => setIsActive(true)}
				>
					Sign Up
				</button>
			</div>
		</header>
	)
}

export default Header
