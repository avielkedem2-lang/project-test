import jwt from "jsonwebtoken"
import "dotenv/config"

export function createToken(userId){
    return jwt.sign({userId}, process.env.JWT_KEY, {expiresIn: process.env.JWT_TIME})
}


export function isToken(token){
    return jwt.verify(token, process.env.JWT_KEY)
}


export function reversToken(token){
    return jwt.decode(token)
}