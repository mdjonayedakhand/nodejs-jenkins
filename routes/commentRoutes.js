import express from 'express'
import { createComment, deleteComment, getComment, getComments, updateComment } from '../controllers/commentController.js'

const router = express.Router()
router.get('/',getComments)
router.get('/:id',getComment)
router.post('/',createComment)
router.put('/:id',updateComment)
router.delete('/:id',deleteComment)
export default router