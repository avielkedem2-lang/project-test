import { useRef, useState } from "react"
import { register } from "../../fetch"
import { useNavigate } from "react-router"

type UserRegister = {
  name: string
  email: string,
  password: string,
  file?: any
}


export default function Register() {
  const user = useRef<UserRegister>({ name: "", email: "", password: "" })
  const navigate = useNavigate()
  const isError = useRef<boolean>(false)
  const [error, setError] = useState<string>()
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={(e) => {
        e.preventDefault();
        register(user.current).then((data)=> {
          if (data?.status === 201){
            navigate("/login")
          }
          isError.current = true
          setError(data?.message.message)
        })
      }}>
        <input type="text" placeholder="Enter name" onChange={(e) => user.current = { ...user.current, name: e.target.value }} />
        <input type="email" placeholder="Enter email" onChange={(e) => user.current = { ...user.current, email: e.target.value }} />
        <input type="password" placeholder="*******" onChange={(e) => user.current = { ...user.current, password: e.target.value }} />
        <input type="file" placeholder="drop file her" name="uploaded_file" onChange={(e) => user.current = { ...user.current, file: e.target.files }}/>
        <button type="submit">submit</button>
        <br />
        {isError && (
          <p>{error}</p>
        )}
      </form>
    </div>
  )
}
