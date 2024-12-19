import React from 'react';
import near from "../../assets/img/nearMeV2.png";

function NearbyCategories() {
  return (
    <div className="container mx-auto pl-6">
      {/* Flexbox Layout */}
      <div className="flex flex-wrap gap-6">
        {/* Schools Section */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-xl font-bold text-black">Schools</h2>
            <a
              href="#"
              className="text-blue-950 text-sm font-medium hover:underline flex items-center"
            >
              Check nearby Schools
              <span className="ml-2">
                <img
                  src={near}
                  alt="Icon"
                  className="w-10 h-10"
                />
              </span>
            </a>
          </div>
          <hr className="border-b" />
        </div>

        {/* Colleges Section */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-xl font-bold text-black">Colleges</h2>
            <a
              href="#"
              className="text-blue-950 text-sm font-medium hover:underline flex items-center"
            >
              Check nearby Colleges
              <span className="ml-2">
                <img
                  src={near}
                  alt="Icon"
                  className="w-10 h-10"
                />
              </span>
            </a>
          </div>
          <hr className="border-b" />
        </div>
        <div className="w-full md:w-1/3"></div>
      </div>
    </div>
  );
}

export default NearbyCategories;
