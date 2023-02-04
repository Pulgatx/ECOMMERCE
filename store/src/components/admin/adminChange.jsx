import React, { useEffect, useState } from 'react'
import './admin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/login/getAdmin'
const URI2 = 'http://localhost:8000/login/'

function AdminChange() {

    const [Adress, setAdress] = useState(''); //hook para la direccion
    const [Email, setEmail] = useState('');//hook para el email
    const [Phone, setPhone] = useState('');//hook para el telefono
    const [Password, setPassword] = useState('') //hook para la contraseña

    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const res = await axios.get(URI)
        setUser(res.data);
    }

    function logout () {
        sessionStorage.removeItem("ADMIN");
        sessionStorage.removeItem("LOGIN");
        navigate("/");  
    }

    const submit = async () => {
        await axios.post(URI2 + user.id, { username : user, password : Password, email : Email, adress : Adress, telephone : Phone})
    }
    return (
        <div className="containerAdmin">
            <div className="containerHeader">
                <div className="containerTitle"> ADMINISTRADOR</div>
                <div onClick={logout} className="containerTitle"> LOG OUT</div>
                <div className="containerTitle"> VOLVER</div>
            </div>
            <form className='containerUniqueUser' onSubmit={submit}>
            <div className="userName center">
                <h3 className="inputTitle" >ADRESS</h3>
                <input type="text" className='inputText'  onChange={ (e) => setAdress(e.target.value)}
                placeholder={user.adress} />
            </div>
            <div className="userName center">
                <h3 className="inputTitle">EMAIL</h3>
                <input type="text" className='inputText'  onChange={ (e) => setEmail(e.target.value)}
                placeholder={user.email} />
            </div>
            <div className="userName center">
                <h3 className="inputTitle">PHONE NUMBER</h3>
                <input type="text" className='inputText'  onChange={ (e) => setPhone(e.target.value)}
                placeholder={user.telephone} />
            </div>
            <div className="userName center">
                <h3 className="inputTitle">PASSWORD</h3>
                <input type="password" className='inputText'  onChange={ (e) => setPassword(e.target.value)}
                placeholder={user.telephone} />
            </div>
            <div className="bottom center">
                <button type="submit" className="btn" >CAMBIAR</button>
            </div>
        </form>
        </div>
    );
}

export default AdminChange;