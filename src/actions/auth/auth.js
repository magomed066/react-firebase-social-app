import { AUTH_LOGOUT, AUTH_SUCCESS } from '../../reducers/constants/constants'

export const login = (user) => {
	return {
		type: AUTH_SUCCESS,
		payload: user,
	}
}
export const logout = () => {
	localStorage.removeItem('user')

	return {
		type: AUTH_LOGOUT,
	}
}
