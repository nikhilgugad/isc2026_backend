import { Router } from "express";

const router = Router()


import { findUsers } from "../controllers/user.controller.js";
router.get("/", findUsers)

import { findFilter } from "../controllers/user.controller.js";
router.get("/:id", findFilter)




export default router;