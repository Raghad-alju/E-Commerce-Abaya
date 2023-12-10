
import React from "react";
import { useParams } from "react-router-dom";
import {allProducts} from './Products'
export default function Product() {
  const params=useParams();
  const product= allProducts.find(p => p.id === params.prodId)

    return (
      <>
       <div className=' mt-36 lg:w-[60rem] mx-auto '>

        
        
        <img className="h-80 w-80 rounded-lg float-left mr-24" src={product.img} alt=""/>
    <div className=" pt-12 ">
    <div className=" mb-12 font-primary text-3xl">
        {product.name}
    </div>
    <div className=" mb-24 font-primary" >
        {product.price}$
    </div>
    <button>
        Add to cart
    </button>
    </div>
        </div>
    </>
    );
  }