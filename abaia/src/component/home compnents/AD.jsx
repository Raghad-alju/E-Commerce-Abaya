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
import AdPic from '../../Abayas photos/AD.jpg'
import { useInView } from "react-intersection-observer"
function AD() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <>
      <div ref={ref} className=' grid md:grid-cols-2 lg:mx-auto lg:mt-24 mt-16 mx-2 gap-8'>
        <div className={inView ? "fade-in-left" : null}>

          <img className=" rounded-2xl" src={AdPic} />
        </div>
        <div className={`${inView ? "md:fade-in-left" : null} font-primary from-neutral-800 md:text-5xl text-3xl  text-left lg:mt-48 text-gray-800 font-semibold`}> Holiday Abayas are up to 40% off
          <div className='font-primary from-neutral-800 md:text-2xl text-lg  text-left mt-12 mx-4 font-normal'> From office to parties to family gatherings, find your dream speacial occasion abaya at our holiday sale!</div>

        </div>



      </div>
    </>
  );
}

export default AD;