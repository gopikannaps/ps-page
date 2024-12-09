import React from 'react';

function Overview() {
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="rounded-lg p-6">
          <h2 className="text-xl font-semibold pb-2 des-overheading">Overview</h2>
          <hr className="border-b" />

          <div className="space-y-4 mt-6">
            {/* Property Type */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">Property Type</div>
              <div className="w-2/3 des-text">:&nbsp;Residential</div>
            </div>

            {/* Floor */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">Floor</div>
              <div className="w-2/3 des-text">:&nbsp;S + 4</div>
            </div>

            {/* Towers */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">Towers</div>
              <div className="w-2/3 des-text">:&nbsp;4</div>
            </div>

            {/* Area */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">Area</div>
              <div className="w-2/3 des-text">:&nbsp;1176 Sqft - 1561 Sqft</div>
            </div>

            {/* Community Type */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">Community Type</div>
              <div className="w-2/3 des-text">:&nbsp;Gated Community</div>
            </div>

            {/* Approved Authority */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">Approved Authority</div>
              <div className="w-2/3 des-text">:&nbsp;CMDA</div>
            </div>

            {/* RERA No */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">RERA NO</div>
              <div className="w-2/3 des-text">:&nbsp;-</div>
            </div>

            {/* Address */}
            <div className="flex items-center">
              <div className="w-1/3 des-heading pl-2">Address</div>
              <div className="w-2/3 des-text">:&nbsp;Service Rd, West Tambaram, Tamil Nadu 602109</div>
            </div>

            {/* Description */}
            <div className="flex items-start">
              <div className="w-1/3 des-heading pl-2">Description</div>
              <div className="w-2/3 des-text">
                <span>:</span>
                <span>
                  Location: Tambaram West, on Maduravoyal Bypass Service Road. Type: 2 & 3 Bhk Apartments 800 sq.ft frontage 296 well planned affordable housing spread across 4 acres with Stilt + 4 floors in 4 blocks. Close to major Schools, Hospitals & Theme parks. Lush green hill view. Premium specification: Vitrified tiles, Teak wood joineries, Parryware sanitary & CP fittings, Modular switches, Dadoing upto ceiling heights.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;

