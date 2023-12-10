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

import React, { useContext, useEffect, useRef, useState } from 'react';
import 'flowbite'
import logo from '../../logo/logo-no-background.png'
import userIcon from '../../svg icons/avatar-people-profile-svgrepo-com.png'
import contactIcon from '../../svg icons/contact-svgrepo-com.png'
import homeIcon from '../../svg icons/home-svgrepo-com.png'
import cartIcon from '../../svg icons/cart-2-svgrepo-com.png'
import { CartContext } from '../../App';
import {Link} from 'react-router-dom'


const listItemStyle=`block py-2 px-3 text-pastel-yellow  rounded md:bg-transparent  md:p-0  font-primary hover:underline decoration-pastel-yellow decoration-2 `
function Navbar() {
  const cart= useContext(CartContext);
  const [counter,setCounter]=useState(-2);
  const counterRef=useRef();
  const [effect,setEffect]=useState(false);
  const circleStyle=`${effect && 'animate-scale'} absolute bg-red-800 text-white rounded-full text-xs w-4 h-4 justify-center md:mt-0 md:-translate-y-1 ml-4 mt-2 text-center font-primary`
  

  useEffect(()=>{ setCounter((prev)=>prev+1);
    setEffect(true);},[cart.cartContents])
   
    
  

    return (
        <nav className=" fixed w-full bg-blue-sky border-gray-200 z-20 top-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 ">

                <div className=" flex items-center space-x-3 ">
                    <img src={logo} className="h-12 " alt="NA Logo" />
                    <span className="  font-primary self-center text-3xl font-semibold whitespace-nowrap text-pastel-yellow max-md:text-xl">NA Abaias</span>
                </div>

                <div className=' md:absolute flex justify-self-start md:ml-56  text-lg max-md:text-md  max-md:justify-items-end'>
                            
                            <img className='block w-6 h-6 mr-2 max-md:h-5 max-md:w-5 md:mt-0 mt-3 max-md:mr-0 ' src={cartIcon} />
                            <div ref={counterRef} className={circleStyle}  onAnimationEnd={() => setEffect(false)}>{counter}</div>
                            <a href="#" className={listItemStyle}>Cart</a>
                        </div>
                   
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-primary flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-lg ">
                    <li className='flex justify-between'>
                            <img className='block w-6 h-6 mr-2' src={homeIcon} />
                            <a href="#" className={listItemStyle} aria-current="page">Home</a>
                        </li>
                        <li className='flex justify-between'>
                            <img className='block w-6 h-6 mr-2' src={userIcon} />
                            <a href="#" className={listItemStyle}>Account</a>
                        </li>
                        <li className='flex justify-between'>
                            <img className='block w-6 h-6 mr-2' src={contactIcon} />
                            <a href="#" className={listItemStyle}>Contact us</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;