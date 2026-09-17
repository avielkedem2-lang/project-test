import express from "express"
import multer from "multer"
import { createUser, compereUser, getUser } from "../service/userService.js"
import { checkBodyLogin, checkBodyRegister, checkToken } from "../middleware/midd.js"



const router = express.Router()



// const storage = multer.diskStorage({
//     destination: "./uploads",
//     filename: (req, file, cd) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// })
const upload = multer({ dest: "./uploads" });


router.post("/register", upload.single("uploaded_file"), checkBodyRegister, async (req, res) => {
    try {
        console.log("dddddddddddddd", req.file);
        console.log(req.body);
        
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





router.post("/login", checkBodyLogin,async (req, res) => {
    try {
        const body = req.body
        const data = await compereUser(body)
        return res.status(200).json(data)
    } catch (err) {
        if (err.status){
            res.status(err.status).json({message: err.message})
        }
        console.log(err); 
    }
})



router.get("/user", checkToken,async (req, res) => {
    try {      
        const token = req.token        
        const data = await getUser(token);
        res.status(200).json(data)

    } catch (err) {
        if (err.status){
            res.status(err.status).json({message: err.message})
        }
        console.log(err); 
    }
})



export default router;