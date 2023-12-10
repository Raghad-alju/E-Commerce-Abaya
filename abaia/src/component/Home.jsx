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