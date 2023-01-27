import './login.css';
import encriptador from './encripta';
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URI = 'http://localhost:8000/login'

function Login() {
    const [Logins, setLogins] = useState([])

    useEffect(() => {
        getLogins()
    }, [])

    //procedimineto para mostrar todos los Login
    const getLogins = async () => {
        const res = await axios.get(URI)
        setLogins(res.data)
    }

    var user = '';
    var password = '';
    function getUser(name, value) {
        if (name === 'usuario')
            user = value;

        console.log(user)
    }

    function getPassword(name, value) {
        if (name === 'password')
            password = value;

        console.log(password)
    }

    function Submit() {
        var account = { user, password };
        if (account.user.length > 0 && account.password.length > 0)
        {   console.log(account);

            Logins.map(login => {
                if(account.user == login.user){
                    console.log("usuarios iguales");
                } else {
                    alert("Usuario y/o contraseña incorrectos");
                }
            });
        }
        else 
             alert("Por favor no dejes campos vacios");
    }

    return (
        <div className="containerGlobal">
            <div className="background"> </div>
            <div className="containerItems">
                <div className="containerLogo">
                    <img className="logoParche" src="./AWS.png" alt="logoAWS" />
                </div>
                <div className="containerLogin">
                    <div className="loginTitulo">Sign In</div>
                    <br />
                    <div className="containerText">
                        <span className="Usuario">Usuario</span>
                        <input type="text" id="Usuario" name="usuario" onBlur={(e) => { getUser(e.target.name, e.target.value) }} />
                        <br />
                        <span className="Usuario">Contraseña</span>
                        <div className="password">
                            <input type="password" id="Contraseña" name="password" onBlur={(e) => { getPassword(e.target.name, e.target.value) }} />
                        </div>
                        <button className="btn" onClick={Submit}>ENTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;