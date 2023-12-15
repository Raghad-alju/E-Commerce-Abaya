import Home from './component/Home.jsx'
import React, { useRef, useState, createContext, useContext } from 'react';
import Cart from './component/Cart.jsx'
import Products from './component/Products.jsx';
import Product from './component/Product.jsx';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './component/Root.js'
export const CartContext = createContext({ cartContents: [], addProductToCart: () => { },handleQuan:()=>{} });

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:catogorey',
        element: <Products />
      },
      {
        path: '/products/:catogorey/:prodId',
        element: <Product />
      },
      {
        path: '/cart',
        element: <Cart />
      },

    ]

  },



])



function App() {

  const [cartContents, setCartContents] = useState([]);

  function addProductToCart(product) {
    
    var cartProduct = cartContents.filter((p) => p.id === product.id);
    if (cartProduct.length === 0)
      setCartContents((prev) => { return [...prev, {...product,quntity:1}] })
    else {
      var tempList=[]
     
      for (let i=0,j=0;i<cartContents.length;i++){
        if(product.id===cartContents[i].id){
          cartContents[i].quntity++;
          cartProduct=cartContents[i];
        }else{
        tempList[j++]=cartContents[i];
      }
      }
      
      let index=cartContents.findIndex(p =>p.id===product.id)
      console.log("index:",index,cartContents[index].quntity)
    
      tempList=[...tempList,cartProduct]
      console.log(tempList);
      setCartContents(tempList);
    }
  }
  function handleQuan(index,op,productId){
    var tempList=[...cartContents];
    if(op==='del'){
    if(tempList[index].quntity>1){
    tempList[index].quntity--; 
    console.log('delted quan',tempList)
    setCartContents(tempList);}
    else{

      tempList=tempList.filter(p=>p.id!==productId)
      console.log('new list',tempList)
      setCartContents(tempList); 
    }
    }
    
    else{
      tempList[index].quntity++;
      setCartContents(tempList);
    }
    }
  

  return (
    <>
      <CartContext.Provider value={{ cartContents, addProductToCart,handleQuan }}>
        
        <RouterProvider router={router} >
        </RouterProvider>

      </CartContext.Provider>
    </>

  );
}



export default App;
