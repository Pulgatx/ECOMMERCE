import './register.css';
import React from 'react'
import axios from 'axios'
const URI = 'http://localhost:8000/login'

function Register() {
    var user = '';
    var password = '';
    var email = '';
    var adress = '';

    function getInput(name, value) {
        if (name === 'usuario')
            user = value;
        else if(name === 'email')
            email = value;
        else if(name === 'adress')
            adress = value;
    }

    function getPassword(name, value) {
        if (name === 'password')
            password = value;
    }

    function Submit() {
        const account = {user: user, password: password, email: email, adress: adress}
        const body = {
            user: user,
            password: password,
            email: email, 
            adress: adress
        }

        console.log(account);
        axios.post(URI, body)
        .then(({data}) => {
            if(account.user === data.user){
                console.log("SISEÑOR")
            } else {
                console.log("NO JEÑORA")
            }
        })    

    }

    function handleAnswerChange(event) {
            if(event.key === "Enter"  ){
                Submit();
        }
    }

    return (
        <div className="containerGlobal">
            <div className="background"> </div>
            <div className="containerItems">
                <div className="containerLogo">
                    <img className="logoAWS" src="./AWS.png" alt="logoAWS" />
                </div>
                <div className="containerRegister">
                    <div className="registerTitulo">Sign Up</div>
                    <br />
                    <div className="containerText">
                        <span className="Usuario">Username</span>
                        <input type="text" id="Usuario" name="usuario" onBlur={(e) => { getInput(e.target.name, e.target.value) }} />
                        <br />
                        <span className="Usuario">Email</span>
                        <input type="text" id="Email" name="email" onBlur={(e) => { getInput(e.target.name, e.target.value) }}/>
                        <br />
                        <span className="Usuario">Adress</span>
                        <input type="text" id="Adress" name="adress" onBlur={(e) => { getInput(e.target.name, e.target.value) }} />
                        <br />
                        <span className="Usuario">Password</span>
                        <div className="password">
                            <input type="password" id="Contraseña" name="password" onChange={(e) => { getPassword(e.target.name, e.target.value) }} onKeyUp = {handleAnswerChange} />
                        </div>
                        <button className="btn" onClick={Submit}>ENTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;