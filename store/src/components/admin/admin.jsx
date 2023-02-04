import React, { useEffect, useState } from 'react'
import './admin.css'
import axios from 'axios';
import { ProductosListado } from './productAdmin';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/products'

function Admin() {

    const [products, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const res = await axios.get(URI)
        setProduct(res.data)
    }

    function logout () {
        sessionStorage.removeItem("ADMIN");
        sessionStorage.removeItem("LOGIN");
        navigate("/");
    }
    function changeAdmin () {
        navigate("/admin-change");
    }
    return (
        <div className="containerAdmin">
            <div className="containerHeader">
                <div className="containerTitle"> ADMINISTRADOR</div>
                <div onClick={logout} className="containerTitle"> LOG OUT</div>
                <div onClick={changeAdmin} className="containerTitle"> MODIFICAR ADMINISTRADOR</div>
            </div>
            <div className="productosLIST">
                <div className="productList">
                {   products.map(product => (
                        <ProductosListado 
                            data = {product}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default Admin;