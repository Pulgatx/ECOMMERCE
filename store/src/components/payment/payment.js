import {CardElement, useElements} from '@stripe/react-stripe-js'
import { useStripe } from '@stripe/react-stripe-js' 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const URI = "http://localhost:8000/pay"
export function Payment (props) {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    function submit(e) {
        e.preventDefault();
        stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        }).then(async (payment) => {
            if(!payment.paymentMethod){
                alert("TARJETA INVALIDA")
                return;
            }
            const res = await axios.post(URI, {
                id: payment.paymentMethod.id,
                amount: props.amount,
                description: "HOLA MUNDO"
            })
            if(res.status === 200){
                alert("CORRECTO")
                props.funcion();
                navigate("/")
            }
            else
                alert("INCORRECTO")
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <form className="formPayment" onSubmit={submit}>
            <CardElement/>
            <button className='btn'> COMPRAR </button>
        </form>
    )
}