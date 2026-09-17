import express from "express"
import cors from "cors"
import "dotenv/config"
import { connection } from "./db/mongodb.js"
import router from "./routes/routeUser.js"


const app = express()

const PORT = process.env.PORT


app.use(express.json())
app.use(cors())
app.use("/", router)





async function run(){
    app.listen(PORT, ()=>{
        console.log("The server is running...");
    })
    await connection()
}

run()