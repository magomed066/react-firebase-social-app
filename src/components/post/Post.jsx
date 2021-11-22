import React from 'react'
import { Card, Button } from 'react-bootstrap'
import classes from './style.module.css'

const Post = ({ item }) => {
	return (
		<Card className={`${classes.card} shadow border-0 rounded-2`}>
			<Card.Img
				variant="top"
				className={classes['card__img']}
				src={item.image}
				alt="post-image"
			/>

			<Card.ImgOverlay className="text-end">
				<Button variant="dark" className="ms-auto">
					<i className="fas fa-ellipsis-v"></i>
				</Button>
			</Card.ImgOverlay>

			<Card.Body>
				<Card.Title>{item.desc}</Card.Title>
				{/* <Card.Text className="text-secondary">Published at: 22:11:21</Card.Text> */}

				<Card.Text className="">
					Tags: <span className="text-primary">{item.tags}</span>
				</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex">
				<Button className="me-2" variant="none">
					<i className="far fa-heart"></i>
					<span className="ms-2">{item.likes}</span>
				</Button>
				<Button variant="none">
					<i className="fas fa-bookmark"></i>
				</Button>
				<Button
					variant="danger"
					type="button"
					onClick={() => console.log('he')}
				>
					<i className="fas fa-trash-alt"></i>
				</Button>
			</Card.Footer>
		</Card>
	)
}

export default Post
