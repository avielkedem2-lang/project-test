import { useEffect, useState } from "react"
import { getUser } from "../../fetch"
import { useNavigate } from "react-router"


type User = {
  name: string,
  email: string,
  _id: string,
  file?: string
}


export default function User() {
  const navigate = useNavigate()
  const [data, setData] = useState<User>()
  useEffect(() => {
    const token = localStorage.getItem("token")
    getUser(token!).then((data) => {
      if (data?.data) {
        setData(data.data)
      } else {
        navigate("/login")
      }
    })
  }, [])

  const logOut = ()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <div>
      <section>
        <p>userName: {data?.name}</p>
        <p>id: {data?._id}</p>
        <p>email: {data?.email}</p>
        <img src={data?.file} alt="p" />
      </section>
      <button onClick={logOut}>Log out</button>
    </div>
  )
}
