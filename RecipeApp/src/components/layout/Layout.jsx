import React from 'react'
import {Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div className='flex justify-between'>
        <div>
            <div>Logo</div>
        </div>
    <div className='flex justify-between'>
    <div>Home</div>
    <div>Recipes</div> 
    <div>BLog</div>
    <div>About Us</div>
    <div>Contact</div>
    </div>
    <div>
    <div>Search box</div>
    </div>
    </div>
    <div><Outlet/></div>

    </>
  )
}

export default Layout