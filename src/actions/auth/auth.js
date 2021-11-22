import { AUTH_SUCCESS } from '../../reducers/constants/constants'

export const login = (user) => {
	return {
		type: AUTH_SUCCESS,
		payload: user,
	}
}
