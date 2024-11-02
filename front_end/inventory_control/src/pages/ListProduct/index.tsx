import { useEffect, useState } from 'react'
import Products from '../../Components/Product'

const ProductPage = () => {
	const [product, setProduct] = useState([])

	return <Products />
}

export default ProductPage
