import { Route, Routes} from 'react-router-dom'
import './App.css'
import {Home} from "./pages/home/Home"
import { LoginPage } from './pages/login/LoginPage'
import { Register } from './pages/user-register/Register'
import { Products } from './pages/products/Products'
import { ProductDetail } from './pages/product-detail/ProductDetail'
import { Cart } from './pages/cart/Cart'
import { Orders } from './pages/orders/Orders'







function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products/" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>

      </Routes>

    </>
  )
}

export default App
