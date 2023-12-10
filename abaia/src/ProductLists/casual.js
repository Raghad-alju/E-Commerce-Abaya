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
  
  const images = importAll(require.context('../Abayas photos/casual', false, /\.(png|jpe?g|svg)$/));


  
const casualProducts=[
    {
        id: '3796',
        name:'Embroidered  Abaya',
        img:images['emp2.jpg'],
        price:50
    },
    
    {
        id: '3827',
        name:'Embroidered Abaya',
        img:images['emp_abaya.jpg'],
        price:56
    },
    {
        id:'4498',
        name:'Embroidered Abaya',
        img:images['emp3.jpg'],
        price:33
    },
    {
        id: '9546',
        name:'Solid Black Abaya',
        img:images['solid_black.jpg'],
        price:57
    },
    {
        id: '4543',
        name:'Solid Black Abaya',
        img:images['solid_black1.jpg'],
        price:33
    },
]

export default casualProducts;