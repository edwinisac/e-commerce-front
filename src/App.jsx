import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { LoginPage } from "./pages/login/LoginPage";
import { Register } from "./pages/user-register/Register";
import { Products } from "./pages/products/Products";
import { ProductDetail } from "./pages/product-detail/ProductDetail";
import { Cart } from "./pages/cart/Cart";
import { Orders } from "./pages/orders/Orders";
import { Dashboard } from "./pages/home/DashBoard";
import { Error } from "./pages/error/Error";
import { useEffect, useState } from "react";
import axios from "axios";
import { MainLayout } from "./pages/MainLayout";
import { Protected } from "./protected-routes/Protected";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("error fetching products", error);
      }
    };
    fetchProducts();
  }, []);




  return (
    <>
      <Routes>
        {/* routes with navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/user/:id" element={<Protected><Dashboard products={products} /></Protected>} />
        </Route>

        {/* Routes without navbar */}
        <Route path="/register" element={<Register />} />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
