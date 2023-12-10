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

import catogires from './catogires.js'
//let Logo = require('./images/scaler-logo.png')



function Explore() {
    return (
        <>
            <div className="inline-grid justify-center grid-cols-3 md:grid-cols-5 gap-4 lg:pt-9 lg:pb-4 p-4 max-sm:row-span-2 ">
                {catogires.map((cat) => {
                    return (
                        <div key={cat.id}>
                            <img className=" h-auto max-w-full rounded-lg shadow-xl" src={cat.image} alt="catogry image" />
                            <div className="flex justify-center font-primary max-sm:text-xs py-2">{cat.name}</div>
                        </div>)
                })}


            </div>


        </>
    );
}

export default Explore;