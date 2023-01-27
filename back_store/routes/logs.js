import express from 'express'
import { getAllLogin, getLogin, createLogin, updateLogin} from '../controllers/LoginController.js'
const router = express.Router()

router.get('/', getAllLogin)
router.get('/:id', getLogin)
router.post('/', createLogin)
router.put('/:id', updateLogin)

export default router