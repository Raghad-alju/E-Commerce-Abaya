
import React from "react";
import { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from './Products'
import SlideView from "./Product components/SlideView";
import cartIcon from './../svg icons/cart-2-svgrepo-com.png'
import { CartContext } from "../App";
export default function Product() {
    const cart=useContext(CartContext);
    const params = useParams();
    const product = allProducts.find(p => p.id === params.prodId)

    console.log('reloding')
    
    useEffect(() => {
        window.scrollTo(0, 0);
      },[])
    return (
        <>
            <div className='relative mt-44 lg:w-[60rem] lg:mx-auto mx-3  '>



                <div className="fade-in-left p-6 rounded-lg bg-gray-100 overflow-auto  ">
                <img className=" fade-in-left  sm:h-80 shadow-md shadow-blue-sky sm:w-80 w-auto h-auto rounded-lg float-left mr-24 max-md:float-none max-md:mx-auto max-sm:mx-auto" src={product.img} alt="" />

                    <div className=" pb-6 font-primary text-3xl max-md:clear-both   max-md:pt-6 ">
                        {product.name}
                    </div>
                    <div className=" mb-5 font-primary text-lg p-1  max-sm:bg-gray-300 max-sm:w-fit rounded-lg" >
                       Price: {product.price}$
                    </div>
                    <div className=" font-secondry m-5">
                        <span className=" font-bold font-secondry">Description:</span> This product isn't stored in a database. Relevent information to the product can be stored, so it can be showen to the user to know more about the product such as relevent images to the product, hight, colors, tailor and more... 
                    </div>
                    <button onClick={()=>cart.addProductToCart(product)} className="inline-flex float-left  items-center  px-3 py-2 text-sm font-primary text-center  bg-blue-sky text-pastel-yellow rounded-lg hover:bg-gray-800  focus:ring-1 focus:outline-none focus:ring-gray-300  mb-2  ">
                        Add to cart
                        <img className="ml-2 w-4 h-4" src={cartIcon} />
                    </button>
                </div>
                <div className=" h-[0.5px] w-1/2 mx-auto bg-blue-sky clear-both mt-16"></div>
                <div className=" font-primary  pt-20 pb-12 text-2xl  clear-both">You might also like</div>
                <SlideView />
            </div>
        </>
    );
}