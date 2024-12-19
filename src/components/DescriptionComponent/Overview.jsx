import React from 'react';

function Overview() {
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="rounded-lg">
          <h2 className="text-xl font-semibold pb-2 des-overheading">Overview</h2>
          <hr className="border-b" />


          <div className="grid grid-cols-12 gap-4 pt-3">
          {/* Price per square feet */}
          <div className="col-span-4 des-heading pl-2 ">Property Type</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-4">:</span>
            <span>Residential</span>
          </div>

          {/* Booking amount */}
          <div className="col-span-4 des-heading pl-2">Towers</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-4">:</span>
            <span>4</span>
          </div>

          {/* Description */}
          <div className="col-span-4 des-heading pl-2">Floor</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-4">:</span>
            <span>
              S+4
            </span>
          </div>

          <div className="col-span-4 des-heading pl-2">Area</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-4">:</span>
            <span>1176 Sqft - 1561 Sqft</span>
          </div>

          <div className="col-span-4 des-heading pl-2">Approved Authority</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-4">:</span>
            <span>CMDA</span>
          </div>

          <div className="col-span-4 des-heading pl-2">Address</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-4">:</span>
            <span>Service Rd, West Tambaram, Tamil Nadu 602109</span>
          </div>

          <div className="col-span-4 des-heading pl-2">Description</div>
          <div className="col-span-8 des-text flex items-start">
            <span className="mr-4">:</span>
            <span>Location :Tambaram West, on Maduravoyal Bypass Service Road. Type :2 & 3 Bhk Apartments 800 sq.ft frontage 296 well planned affordable housing spread across 4 acres with Stilt + 4 floors in 4 blocks Close to major Schools , Hospitals & Theme parks Lush green hill view Premium specification: Vitrified tiles Teak wood joineries Parryware sanitary & CP fittings Modular switches Dadoing upto ceiling heights</span>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Overview;