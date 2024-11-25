import React from 'react'
import logo from '../../assets/img/logo1.png'
import Menubar from './Menubar'

function Newbar() {
  return (
  <div>
    <nav className="navbar-bg text-white flex justify-between items-center px-6 py-3 font-display">
    {/* Left Section - Logo*/}
    <a href="/" className="flex items-center">
      <img
        src={logo}
        alt="Property Street Logo"
        className="w-custom-logo h-custom-logo"
      />
    </a>

   {/* Right Section - Options */}
   <div className="flex items-center space-x-4 ml-auto">
        {/* Search Button */}
        <button className="search-btn mr-3rem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 search-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <span>Search</span>
        </button>

        {/* Login Button */}
        <button className="flex items-center space-x-1 text-white/90 hover:text-white mr-3rem ">
          <span className="material-icons "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search-icon size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg></span>
          <span>Log In</span>
        </button>

        {/* Post Property Button */}
        <button className="post-property-btn-header">
          Post Property
          <span className='bg-blue-950 text-white px-2 py-1 rounded-full'>Free</span>
        </button>
      </div>
    </nav>
    
    <Menubar></Menubar>

    </div>
  )
}

export default Newbar

