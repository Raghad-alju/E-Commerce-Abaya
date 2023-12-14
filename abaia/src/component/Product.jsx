
import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from './Products'
import SlideView from "./Product components/SlideView";
import cartIcon from './../svg icons/cart-2-svgrepo-com.png'
export default function Product() {
    const params = useParams();
    const product = allProducts.find(p => p.id === params.prodId)

    return (
        <>
            <div className=' mt-36 lg:w-[60rem] md:mx-auto mx-10  relative'>



                <img className="sm:h-80 sm:w-80 w-auto h-auto rounded-lg float-left mr-24 max-md:mx-32 max-sm:mx-auto" src={product.img} alt="" />
                <div className=" pt-12 ">
                    <div className=" pb-6 font-primary text-3xl max-md:clear-both   max-md:pt-6 ">
                        {product.name}
                    </div>
                    <div className=" mb-5 font-primary" >
                       Price: {product.price}$
                    </div>
                    <div className=" font-secondry m-5">
                        <span className=" font-bold font-secondry">Description:</span> This product isnt stored in a database. Relevent information to the product can be stored, so it can be showen to the user to know more about the product such as hight, colors, tailor and more... 
                    </div>
                    <button  className="inline-flex float-left  items-center  px-3 py-2 text-sm font-primary text-center  bg-blue-sky text-pastel-yellow rounded-lg hover:bg-gray-800  focus:ring-1 focus:outline-none focus:ring-gray-300  mb-2  ">
                        Add to cart
                        <img className="ml-2 w-4 h-4" src={cartIcon} />
                    </button>
                </div>
                <div className=" font-primary  pt-24 pb-12 md:text-2xl text-lg clear-both">You might also like</div>
                <SlideView />
            </div>
        </>
    );
}