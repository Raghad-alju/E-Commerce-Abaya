import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import trendingProducts from "../../ProductLists/trendingProducts";
import { useRef } from "react";
export default function SlideView(){
    const slider = useRef(null);

    function SampleArrow({buttonDirection}) {
       
    
        if(buttonDirection==='left'){
          return(
        <button className="absolute left-0  top-5 -translate-x-8 max-sm:hidden mt-16  group focus:outline-none" onClick={() => slider?.current?.slickPrev()}>
       
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
      <button className= "  absolute  top-5 right-0  translate-x-8 max-sm:hidden justify-end mt-16 group focus:outline-none" onClick={() => slider?.current?.slickNext()}>
  
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
      autoplay:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplay:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
    
    <div className=" mx-auto md:w-[40rem] clear-both">
    <Slider ref={slider} {...settings} >

    {
        
      trendingProducts.map((product)=>{
            return <div className=" bg-white border border-gray-200 rounded-lg shadow h-40 ">
            <a href="#">
                <img class="h-20 w-40 object-top object-cover rounded-t-lg" src={product.img} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                <h5 class="mb-2 lg:text-lg text-xs  tracking-tight text-gray-900   font-primary ">{product.name}</h5>
                </a>
                
            </div>
        </div>


        })
    }
    </Slider>
    </div>)
}