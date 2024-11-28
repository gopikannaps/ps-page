import React from 'react'

function LiveInventory() {
  return (
    <div className="container mx-auto p-6 pl-12">
    <h2 className="text-xl font-semibold pb-2 des-overheading">Brochure & Floor Plan</h2>
        <div className="grid grid-cols-12">
      <div className="col-span-8">
        <hr className="border-b mb-4" />
      </div>
      <div className="col-span-4"></div>
    </div>
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8 flex justify-start">
        <img
          src="https://www.propertystreet.co.in/img/inventoryN.jpeg" 
          alt="Inventory Image 1"
          className="cursor-pointer w-48 h-48 mr-4" 
        />
        <img
          src="https://www.propertystreet.co.in/img/inventoryN.jpeg" 
          alt="Inventory Image 2"
          className="cursor-pointer w-48 h-48"
        />
      </div>
      <div className="col-span-4"></div>
    </div>
  </div>
  )
}

export default LiveInventory
