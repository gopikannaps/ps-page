import React from 'react'

function PricingDetails() {
  return (
    <div className="container mx-auto p-6">      
      
      <div className="rounded-lg p-6">
        <h2 className="text-xl pb-2  des-overheading">
       <b>Price :</b>  As on 2024-07-17
        </h2>
        {/* Grid with hr spanning col-span-8 only */}
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <hr className="border-b mb-4" />
          </div>
          <div className="col-span-4"></div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {/* Price per square feet */}
          <div className="col-span-3 des-heading pl-2">Price per square feet</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-2">:</span>
            <span>₹ 4995</span>
          </div>

          {/* Booking amount */}
          <div className="col-span-3 des-heading pl-2">Booking amount</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-2">:</span>
            <span>10%</span>
          </div>

          {/* Description */}
          <div className="col-span-3 des-heading pl-2">Description</div>
          <div className="col-span-5 des-text flex items-start">
            <span className="mr-2">:</span>
            <span>
              EB Charges - Rs 1.25 Lakhs Assessment Charges - Rs 75,000 Impact
              Charges - Rs 60,000 Registration additional
            </span>
          </div>
        </div>
      </div>
         <div className="pl-6">
        <h2 className="text-xl font-semibold mb-4">Project Details :</h2>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <table className="table-auto w-full border-collapse border border-gray-300 des-heading">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-center">Project</th>
                  <th className="border border-gray-300 px-4 py-2 text-center ">Size</th>
                  <th className="border border-gray-300 px-4 py-2 text-center ">Price</th>
                  <th className="border border-gray-300 px-4 py-2 text-center ">Floor Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">1bhk</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">1000sqft</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">32L</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600 text-center">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">2bhk</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">2000sqft</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40L</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button className="bg-orange-500 text-white px-8 py-2 rounded text-center hover:bg-orange-600">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  )
}

export default PricingDetails

