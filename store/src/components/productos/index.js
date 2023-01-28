import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URI = 'http://localhost:8000/blogs'

export const ProductosList = ({funcion}) => {

	const [blogs, setBlog] = useState([])
	useEffect(() => {
		getBlogs()	
	}, [])

	//procedimineto para mostrar todos los blogs
	const getBlogs = async () => {
		const res = await axios.get(URI)
		setBlog(res.data)
	}
	
	return (
		<>
			<h1 className="produ">PRODUCTOS</h1>
			<div className="productos">
				{
					blogs.map(blog => (
					<div key={blog.id} className="producto">
						<h1>{blog.name}</h1>
						<div className="producto__img slide-var">
							<ul>
								<li><img src={blog.img1} alt={blog.name} /> </li>
								<li><img src={blog.img2} alt={blog.name} /> </li>
								<li><img src={blog.img3} alt={blog.name} /> </li>
							</ul>
						</div>
						<div className="producto__footer">
							<p> SNEAKERS </p>
							<p className="price">$ {Intl.NumberFormat({style: 'currency', currency: 'USD',minimumFractionDigits: 0}).format(blog.price)}</p>
						</div>
						<div className="bottom">
								<button className="btn" onClick={() => funcion(blog.id)}>Añadir al carrito</button>
							</div>
					</div>
					))
				}
			</div>
		</>
	)
}
