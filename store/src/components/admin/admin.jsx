import React from 'react'
import './admin.css'

const URI = 'http://localhost:8000/login/user'

function Admin() {
    return (
        <>
            <div class="container"></div>

            <header>
                <div class="headerContainer">
                    <img class="imgAWS" src="./AWS.png" alt="AWS"/>
                    <span> ADMINISTRADOR </span>
                </div>
            </header>
            <main>
                <div class="containerMain">
                    <span>SELECCIONE EL PRODUCTO A MODIFICAR</span>
                    <div class="separation"></div>
                    <form>
                        <select name="menu">
                            <option>Uno</option>
                            <option>Dos</option>
                            <option>Tres</option>
                        </select>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Admin;