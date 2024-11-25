import React from 'react'

function Menubar() {
  return (
    <div>
       <div className="bg-white text-blue-900 sub-header font-display ">
      <nav className="flex justify-center space-x-6 py-3  ">
        {/* Menu Items */}
        <ul className='sub-nav-warper'>
            <li><a href="#"  className=" transition duration-200">Home</a></li>
            <li><a href="#"  className=" transition duration-200">Project</a></li>
            <li><a href="#"  className=" transition duration-200">Q & A</a></li>
            <li><a href="#"  className=" transition duration-200">Documents</a></li>
            <li><a href="#"  className=" transition duration-200">Partner Network</a></li>
            <li><a href="#"  className=" transition duration-200">Compare Project</a></li>
            <li><a href="#"  className=" transition duration-200">Chat Room</a></li>
            <li><a href="#"  className=" transition duration-200">Inventory</a></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Menubar
