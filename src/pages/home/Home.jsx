import { Navbar } from "../../components/Navbar";
import { Space } from "../../components/Space";
import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { HomeProducts } from "./products-display/HomeProducts";
import { Footer } from "../../components/Footer";


import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";


export function Home() {

const[products,setProducts]=useState([]);

useEffect(()=>{
  const fetchProducts=async()=>{
    try{
      const response=await axios.get("http://localhost:5000/products");
       setProducts(response.data);
    }
    catch(error){
      console.error("error fetching products",error);
    }
  }
  fetchProducts()
},[])

  return (
    <>
      <Navbar />
      <Space/>
      <Banner/>
      <Categories/>
      <HomeProducts products={products}/>
      <Footer/>



    </>
  );
}
