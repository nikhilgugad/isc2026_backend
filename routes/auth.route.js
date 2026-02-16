import { Router } from "express";


const router = Router()


import { register } from "../controllers/user.controller.js";
router.post('/register', register)

import { login } from "../controllers/user.controller.js";
router.post('/login', login)

import { profile } from "../controllers/user.controller.js";
router.get('/profile', profile)


import { logout } from "../controllers/user.controller.js";
router.post('/logout', logout)

export default router;