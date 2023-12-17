

import React, { useRef } from 'react';

import HeaderPicture from './home compnents/HeaderPicture';
import Explore from './home compnents/Explore';
import AD from './home compnents/AD';
import Trending from './home compnents/Trending';
import { useInView } from "react-intersection-observer"
import { useEffect } from 'react';
function Home() {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [ref2, inView2] = useInView({ threshold: 0.5 })

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <>

    <div  className=' lg:w-[60rem] mx-auto'>
    <HeaderPicture />
    <h3  ref={ref} className={`${inView ? "fade-in-left" : null} flex lg:mt-36 lg:mb-16 mt-16 mb-10 justify-center font-primary from-neutral-800 text-gray-700 text-2xl ml-3 md:text-4xl border-x-black  font-bold `}>
    Explore Different Categories
    </h3>
    <div className=' bg-yellow-50 lg:mx-auto m-auto rounded-lg'>
    <Explore />
    </div>
    <AD />
    <h3 ref={ref2} className={`${inView2 ? "fade-in-left" : null} flex lg:mt-36 lg:mb-16 mt-16 mb-10 justify-center font-primary from-neutral-800 text-gray-700 text-2xl ml-3 md:text-4xl border-x-black  font-bold `}>Trending Products</h3>
    <Trending />
    </div>
    
</>
  );
}

export default Home;