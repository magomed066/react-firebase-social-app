import { AUTH_LOGOUT, AUTH_SUCCESS } from '../constants/constants'

const initState = { user: {} }

export const authReducer = (state = initState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return { ...state, user: action.payload }
		case AUTH_LOGOUT:
			return initState
		default:
			return state
	}
}
