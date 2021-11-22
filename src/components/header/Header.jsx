import React from 'react'
import { useState } from 'react'
import {
	Container,
	Form,
	FormControl,
	Navbar,
	Row,
	Button,
	NavDropdown,
	Image,
} from 'react-bootstrap'
import PostForm from '../post-form/PostForm'
import classes from './style.module.css'

const Header = () => {
	const [show, setShow] = useState(false)
	return (
		<Container fluid>
			<Row>
				<Navbar bg="dark" variant="dark" className="p-3">
					<Container>
						<Navbar.Brand>Social App</Navbar.Brand>

						<Form className="d-flex ms-auto">
							<Button
								variant="light"
								className={`${classes['add__btn']} me-3`}
								onClick={() => setShow(true)}
							>
								<i className="far fa-plus-square"></i>
							</Button>
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Container>
				</Navbar>
			</Row>

			<PostForm show={show} setShow={setShow} />
		</Container>
	)
}

export default Header
