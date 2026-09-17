import express from "express"
import { createUser, compereUser, getUser } from "../service/userService.js"


const router = express.Router()



router.post("/register", async (req, res) => {
    try {
        const body = req.body
        const data = await createUser(body)
        res.status(201).json(data)
    } catch (err) {
        if (err.status){
            res.status(err.status).json({message: err.message})
        }
        console.log(err); 
    }
})





router.post("/login", async (req, res) => {
    try {
        const body = req.body
        const data = await compereUser(body)
        res.status(200).json(data)
    } catch (err) {
        if (err.status){
            res.status(err.status).json({message: err.message})
        }
        console.log(err); 
    }
})



router.get("/user", async (req, res) => {
    try {
        const data = await getUser();
        res.status(200).json(data)
    } catch (err) {
        if (err.status){
            res.status(err.status).json({message: err.message})
        }
        console.log(err); 
    }
})