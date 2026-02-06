import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Space } from "../../components/Space";

import { allproducts } from "../../data/allproducts";
import "./products.css";


export function Products(){
    return(
        <>
        <Navbar/>
        <Space/>
            <div className="products-container">
                {
                    allproducts.map((item)=>{
                        return <Card key={item.id} data={item}/>
                    })
                }
            </div>

        <Footer/>
        </>
    )
}