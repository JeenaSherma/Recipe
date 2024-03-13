import React from 'react'
import {Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div className='flex justify-between font-mono h-16 items-center px-8 text-slate-500'>
        <div>
            <div>Recipe Logo</div>
        </div>
    <div className='flex gap-5'>
    <div className='cursor-pointer hover:bg-pink-300 hover:text-pink-500 '>Home</div>
    <div className='cursor-pointer hover:text-pink-400 hover:underline text-slate-500'>Recipes</div> 
    <div className='cursor-pointer hover:text-pink-400'>BLog</div>
    <div className='cursor-pointer hover:text-pink-400'>About Us</div>
    <div className='cursor-pointer hover:text-pink-400'>Contact</div>
    </div>
    <div>
    <div className='cursor-pointer'>
<form class="max-w-md mx-auto">   
    <label for="" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> 
        </div>
        <input type="search" id="" class="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Recipe" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 px-4 py-2"> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
     </svg></button>
    </div>
</form>
</div>
    </div>
    </div>
    <div><Outlet/></div>

    </>
  )
}
export default Layout