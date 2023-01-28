import express from 'express'
import { getAllLogin, getLogin, createLogin, updateLogin} from '../controllers/LoginController.js'
const router = express.Router()

router.get('/', getLogin)
router.get('/:id', getLogin)
router.post('/', createLogin)
router.put('/:id', getLogin)
router.post('/user', getLogin)
export default router