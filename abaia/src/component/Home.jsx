

import React, { useRef } from 'react';

import HeaderPicture from './home compnents/HeaderPicture';
import Footer from './home compnents/Footer';
import Explore from './home compnents/Explore';
import AD from './home compnents/AD';
import Trending from './home compnents/Trending';

function Home() {
  const background=useRef();

 
  return (
    <>

    <div className=' lg:w-[60rem] mx-auto'>
    <HeaderPicture />
    <h3 className='flex lg:mt-36 lg:mb-16 mt-16 mb-10 justify-center font-primary from-neutral-800 text-gray-700 text-2xl ml-3 md:text-4xl border-x-black  font-bold '>
    Explore Different Categories
    </h3>
    <div className=' bg-yellow-50 lg:mx-auto m-auto rounded-lg'>
    <Explore />
    </div>
    <AD />
    <h3 className='flex lg:mt-36 lg:mb-16 mt-16 mb-10 justify-center font-primary from-neutral-800 text-gray-700 text-2xl ml-3 md:text-4xl border-x-black  font-bold '>Trending Products</h3>
    <Trending />
    </div>
    
</>
  );
}

export default Home;