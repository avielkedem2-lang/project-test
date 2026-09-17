
import { Route, Routes } from 'react-router'
import './App.css'
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import User from './components/pages/User'
import Register from './components/pages/Register'
import Login from './components/pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
