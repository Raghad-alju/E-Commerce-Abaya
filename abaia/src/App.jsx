import Home from './component/Home.jsx'
import React, { useRef, useState, createContext, useContext } from 'react';
import Cart from './component/Cart.jsx'
import Products from './component/Products.jsx';
import Product from './component/Product.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './component/Root.js'
export const CartContext = createContext({ cartContents: [], addProductToCart: () => { } });

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

  return (
    <>
      <CartContext.Provider value={{ cartContents, addProductToCart }}>

        <RouterProvider router={router} />

      </CartContext.Provider>
    </>

  );
}

export default App;
