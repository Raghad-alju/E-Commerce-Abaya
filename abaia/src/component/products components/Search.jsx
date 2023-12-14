import React from "react"
import { allProducts } from "../Products"


export default function({updateSearchList}){
    function handleSearch(e){

        var value=e.target.value;
        if(value==='')
        updateSearchList([]);
        console.log('value',value)
        var searchedList= allProducts.filter((
            (p)=>{
                
                let mainList=p.name.substring(0,value.length).toLowerCase()
                return (mainList===value.toLowerCase())}
        ))
        console.log('search',searchedList.length)

         updateSearchList(searchedList);
    }

    return( <>
    
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative  top-24 m-16">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
      </div>
      <input type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 " placeholder="Search Mockups, Logos..." onChange={handleSearch}/>
  </div>
  </> 
)
}