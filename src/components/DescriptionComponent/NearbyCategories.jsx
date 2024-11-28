import React from 'react'
import near from "../../assets/img/nearMeV2.png"

function NearbyCategories() {
  return (
    <div className="container mx-auto px-12 py-6">
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <h2 className="text-xl font-bold text-black">Schools            </h2>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-blue-950 text-sm font-medium hover:underline flex items-center"
            >   Check near by Schools
              <span className="ml-2">
             <img
                src={near}
                alt="Icon"
                className="w-10 h-10"
                />
              </span>
            </a>
          </div>
        </div>
        <hr className="border-b" />
      </div>

      <div className="col-span-12 md:col-span-4">
        <div className="flex items-center justify-between pb-4">
          <div>
            <h2 className="text-xl font-bold text-black">Colleges </h2>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-blue-950 text-sm font-medium hover:underline flex items-center"
            >
              Check near by Colleges
              <span className="ml-2">
             <img
                src={near}
                alt="Icon"
                className="w-10 h-10"
                />
              </span>
            </a>
          </div>
        </div>
        <hr className="border-b" />
      </div>

      <div className="col-span-12 md:col-span-4"></div>
    </div>
  </div>

  )
}

export default NearbyCategories
