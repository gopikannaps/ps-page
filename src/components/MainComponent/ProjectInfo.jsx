import React from 'react'

function ProjectInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 menu-value">
      <h1 className="text-2xl mb-4 project-name ">Pace Anusa</h1>
      <hr className="border-t-2 border-orange-300 mb-4" />

      <div className="space-y-2 text-sm text-gray-700">
        <div className="grid grid-cols-12">
          <span className="col-span-4 font-semibold menu-text">Price</span>
          <span className="col-span-8 menu-value"> <b>: &nbsp; ₹ 63 Lakhs – ₹ 81 Lakhs</b> </span>
        </div>
        <div className=" grid grid-cols-12">
          <span className="col-span-4 font-semibold menu-text">Location</span>
          <span className="col-span-8 menu-value "><b>: &nbsp; West Tambaram</b></span>
        </div>
        <div className="grid grid-cols-12">
          <span className="col-span-4 font-semibold menu-text">Brand</span>
          <span className="col-span-8 menu-value"><b>: &nbsp; Pace Builders</b></span>
        </div>
        <div className="grid grid-cols-12">
          <span className="col-span-4 font-semibold menu-text">Type</span>
          <span className="col-span-8 menu-value"><b>: &nbsp; Apartment</b></span>
        </div>
        <div className="grid grid-cols-12">
          <span className="col-span-4 font-semibold menu-text">Possession</span>
          <span className="col-span-8 menu-value"><b>: &nbsp; RTMI</b></span>
        </div>
        <div className="grid grid-cols-12">
          <span className="col-span-4 font-semibold menu-text">Configuration</span>
          <div className="col-span-8 menu-value space-x-2"><b>:&nbsp;</b>
            <span className="bg-gray-200 text-gray-800 rounded-md px-2 py-1 menu-value ">
              <b>2 BHK</b>
            </span>
            <span className="bg-gray-200 text-gray-800 rounded-md px-2 py-1 menu-value">
              <b>3 BHK</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo


