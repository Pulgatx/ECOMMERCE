import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URI = 'http://localhost:8000/products' 

export const ProductosList = ({funcion}) => {

	const [Products, setProduct] = useState([])
	useEffect(() => {
		getProducts()	
	}, [])

	//procedimineto para mostrar todos los Products
	const getProducts = async () => {
		const res = await axios.get(URI)
		setProduct(res.data)
	}
	return (
		<>
			<h1 className="produ">PRODUCTOS</h1>
			<div className="productos">
				{
					Products.map(product => (
					<div key={product.id} className="producto">
						<h1>{product.productName}</h1>
						<div className="producto__img slide-var">
							<ul>
								<li><img src={product.img1} alt={product.productName} /> </li>
								<li><img src={product.img2} alt={product.productName} /> </li>
								<li><img src={product.img3} alt={product.productName} /> </li>
							</ul>
						</div>
						<div className="producto__footer">
							<p> {product.description} </p>
							<p className="price">$ {Intl.NumberFormat({style: 'currency', currency: 'USD',minimumFractionDigits: 0}).format(product.price)}</p>
						</div>
						<div className="bottom">
								<button className="btn" onClick={() => funcion(product.id)}>Añadir al carrito</button>
							</div>
					</div>
					))
				}
			</div>
		</>
	)
}
