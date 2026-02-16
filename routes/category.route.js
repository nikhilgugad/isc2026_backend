import Router from 'express'

const router = Router()


import { createCategory } from '../controllers/category.controller.js'
router.post("/", createCategory)

import { listCategories } from '../controllers/category.controller.js'
router.get('/', listCategories)

import { updateCategory } from '../controllers/category.controller.js'
router.put('/:id', updateCategory)

export default router