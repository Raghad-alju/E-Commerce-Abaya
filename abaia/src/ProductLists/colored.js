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
  
  const images = importAll(require.context('../Abayas photos/colored', false, /\.(png|jpe?g|svg)$/));


  
const colored=[
    {
        id: '8935',
        name:'Pink Bage Abaya',
        img:images['bage.jpg'],
        price:45
    },
    
    {
        id: '6509',
        name:'Bage Abaya',
        img:images['bage1.jpg'],
        price:46
    },
    {
        id: '2608',
        name:'Dark Green Abaya',
        img:images['dark_green.jpg'],
        price:33
    },
    {
        id: '1359',
        name:'Solid Black Abaya',
        img:images['violet.jpg'],
        price:57
    },
 
]

export default colored;