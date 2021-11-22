import { Feed, Login } from '../../pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from '../not-found/NotFound'
import ProtectedRoute from '../protected-route/ProtectedRoute'

const App = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/feed"
						element={
							<ProtectedRoute>
								<Feed />
							</ProtectedRoute>
						}
					/>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
