// Copyright 2023 ragad
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import React ,{ useContext,useRef } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import cartIcon from './../../svg icons/cart-2-svgrepo-com.png'
import trendingProducts from '../../ProductLists/winter';
import {CartContext} from '../../App'

function Trending () {
    const cart=useContext(CartContext);

 
    const slider = useRef(null);


function SampleArrow({buttonDirection}) {
       
    
      if(buttonDirection==='left'){
        return(
      <button className="absolute left-0  top-20 -translate-x-8 max-sm:hidden mt-16  group focus:outline-none" onClick={() => slider?.current?.slickPrev()}>
     
     <span class="inline-flex items-center justify-center w-7 h-7 rounded-full  bg-gray-500  group-hover:bg-gray-800  group-focus:ring-1 group-focus:ring-gray-400  group-focus:outline-none">
            <svg class="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
      </button>
      )
    }
    if(buttonDirection==='right'){
      return(
    <button className= "  absolute  top-20 right-0  translate-x-8 max-sm:hidden justify-end mt-16 group focus:outline-none" onClick={() => slider?.current?.slickNext()}>

    <span class="inline-flex items-center justify-center w-7 h-7 rounded-full  bg-gray-500  group-hover:bg-gray-800  group-focus:ring-1 group-focus:ring-gray-400  group-focus:outline-none">
            <svg class="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
    )
  }

    
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SampleArrow buttonDirection={'left'}/>,
    nextArrow: <SampleArrow buttonDirection={'right'}/>,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
return (
    <>
   
    <div className=" mx-auto  mt-4 ">
        
        <Slider ref={slider} {...settings} >

        {
            
          trendingProducts.map((product)=>{
                return <div className=" bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                    <img class="rounded-t-lg" src={product.img} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                    <h5 class="mb-2 text-xl  tracking-tight text-gray-900   font-primary line-clamp-1">{product.name}</h5>
                    </a>
                    <p class=" inline-block mb-3 font-normal text-gray-700 font-primary text-lg">{product.price}</p>
                    <button class="inline-flex items-center float-right px-3 py-2 text-sm font-primary text-center  bg-blue-sky text-pastel-yellow rounded-lg hover:bg-gray-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300  mb-2  " onClick={()=>{cart.addProductToCart(product)}}>
                        Add to cart
                        <img className='ml-2 w-4 h-4' src={cartIcon}/>
                    </button>
                </div>
            </div>


            })
        }
        </Slider>

      
    </div>


    {/*<div className=" grid grid-cols-5 gap-4">
    <button className="inline-block bg-slate-200 h-6 w-10 justify-self-end self-center " name='prev' onClick={handleClick}>prev</button>
    {cards.map((card)=>{
        return(
           
                
                <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${animation}`}>
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{card.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.content}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
                
           
        )

    })}
    <button name='next' onClick={handleClick}>next</button>
  </div>
  */}
  </>
  );
}


export default Trending ;