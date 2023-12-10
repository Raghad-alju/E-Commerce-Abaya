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


import React from 'react';
import { Carousel } from 'flowbite-react';
import 'flowbite'
import banner1 from '../../Abayas photos/Banner_1.png'
import banner2 from '../../Abayas photos/Banner_2.png'

const cust={
    "root": {
      "base": "relative h-full  max-sm:h-s w-full",
      "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    "indicators": {
      "active": {
        "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        "on": "bg-white dark:bg-gray-800"
      },
      "base": "",
      "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
      "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-40 h-80",
      "wrapper": {
        "off": "w-full flex-shrink-0 transform cursor-default snap-center",
        "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    "control": {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    "scrollContainer": {
      "base": "flex md:h-80 h-full max-sm:h-28 snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  }
function HeaderPicture() {
  return (
    <div className=" lg:mx-auto md:mt-32 mt-32 sm:h-64 h-24 xl:h-74 mx-4">
      <Carousel slideInterval={5000} theme={cust} leftControl=' ' rightControl=' '>
      <div className="flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={banner1}/>
      </div>
      <div className="flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src={banner2}/>
      </div>
      
    </Carousel>
  </div>
  );
}

export default HeaderPicture;