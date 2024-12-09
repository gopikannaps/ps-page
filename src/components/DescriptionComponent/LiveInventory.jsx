import React from 'react';

function LiveInventory() {
  return (
    <div className="container mx-auto p-6 pl-12">
      {/* Heading Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold pb-2 des-overheading">Brochure & Floor Plan</h2>
        <hr className="border-b mb-4" />
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap gap-4">
        {/* Image 1 */}
        <div className="w-[208px] h-[239px]">
          <img
            src="https://www.propertystreet.co.in/img/inventoryN.jpeg"
            alt="Inventory Image 1"
            className="cursor-pointer w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-[208px] h-[239px]">
          <img
            src="https://www.propertystreet.co.in/img/inventoryN.jpeg"
            alt="Inventory Image 2"
            className="cursor-pointer w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LiveInventory;

