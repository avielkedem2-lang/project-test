import { compereHash, passwordHash } from "../utils/hash.js";
import { isToken } from "../utils/token.js";
import { loginValidation, registerValidation } from "../utils/user.zod.js"

export const checkBodyRegister = async (req, res, next) => {
    const body = req.body
    if (registerValidation.safeParse(body).success === false) return res.status(400).json({ message: "The body is not good" });
    body.password = await passwordHash(body.password)
    console.log(body.password);
    next()
}



export const checkBodyLogin = (req, res, next) => {
    const body = req.body
    if (loginValidation.safeParse(body).success === false) return res.status(400).json({ message: "The body is not good" });
    next()
}


export const checkToken = (req, res, next) => {
    const token = req.headers.token
    if (!token) res.status(400).json({message: "missing token"});
    try {
        const theToken = isToken(token) 
    } catch (error) {
        res.status(401).json({message: "The token is not good"})
    }
    req.token = token
    next()
}