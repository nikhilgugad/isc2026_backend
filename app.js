import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true}))
app.use(cookieParser())
app.use(express.static("public"))
app.use(express.Router())

import authRouter from './routes/auth.route.js'
app.use('/06_module_b/api/auth/', authRouter)


import userRouter from './routes/users.route.js'
app.use("/06_module_b/api/users/", userRouter)

import categoryRouter from './routes/category.route.js'
app.use('/06_module_b/api/categories', categoryRouter)

import requestRouter from './routes/request.route.js'
app.use('/06_module_b/api/requests/', requestRouter)






app.get('/', (req, res) => {
    res.send("Server running")
})

export default app;

