import HomePage from './pages/Home'
import ProductPage from './pages/ListProduct'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="product" element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
