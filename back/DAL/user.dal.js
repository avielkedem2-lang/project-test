import { ObjectId } from "bson";
import db from "../db/mongodb.js";


const coll = db.collection("users")


async function insertUser(user){
    const res = await coll.insertOne(user)
    return {_id: res.insertedId, ...user}
}


async function findUser(email) {
    return await coll.findOne({email: email})
}


async function findUserById(id) {
    return await coll.findOne({_id: new ObjectId(id)})
}


export default {
    insertUser,
    findUser,
    findUserById,
}