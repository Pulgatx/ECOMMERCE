import express from 'express'
import { getAllProducts, getProduct, createProduct, updateProduct, buyProducts, bookProduct} from '../controllers/ProductController.js'
const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.put('/buy', buyProducts)
router.get('/book/:id', bookProduct)

export default router