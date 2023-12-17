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

import React, { useContext, useEffect, useState, memo, useRef, useCallback } from "react";

import colored from "../ProductLists/colored";
import winter from "../ProductLists/winter";
import casual from "../ProductLists/casual";
import dresses from "../ProductLists/dress";
import special from "../ProductLists/special";
import { Link } from "react-router-dom";
import sortTop from "../svg icons/sort-from-bottom-to-top-svgrepo-com.png";
import sortBottom from "../svg icons/sort-from-top-to-bottom-svgrepo-com.png";
import { sort } from "fast-sort";
import trendingProducts from "../ProductLists/trendingProducts";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";
import cartIcon from "../svg icons/cart-2-svgrepo-com.png";
import { CartContext } from "../App";
import BreadCrums from "./products components/BreadCrums";
import Search from "./products components/Search";

export const allProducts = [
  ...trendingProducts,
  ...special,
  ...winter,
  ...colored,
  ...casual,
  ...dresses,
];
function Products() {
  const params = useParams();
  const cart = useContext(CartContext);
  var pageContents = [];
  var i=0;
  switch (params.catogorey) {
    case "Trending":
      pageContents = [...trendingProducts];
      break;
    case "Winter Abayas":
      pageContents = [...winter];
      break;
    case "Colored Abayas":
      pageContents = [...colored];
      break;
    case "Casual Abayas":
      pageContents = [...casual];
      break;
    case "Abaya's Dresses":
      pageContents = [...dresses];
      break;
    case "Special Occasions":
      pageContents = [...special];
      break;
    case "View All":
      pageContents = [
        ...trendingProducts,
        ...special,
        ...winter,
        ...colored,
        ...casual,
        ...dresses,
      ];
      break;
  }





  const [sortedContents, setSortedcontents] = useState([...pageContents]);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setSortedcontents(pageContents);
    setShowProducts(false);
    clearTimeout();

  }, [params.catogorey]);

  const [showProducts, setShowProducts] = useState(false);
  setTimeout(() => setShowProducts(true), 300);

  const [searchedList, setSearchedList] = useState([]);

  
  function updateSearchList(list) {
    setSearchedList(list);
    setShowProducts(!showProducts)
  }



  return (
    <>
      <div className=" lg:w-[60rem] mx-auto ">
        <Search updateSearchList={updateSearchList} />
        <h3 className="mt-36 font-primary text-2xl text-gray-800 m-3">
          {params.catogorey}
        </h3>
        <BreadCrums params={params} />

        {/*left bar*/}
        <div className="flex mt-12  rounded-xl ">
          <div className="flex w-[40rem] h-32 mx-2 rounded-lg mt-0   border-[0.1px] border-gray-300 max-md:hidden   ">
            <ul className=" p-4 font-secondry text-sm">
              <li>Sort Price:</li>
              <li className="ml-4 mt-2 p-1 rounded-md hover:bg-gray-200 ">
                <img className="float-left w-4 h-4 " src={sortTop} />{" "}
                <button
                  className="  decoration-indigo-900"
                  onClick={() => {
                    const val = sort(pageContents).asc((a) => a.price);
                    setSortedcontents(val);
                    setShowProducts(!showProducts)
                  }}
                >
                  lowest to highest
                </button>
              </li>
              <li className="ml-4 p-1 rounded-md hover:bg-gray-200">
                {" "}
                <img className="float-left w-4 h-4 " src={sortBottom} />
                <button
                  className=" decoration-indigo-900"
                 
                  onClick={() => {
                  
                    const val = sort(pageContents).desc((a) => a.price);
                    setSortedcontents(val);
                    setShowProducts(!showProducts)
                  }}
                >
                  highest to lowest
                </button>
              </li>
            </ul>
          </div>

          {/*main container*/}
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-[165rem] ">
            <LoadingSpinner showProducts={showProducts} />
          
              {(searchedList.length == 0 ? sortedContents : searchedList).map((product, index ) => {
          return (
            
            <div
              style={{ animationDelay: index / 25 + "s" }}
              className='bounce-in-top bg-white border border-gray-200 rounded-lg shadow'
              hidden={!showProducts}
            >
              <Link to={`/products/Trending/${product.id}`}>
                <img className="rounded-t-lg" src={product.img} alt="" />
              </Link>
              <div className="p-5 h-24">
                <Link to={`/products/Trending/${product.id}`}>
                  <p className="mb-2 text-md  tracking-tight text-gray-900 font-primary line-clamp-1 ">
                    {product.name}
                  </p>
                </Link>
                <p className=" inline-block mb-3 font-normal text-gray-700 font-primary text-lg">
                  {product.price}$
                </p>
                <button
                  className="inline-flex float-right  items-center  px-3 py-2 text-sm font-primary text-center  bg-blue-sky text-pastel-yellow rounded-lg hover:bg-gray-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300  mb-2  "
                  onClick={() => {
                    cart.addProductToCart(product);
                  }}
                >
                  Add
                  <img className="ml-2 w-4 h-4" src={cartIcon} />
                </button>
              </div>
            </div>
          );
        })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
