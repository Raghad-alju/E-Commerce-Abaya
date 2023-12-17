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

import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from '../App'

export default function Cart({ product }) {
  const cart = useContext(CartContext);
  const [showText, setShowText] = useState(false);


  if (cart.cartContents.length > 0)
    return (
      <>
        <div className=' mt-36 lg:w-[60rem] lg:mx-auto mx-10 max-sm:mx-5  relative'>
          <h1 hidden={!showText} className=" font-primary text-lg mx-auto">Thank you for testing the application :)</h1>
          <div className=" w-full h-auto  border-[1px] border-gray-400 p-10 rounded-lg  ">
            <div className=" relative text-2xl font-primary mb-5">Cart Products</div>
            {

              cart.cartContents.map((product, index) => {
                return (
                  <div className=" clear-both ">
                    <div className=" p-[0.5px] w-full  bg-gray-500 "></div>

                    <img className="h-20 w-20 float-left block my-5 rounded-md mr-6 " src={product.img} />
                    <div className=" relative my-5 h-20 font-secondry ">
                      <p className="  text-lg font-semibold">{product.name}</p>
                      <p>{product.price}$</p>
                      <p> {product.quntity === 1 ? '' : 'Quantity: ' + product.quntity}</p>


                      <button onClick={() => cart.handleQuan(index, 'del', product.id)} className=" absolute bottom-12 right-16 max-sm:right-5  w-6 h-6  justify-items-center rounded-full bg-blue-sky shadow-gray-500 shadow-sm hover:bg-gray-600">
                        <svg class="w-3 h-3 text-pastel-yellow m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>

                      <button onClick={() => cart.handleQuan(index, 'add', product.id)} className=" absolute bottom-2 right-16 max-sm:right-5  w-6 h-6  max-sm:bottom-4 justify-items-center rounded-full bg-blue-sky shadow-gray-500 shadow-sm hover:bg-gray-600">
                        <svg class="w-3 h-3 text-pastel-yellow m-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg></button>
                    </div>
                  </div>
                )
              }
              )

            }
            <div className=" clear-both my-14 p-[0.5px] w-3/4 mx-auto bg-gray-500 "></div>
            <div className="flex">
              <button onClick={() => setShowText(true)} className=" bg-blue-sky p-2 px-6 rounded-lg text-md font-primary text-pastel-yellow shadow-md shadow-gray-400 md:ml-24 ml-10" >Checkout</button>
              <div className=" ml-10 font-secondry text-lg">
                <p><span className="font-bold">Items:</span> {cart.cartContents.reduce((prev, curr) => { return prev + curr.quntity }, 0)}</p>
                <p><span className="font-bold">Total price:</span> {cart.cartContents.reduce((prev, curr, index) => { return prev + curr.price * curr.quntity }, 0)}$ </p>
              </div>
            </div>
          </div>

        </div>

      </>
    );
  else
    return (
      <div className=' mt-36 lg:w-[60rem] lg:mx-auto mx-10  h-64 relative'>
        <div className=" w-full h-64  b p-10 rounded-lg  ">
          <h1 className=" flex justify-center text-xl font-primary ">Cart is Empty</h1>
          <svg class=" mt-6 mx-auto w-16 h-16 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z" />
          </svg>
        </div>
      </div>


    )
}