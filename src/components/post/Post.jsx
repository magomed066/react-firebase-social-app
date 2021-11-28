import React from 'react'

import classes from './post.module.scss'

const Post = ({ imageUrl, userName, caption }) => {
	return (
		<div className={classes.post}>
			<div className={classes['post-header']}>
				<img
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
					alt="post__user"
					className={classes['post__user-img']}
				/>
				<h3>{userName}</h3>
			</div>

			<img src={imageUrl} alt="post__image" className={classes['post__img']} />

			<h4 className={classes['post__text']}>
				<strong>{userName}</strong> {caption}
			</h4>
		</div>
	)
}

export default Post
