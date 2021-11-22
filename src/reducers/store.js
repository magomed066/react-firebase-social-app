import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './auth/authReducer'

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action,
		})
	}
	return next(action)
}

const reducers = combineReducers({
	auth: authReducer,
})

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk, stringMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
)

export default store
