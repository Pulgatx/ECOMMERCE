import React from 'react'
import './admin.css'

    // const URI = 'http://localhost:8000/login/user'

function Admin() {
    return (
        <div className="containerGlobal">
        <div className="containerHeader">
            <div className="containerTitle"> ADMINISTRADOR</div>
            <div className="containerTitle"> LOG OUT</div>
            <div className="containerTitle"> MODIFICAR ADMINISTRADOR</div>
        </div>
        <br/>
        <h1 className="produ">PRODUCTOS</h1>
        <br/>
        <div className="productos">
            <br/>
            <div className="imagen">
                <img src="#" alt="LOGO" />
            </div>
            <div className="producto">
                <div className="productName center">
                    <h3 className="inputTitle" >STOCK MINIMO</h3>
                    <input type="text" name="stockMin" id="1" value = "1234" placeholder="123"/>
                </div>
                <div className="productName center">
                    <h3 className="inputTitle">STOCK MAXIMO</h3>
                    <input type="text" name="stockMax" id="1" value = "1234" placeholder="123"/>
                </div>
                <div className="productName center">
                    <h3 className="inputTitle">VALOR PRODUCTO</h3>
                    <input type="text" name="price" id="1" value = "1234" placeholder="123"/>
                </div>
                <div className="bottom center">
                    <button className="btn" >GUARDAR CAMBIOS</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Admin;