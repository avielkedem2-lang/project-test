import { useRef, useState } from "react"
import { login } from "../../fetch"
import { Link, useNavigate } from "react-router"

type UserLOgin = {
  email: string,
  password: string
}


export default function Login() {
  const user = useRef<UserLOgin>({ email: "", password: "" })
  const navigate = useNavigate()
  const isError = useRef<boolean>(false)
  const [error, setError] = useState<string>()
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        login(user.current).then((data) => {
          if (data?.data) {
            localStorage.setItem("token", data.data.token)
            navigate("/user")
          }
          isError.current = true;
          setError(data?.message.message)
        })
      }}>
        <input type="email" placeholder="Enter email" onChange={(e) => user.current = { ...user.current, email: e.target.value }} />
        <input type="password" placeholder="*******" onChange={(e) => user.current = { ...user.current, password: e.target.value }} />
        <button type="submit">submit</button>
        <br />
        {isError.current && (
          <p>{error}</p>
        )}
        <Link to={"/register"}><button>register</button></Link>
      </form>
    </div>
  )
}
