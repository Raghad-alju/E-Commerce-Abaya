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


import React,{useContext, useEffect, useState} from "react";

import colored from '../ProductLists/colored'
import winter from '../ProductLists/winter'
import casual from '../ProductLists/casual'
import dresses from '../ProductLists/dress'
import special from '../ProductLists/special'
import { Link } from "react-router-dom";
import sortTop from "../svg icons/sort-from-bottom-to-top-svgrepo-com.png"
import sortBottom from "../svg icons/sort-from-top-to-bottom-svgrepo-com.png"
import { sort } from 'fast-sort';
import trendingProducts from '../ProductLists/trendingProducts'

import { useParams } from "react-router-dom";
import cartIcon from '../svg icons/cart-2-svgrepo-com.png'
import {CartContext} from '../App'

export const allProducts=[...trendingProducts,...special,...winter,...colored,...casual,...dresses]
export default function Products() {
  const params = useParams();
  const cart=useContext(CartContext);
  
  var pageContents=[];

  switch (params.catogorey){
    case 'Trending':
      pageContents=[...trendingProducts]
      break;
    case 'Winter Abayas':
      pageContents=[...winter]
      break;
    case 'Colored Abayas':
      pageContents =[...colored]
      break;
    case 'Casual Abayas':
      pageContents =[...casual]
      break;
    case 'Abaya\'s Dresses':
      pageContents =[...dresses]
      break;
    case 'Special Occasions':
      pageContents =[...special]
      break;
    case 'View All':
        pageContents =[...trendingProducts,...special,...winter,...colored,...casual,...dresses]
        break;

  }
  const [sortedContents,setSortedcontents]=useState([...pageContents]);

  useEffect(()=>{setSortedcontents(pageContents)},[params.catogorey]);

  return (
    <>

      <div className=' lg:w-[60rem] mx-auto '>

     




        <h3 className="mt-36 font-primary text-2xl text-gray-800 ml-3">{params.catogorey}</h3>



        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 font-secondry " aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <Link to='/' className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </Link>
    </li>

    <li aria-current="page">
      <div className="flex items-center">
        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{params.catogorey}</span>
      </div>
    </li>
  </ol>
</nav>












        <div className="flex mt-12  rounded-xl ">
          <div className="flex w-[40rem] h-32 mx-2 rounded-lg mt-0   border-[0.1px] border-gray-300 max-md:hidden   ">
          
          <ul className=" p-4 font-secondry text-sm">
            <li>Sort Price:</li>         
            <li className="ml-4 mt-2"><img className='float-left w-4 h-4 ' src={sortTop}/> <button className=" hover:underline decoration-2 decoration-solid decoration-indigo-900" onClick={()=>{const val=sort(pageContents).asc(a => a.price); setSortedcontents(val); }}>lowest to highest</button></li>
            <li className="ml-4 mt-2"> <img className='float-left w-4 h-4 ' src={sortBottom}/><button className=" hover:underline decoration-2 decoration-solid decoration-indigo-900" onClick={()=>{const val=sort(pageContents).desc(a => a.price); setSortedcontents(val); }}>highest to lowest</button></li>
          </ul>

          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-[165rem] ">
          
          {
            
            sortedContents.map((product)=>{
                  return <div className=" bg-white border border-gray-200 rounded-lg shadow ">
                  <a href="#">
                      <img class="rounded-t-lg" src={product.img} alt="" />
                  </a>
                  <div class="p-5">
                      <Link to={`/products/Trending/${product.id}`}>
                      <h5 class="mb-2 text-lg  tracking-tight text-gray-900   font-primary line-clamp-1">{product.name}</h5>
                      </Link>
                      <p class=" inline-block mb-3 font-normal text-gray-700 font-primary text-lg">{product.price}$</p>
                      <button class="inline-flex float-right  items-center  px-3 py-2 text-sm font-primary text-center  bg-blue-sky text-pastel-yellow rounded-lg hover:bg-gray-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300  mb-2  " onClick={()=>{cart.addProductToCart(product)}}>
                          Add
                          <img className='ml-2 w-4 h-4' src={cartIcon}/>
                      </button>
                  </div>
              </div>
  
  
              })
          }
            
          </div>
        </div>
      </div>




    </>
  );
}