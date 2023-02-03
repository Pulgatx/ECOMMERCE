import Stripe from "stripe"

//Mostrar todos los registros
const striper = Stripe("sk_test_51MXWocACjjHA9OscoViRj5553Y8ZJ45kJidTNQNtIDYeRzt7O7bIdPzYIZWQMuxnKGAM88ddNXvbZJiITYnPHCRY00gjLpA3n8");

export const payment = async (req, res) => {
    let {id, amount, description} = req.body;

    const RESPUESTA = striper.paymentIntents.create({
        amount : amount * 100,
        description : description,
        currency : 'COP',
        confirm: true,
        payment_method: 'pm_card_visa'
    })
    res = RESPUESTA;
}