import express from 'express'
import { getAllBlogs, getBlog, createBlog, updateBlog} from '../controllers/ProductController.js'
const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)

export default router