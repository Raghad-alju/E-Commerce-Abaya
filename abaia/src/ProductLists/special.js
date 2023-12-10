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
  
  const images = importAll(require.context('../Abayas photos/special', false, /\.(png|jpe?g|svg)$/));


  
const special=[
    {
        id: '3593',
        name:'Brown Embroidered Abaya',
        img:images['brown_emp.jpg'],
        price:45
    },
    
    {
        id: '3943',
        name:'Dark Blue Embroidered',
        img:images['dark_blue_emp.jpg'],
        price:46
    },
    {
        id: '1785',
        name:'Black Embroidered Abaya',
        img:images['emp.jpg'],
        price:33
    },
    {
        id: '4752',
        name:'Black Embroidered Abaya',
        img:images['emp2.jpg'],
        price:33
    },
   
 
]

export default special;