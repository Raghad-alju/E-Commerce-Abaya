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

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../Abayas photos/winter', false, /\.(png|jpe?g|svg)$/));

  
    //const images = require.context('..\..\images', true);
    //const imageList = images.keys().map(image => images(image));

  
const winterProducts=[
    {
        id: '4838',
        name:'Colored Winter Abaya',
        img:images['colored_winter.jpg'],
        price:50
    },
    
    {
        id: '4837',
        name:'Jacket Abaya',
        img:images['jacket_abaia.jpg'],
        price:56
    },
    {
        id: '4835',
        name:'Brown winter Abaya',
        img:images['brown_winter.jpg'],
        price:33
    },
    {
        id: '4739',
        name:'Mixed Colors Abaya',
        img:images['mixed_colors.jpg'],
        price:57
    },
    {
        id: '6448',
        name:'Soft Black Abaya',
        img:images['soft_black.jpg'],
        price:33
    },
    {
        id: '6446',
        name:'Soft Dark blue',
        img:images['soft_dark_blue.jpg'],
        price:35
    },
]

export default winterProducts;