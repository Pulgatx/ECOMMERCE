import './login.css';
import React from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';

const URI = 'https://servidor-1b10.onrender.com/login/user'


function Login() {
    const navigate = useNavigate();

    var user = '';
    var password = '';
    function getUser(name, value) {
        if (name === 'usuario')
            user = value;
    }

    function getPassword(name, value) {
        if (name === 'password')
            password = value;
    }

    function navigateStore () {
        navigate("/")
    }

    function Submit() {
        const account = {user: user, password: password}
        const body = {
            username: account.user,
            password: account.password
        }
        axios.post(URI, body)
        .then(({data}) => {
            if(account.user === data.username && account.password === data.password){
                navigateStore();
                sessionStorage.setItem("LOGIN", true);
            } else if (data === "") {
                alert("Usuario y/o contraseña incorrectos");
            }
            console.log({data});
        });
    }

    function handleAnswerChange(event) {
            if(event.key === "Enter"  ){
                Submit();
        }
    }

    function navigateRegister () {
        navigate("/register");
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
                            <input type="password" id="Contraseña" name="password" onChange={(e) => { getPassword(e.target.name, e.target.value) }} onKeyUp = {handleAnswerChange} />
                        </div>
                        <button className="btn" onClick={Submit}>ENTRAR</button>
                        <br/>
                        <div class="redirection" onClick={navigateRegister}> SIGN UP</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;