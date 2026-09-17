import axios from "axios";


    type User = {
        name: string,
        email: string,
        _id: string
    }



async function sendRequestPost(url: string, body: object) {
    try {
        const { data, status } = await axios.post(url, body);
        return { data, status }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const message = err.response?.data
            console.log(message);
            const status = err.status
            return { message, status }
        }
    }
}




export async function register(body: object) {
    const url = "http://localhost:3000/register";
    const res = await sendRequestPost(url, body);
    return res
}



export async function login(body: object) {
    const url = "http://localhost:3000/login";
    const res = await sendRequestPost(url, body)
    return res
}





async function sendRequestGet(url: string, token: string) {
    try {
        const { data } = await axios.get<User>(url, { headers: { token } })
        return {data}
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const message = err.response?.data
            console.log(message);
            const status = err.status
            return { message, status }
        }
    }
}




export async function getUser(token: string) {
    // const token = localStorage.getItem("token")
    const url = "http://localhost:3000/user";
    const res = await sendRequestGet(url, token)
    return res
}