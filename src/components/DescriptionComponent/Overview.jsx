import React from 'react'
import Location from './Location'
import NearbyCategories from './NearbyCategories'
import PricingDetails from './PricingDetails'
import LiveInventory from './LiveInventory'
import AboutBrand from './AboutBrand'
import Amenities from './Amenities'
import Review from './Review'

function Overview() {
  return (
  <>
  <div className="container mx-auto p-6">
  <div className="rounded-lg p-6">
    <h2 className="text-xl font-semibold pb-2 des-overheading">Overview</h2>
        <div className="grid grid-cols-12">
      <div className="col-span-8">
        <hr className="border-b" />
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4">
      {/* Property Type */}
      <div className="col-span-3 des-heading pl-2">Property Type</div>
      <div className="col-span-8 des-text">:&nbsp;Residential</div>

      {/* Floor */}
      <div className="col-span-3 des-heading pl-2">Floor</div>
      <div className="col-span-8 des-text">:&nbsp;S + 4</div>

      {/* Towers */}
      <div className="col-span-3 des-heading pl-2">Towers</div>
      <div className="col-span-8 des-text">:&nbsp;4</div>

      {/* Area */}
      <div className="col-span-3 des-heading pl-2">Area</div>
      <div className="col-span-8 des-text">:&nbsp;1176 Sqft - 1561 Sqft</div>

      {/* Community Type */}
      <div className="col-span-3 des-heading pl-2">Community Type</div>
      <div className="col-span-8 des-text">:&nbsp;Gated Community</div>

      {/* Approved Authority */}
      <div className="col-span-3 des-heading pl-2">Approved Authority</div>
      <div className="col-span-8 des-text">:&nbsp;CMDA</div>

      {/* RERA No */}
      <div className="col-span-3 des-heading pl-2">RERA NO</div>
      <div className="col-span-8 des-text">:&nbsp;-</div>

      {/* Address */}
      <div className="col-span-3 des-heading pl-2">Address</div>
      <div className="col-span-8 des-text">:&nbsp;Service Rd, West Tambaram, Tamil Nadu 602109</div>

      {/* Description */}
      <div className="col-span-3 des-heading pl-2">Description</div>
      <div className="col-span-5 flex gap-x-2 des-text">
        <span>:</span>
        <span>
          Location :Tambaram West, on Maduravoyal Bypass Service Road. Type:2 & 3 Bhk Apartments 800 sq.ft frontage 296 well planned affordable housing spread across 4 acres with Stilt + 4 floors in 4 blocks Close to major Schools , Hospitals & Theme parks Lush green hill view Premium specification: Vitrified tiles Teak wood joineries Parryware sanitary & CP fittings Modular switches Dadoing upto ceiling heights
        </span>
      </div>
    </div>
  </div>
</div>

 <Location></Location>
 <NearbyCategories></NearbyCategories>
 <PricingDetails></PricingDetails>
 <LiveInventory></LiveInventory>
 <AboutBrand></AboutBrand>
 <Amenities></Amenities>
 <Review></Review>
    </>
  )
}

export default Overview
