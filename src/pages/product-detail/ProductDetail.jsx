import { useParams } from "react-router-dom";
import "./productDetail.css";
import { allproducts } from "../../data/allproducts";


export function ProductDetail(){
    let params=useParams();
    let current=allproducts.find((item)=>item.id===Number(params.id))
    console.log(current);
    
    return(
        <>
            <h1>{current.name}</h1>
        </>
    )
}