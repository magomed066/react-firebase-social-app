import { AUTH_SUCCESS } from '../constants/constants'

const initState = { user: {} }

export const authReducer = (state = initState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return { ...state, user: action.payload }
		default:
			return state
	}
}
