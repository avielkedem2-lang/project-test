import { MongoClient } from "mongodb"
import "dotenv/config"


const MONGO_DB = process.env.MONGO_DB

const client = new MongoClient(MONGO_DB)

export async function connection(){
    try {
        await client.connect()
        console.log("connection success");
    } catch (error) {
        console.log("connection felid");
    }
}

const db = client.db("project-test");
export default db;
