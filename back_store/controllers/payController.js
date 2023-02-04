import stripe from 'stripe'

const striper = stripe("sk_test_51MXWocACjjHA9OscoViRj5553Y8ZJ45kJidTNQNtIDYeRzt7O7bIdPzYIZWQMuxnKGAM88ddNXvbZJiITYnPHCRY00gjLpA3n8");

export const payment = async (req,res) => {
    let {id, amount, description} = req.body;
    striper.paymentIntents.create({
        amount: amount * 100,
        description: description,
        currency: 'cop',
        payment_method: id,
        confirm: true
    }).then((pay) => {
        res.sendStatus(200)
    }).catch((e) => {
        console.log(e);
        res.sendStatus(400)
    })
}