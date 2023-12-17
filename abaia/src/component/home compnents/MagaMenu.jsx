
import React, { useEffect, useRef, useState } from 'react';
import Winter from '../../Abayas photos/Winter_s.jpg'
import Colored from '../../Abayas photos/Summer_s.jpg'
import Casual from '../../Abayas photos/Casual_s.jpg'
import Special from '../../Abayas photos/Speical_s.jpg'
import Dress from '../../Abayas photos/Dress_s.jpg'
import ViewAll from '../../Abayas photos/V_A.jpg'
import Trending from '../../Abayas photos/T_s.jpg'
import {Link} from 'react-router-dom'

import catogires from './catogires';

const dashboardCato=[
  { id:6,
    name:'Trending'
    , img:Trending
    },
  {...catogires[0]
  , img:Winter
  },
  {...catogires[1]
  , img:Colored
  },
  {...catogires[2]
  , img:Casual
  },
  {...catogires[3]
  , img:Special
  },
  {...catogires[4]
  , img:Dress
  },
  { id:7,
    name:'View All'
    , img:ViewAll
    },
]

var drawerTranstion='fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-100 w-64'
function MagaMenu() {

  const [bg,bgState]=useState(true)
  const drawerRef=useRef();
  const listItemStyle = `block py-2 px-3 md:px-1 md:py-0 rounded md:bg-transparent hover:bg-white-pastel-yellow  active:bg-violet-700 focus:white-pastel-yellow  decoration-gray-700  decoration-2  md:border-0 font-primary text-gray-700`
  function drawerTranstionDrawer(){
    drawerTranstion=drawerRef.current.className
    drawerRef.current.className = drawerTranstion + ' transition-transform translate-x-0 '
    setBgState(false)
  }
  function closeDrawer(){
    
    drawerRef.current.className = drawerTranstion
    setBgState(true)
    
  }

 
  function setBgState(val){
    bgState(val)
  }
  

  return (
    <>
    <div className='  fixed top-0  backdrop-blur bg-blend-saturation focus: h-screen w-screen z-30' hidden={bg} onClick={closeDrawer}></div>
    
    <nav className="fixed border-gray-200 bg-white-yellow w-full z-10 top-11 ">
      <div className="max-w-screen-xl flex flex-wrap md:items-center md:justify-center  mx-auto  md:p-2  pt-1">

        <button onClick={drawerTranstionDrawer}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " >
          <span className="sr-only">drawerTranstion main menu</span>

          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>

        </button>


     
        {/*MainMenu*/}
        <div className="hidden w-full md:block md:w-auto" >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            {dashboardCato.map((cat)=>{
              return(<li key={cat.id}>
              <Link to={`/products/${cat.name}`} className={listItemStyle+' max-lg:line-clamp-1'} >{cat.name}</Link>
            </li>)
            })}
            
            
           
          </ul>
        </div>
      </div>
      
    </nav>
       {/*drawer*/}
       <div ref={drawerRef} className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-100 w-64 " tabindex="-1" aria-labelledby="drawer-navigation-label">
       <h5  className="text-base font-primary text-gray-500  ">Categories</h5>

       <button onClick={closeDrawer} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center " >

         <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
         </svg>

         <span className="sr-only">Close menu</span>
       </button>

       <div className="py-4 overflow-y-auto">
         <ul className="space-y-2 font-medium">
           {dashboardCato.map((cat)=>{
             return (
               <>
               <li key={cat.id}>
             <Link to={`products/${cat.name}`} onClick={closeDrawer} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ">
               <img className=" relative w-16 h-16 rounded-full text-gray-700" src={cat.img}/>
               <span className="ms-3 font-primary">{cat.name}</span>
             </Link>
           </li>
           <span className=' underline decoration-gray-300  text-transparent'>-----------------------------</span>
             </>
             )
           })}
          
         </ul>
       </div>
     </div>
  </>
  );
}

export default MagaMenu;