import express from 'express'
import { getAllProducts, getProduct, createProduct, updateProduct, buyProducts, bookProduct} from '../controllers/ProductController.js'
const router = express.Router()

router.get('/', getAllProducts)
router.put('/buy', buyProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.get('/book/:id', bookProduct)


export default router