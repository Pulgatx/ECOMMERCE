import React from "react";
import { useState } from "react";
import axios from 'axios';

const URI = 'http://localhost:8000/products/';//aqui se hacen las peticiones 

export const ProductosListado = ({ data }) => {
    const { id } = data; //aqui se guardan los datos de los productso
    const [priceHook, setPrice] = useState(''); //hook para el precio del producto
    const [maxStock, setMaxS] = useState('');//hook para el stock maximo
    const [minStock, setMinS] = useState('');//hook para el stock minimo

    const confirm = async (e) => {//funcion para actualizar un producto a partir del id 
        e.preventDefault();
        console.log(priceHook);
        console.log(maxStock);
        console.log(minStock);
        await axios.put(URI + id + '/', { price: priceHook, stockMax: maxStock, stockMin: minStock });
    }

    return (
        <form className='containerUniqueProduct' onSubmit={confirm}>
            <div className="imagen">
                <img src={data.img2} alt={data.productName} />
            </div>
            <div className="productName center">
                <h3 className="inputTitle" >STOCK MINIMO</h3>
                <input type="number" className='inputText'  onChange={ (e) => setMinS(e.target.value)}
                defaultValue={data.stockMin} placeholder={data.stockMin} />
            </div>
            <div className="productName center">
                <h3 className="inputTitle">STOCK MAXIMO</h3>
                <input type="number" className='inputText'  onChange={ (e) => setMaxS(e.target.value)}
                defaultValue={data.stockMax} placeholder={data.stockMax} />
            </div>
            <div className="productName center">
                <h3 className="inputTitle">VALOR PRODUCTO</h3>
                <input type="number" className='inputText'  onChange={ (e) => setPrice(e.target.value)}
                defaultValue ={data.price} placeholder={data.price} />
            </div>
            <div className="bottom center">
                <input type="submit" className="btn" value="EDITAR" />
            </div>
        </form>
    )
}
