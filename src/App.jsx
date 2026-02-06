import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Home} from "./pages/home/Home"
import { LoginPage } from './pages/login/LoginPage'
import { Register } from './pages/user-register/Register'
import { Products } from './pages/products/Products'





function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products/" element={<Products/>}/>

      </Routes>

    </>
  )
}

export default App
