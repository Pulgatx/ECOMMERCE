import express from 'express'
import {payment} from '../controllers/payController.js'

const router = express.Router()

router.post('/', payment);

export default router;