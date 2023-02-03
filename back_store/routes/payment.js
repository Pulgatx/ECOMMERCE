import express from 'express'
const router = express.Router()
import { payment } from '../controllers/paymentController.js'

router.post("/", payment);

export default router