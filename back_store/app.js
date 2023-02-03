import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import productRoutes from './routes/routes.js'
import loginRoutes from './routes/logs.js'
import ProductModel from "./models/ProductModel.js"
import mercadopago from "mercadopago"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', productRoutes)
app.use('/login', loginRoutes)

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-1476143548401444-013009-1a4557acdff952204a36012cb3d94446-1044396861",
});

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})

const products = await ProductModel.findAll({
    attributes: ['id', 'stock', 'stockMin', 'productName']
})


let productsStock = {}
let productMinStock = {}

products.forEach(product => {
    productsStock[product.dataValues.id] = product.dataValues.stock;
});
products.forEach(product => {
    productMinStock[product.dataValues.id] = {stockMin: product.dataValues.stockMin, productName: product.dataValues.productName};
});
// console.log(productMinStock);
// console.log(productsStock);
export {productsStock, productMinStock};//exportation
