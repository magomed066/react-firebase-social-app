import React from 'react'
import { Row, Col, Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
const NotFound = () => {
	return (
		<div className={classes['not-found']}>
			<div className="not-found-content">
				<Container>
					<Row>
						<Col xs={12} sm={12} md={12} lg={12}>
							<Alert variant="info">Page not found 404</Alert>
							<Link to="/" className={classes.link}>
								<span>Back</span>
								<i className="fas fa-long-arrow-alt-left"></i>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default NotFound
