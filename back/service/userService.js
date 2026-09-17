import { compereHash } from "../utils/hash.js";
import userDal from "../DAL/user.dal.js"
import { createError } from "../utils/createError.js"
import { createToken, reversToken } from "../utils/token.js";



export async function createUser(user) {
    const isUser = await userDal.findUser(user.email);
    if (isUser) throw createError(409, "user already exists");
    await userDal.insertUser(user)
    return { message: "The user created successfully" }
}


export async function compereUser(user) {
    const isUser = await userDal.findUser(user.email);
    if (!isUser) throw createError(404, "The user not exists");
    const isCompere = await compereHash(user.password, isUser.password);
    if (!isCompere) throw createError(401, "The password not correct")
    const token = createToken(isUser._id)
    return { token }
}



export async function getUser(token) {
    const userId = reversToken(token).userId
    const user = await userDal.findUserById(userId)
    delete user.password
    return {...user}
}



