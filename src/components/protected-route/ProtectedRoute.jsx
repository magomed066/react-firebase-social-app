import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
	const isAuthenticated = JSON.parse(localStorage.getItem('user'))

	if (isAuthenticated) {
		return children
	}

	return <Navigate to="/" />
}

export default ProtectedRoute
