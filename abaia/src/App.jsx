import Home from './component/Home.jsx'
import React, { useRef, useState, createContext, useContext } from 'react';
import Cart from './component/Cart.jsx'
import Products from './component/Products.jsx';
import Product from './component/Product.jsx';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Root from './component/Root.js'
export const CartContext = createContext({cartContents:[], addProductToCart:()=>{}});

const router = createBrowserRouter([

  {path: '/',
  element:<Root/>,
  children:[
    {path: '/',
    element:<Home/>},
    {path: '/products/:catogorey',
    element:<Products/>},
    {path: '/products/:catogorey/:prodId',
    element:<Product/>},
  
  ]

},

 

])



function App() {
 
const [cartContents,setCartContents] =useState([]);

function addProductToCart(product){
 
  setCartContents((prev)=>{return [...prev,product]})
}

  return (
    <>
    <CartContext.Provider value={{cartContents,addProductToCart}}>
  
    <RouterProvider router={router}/>

    </CartContext.Provider>
    </>

  );
}

export default App;
