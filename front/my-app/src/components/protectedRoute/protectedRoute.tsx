import { Navigate } from "react-router"

type Children = {
    children: React.ReactNode
}


export default function ProtectedRoute({children}: Children) {
    const token = localStorage.getItem("token")
    if (!token) return (<Navigate to={"/login"}/>);
    return (
        <div>
            {children}
        </div>
    )
}
