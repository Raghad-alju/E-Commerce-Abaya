


import React, { useRef, useState, createContext, useContext, lazy ,Suspense } from 'react';
import Home from './component/Home.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './component/Root.js'
export const CartContext = createContext({ cartContents: [], addProductToCart: () => { },handleQuan:()=>{} });
const Cart= lazy(()=>import('./component/Cart.jsx'));
const Products= lazy(()=>import('./component/Products.jsx'));
const Product= lazy(()=>import('./component/Product.jsx'));

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
        element: <Suspense fallback={<div className='h-screen w-full'></div>}><Products /></Suspense>
      },
      {
        path: '/products/:catogorey/:prodId',
        element: <Suspense><Product /></Suspense>
      },
      {
        path: '/cart',
        element: <Suspense><Cart /></Suspense>
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
