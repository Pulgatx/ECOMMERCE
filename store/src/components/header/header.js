import React, { useState,useEffect } from "react";
import "boxicons";
import axios from "axios";
import { Cont } from "./cont";
import { ProductosList } from "../productos";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Payment } from "../payment/payment.js"
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";

const URI = 'http://localhost:8000/products'
const stripePromise = loadStripe("pk_test_51MXWocACjjHA9OsctSrFESXgI8TJQDOBdkbTJiMTVnS2bV9CBik62QfurJRTqUWsnSTf6E3ZnTOTAmd0Pwab9sgy00cIganxen");

export  const Header = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate();

	useEffect(() => {
		getProductos()
	}, [])

	//procedimineto para mostrar todos los blogs
	const getProductos = async () => {
		const res = await axios.get(URI)
		setProductos(res.data)
	}

  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [logout, setLogout] = useState(false);

  function togleMenu() {
    if(logout)
      setMenu(!menu);
    else
      navigate('login');
  }

  const tooglefalse = () => {
    setMenu(false);
  };
  function buy () {
    buyProduct();
  }
  const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
		})
		if(check){
			const data = productos.filter(producto =>{
				return producto.id === id
			})
      increase(id);
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto ya se encuentra en el carrito")
		}
	}


  const reduce = async (id) => {
    const RES = await axios.get(URI + `/book/${id}?f=unbook`);
    carrito.forEach(item => {
      if (item.id === id ) {
        if(RES.data === "Unbooked")
        {
          item.cantidad -= 1;
        }
      }
      setCarrito([...carrito]);
    })
  }

  const increase = async (id) => {
    const RES = await axios.get(URI + `/book/${id}?f=book`);
    carrito.forEach(item => {
      if (item.id === id) {
        if(RES.data === "Booked")
        {
          item.cantidad += 1;
        }
        else if(RES.data === "Stockout"){
          alert("EL PRODUCTO SELECCIONADO YA NO DISPONE DE STOCK");
        }
      }
      setCarrito([...carrito]);
    })
  }

  const removeProducto = id => {
    if (window.confirm("¿Quieres eliminar el producto del carrito?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1)
        }
      })
      setCarrito([...carrito])
    }
  }

  const [total, setTotal] = useState(0);

	useEffect(() =>{
    if(sessionStorage.getItem("LOGIN"))
      setLogout(true);
    else
      setLogout(false)

		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])

  const logged = (logout) ? "logout show" : "logout none"

  const show1 = menu ? "carritos show" : "carritos"
  const show2 = menu ? "carrito show" : "carrito"
  
  function logoutSesion () {
    setLogout(false);
    sessionStorage.setItem("LOGIN",false);
  }

  function buyProduct( ) {
    let body = {}
    carrito.forEach ( item => {
      body[`${item.id}`] = item.cantidad;
    })
    axios.put(URI + "/buy", (body))
  }
  
  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <img src="./AWS.png" alt="LOGO" width="150"/>
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">PRODUCTOS</Link>
          </li>
        </ul>
        <div className={logged} onClick={logoutSesion}> LOG OUT </div>
        <div className="cart" onClick={togleMenu}>
          <box-icon name="cart" type="solid" color="#ffffff"></box-icon>
          <Cont 
            cont={carrito.length}
          />
        </div>
      </header>
      <div className={show1}>
        <div className={show2}>
          <div onClick={tooglefalse} className="carrito__close">
            <box-icon name="x"></box-icon>
          </div>
          <h2>Su Carrito</h2>
          <div className="carrito__center">
            {
              carrito.length === 0 ? <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Carrito Vacio</h2> : <>
                {
                  carrito.map((producto) => (
                    <div className="carrito__item" key={producto.id}>
                      <img src={producto.img2} alt={producto.name}/>
                      <div>
                        <h3> {producto.name} </h3>
                        <p className="price">$ {Intl.NumberFormat({style: 'currency', currency: 'USD',minimumFractionDigits: 0}).format(producto.price)}</p>
                      </div>
                      <div>
                        <box-icon
                          onClick={() => increase(producto.id)} name="up-arrow"
                          type="solid"
                        />
                        <p className="cantidad">{producto.cantidad}</p>
                        <box-icon
                          onClick={() => {(producto.cantidad > 1) ? reduce(producto.id) : void(0) }}
                          name="down-arrow"
                          type="solid"
                        />
                      </div>
                      <div
                        onClick={() => removeProducto(producto.id)}
                        className="remove__item"
                      >
                        <box-icon name="trash" />
                      </div>
                    </div>
                  ))
                };

              </>
            }
          </div>

          <div className="carrito__footer">
            <h3>Total: $ {Intl.NumberFormat({style: 'currency', currency: 'USD',minimumFractionDigits: 0}).format(total)}</h3>
            <Elements stripe={stripePromise}>
                <Payment 
                      amount={total}
                      funcion = {buy}/>
            </Elements>
            {/* <button className="btn"  onClick={buyProduct}>Payment</button> */}
          </div>
        </div>
      </div>
      <ProductosList
          funcion={addCarrito}
      />
    </>
  );
};

export default Header;