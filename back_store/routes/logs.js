import express from 'express'
import { getAllLogin, getLogin, createLogin, updateLogin} from '../controllers/LoginController.js'
const router = express.Router()

router.get('/', getLogin)
router.get('/:id', getLogin)
router.post('/', getLogin)
router.put('/:id', getLogin)

export default router