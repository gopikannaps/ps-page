import React from 'react'
import Overview from './Overview';
import Location from './Location';
import NearbyCategories from './NearbyCategories';
import PricingDetails from './PricingDetails';
import LiveInventory from './LiveInventory';
import AboutBrand from './AboutBrand';
import Amenities from './Amenities';
import Review from './Review';
import ReviewSection from './ReviewSection';


function OverallDescription() {
  return (
    <div>
      <Overview></Overview>
      <Location />
      <NearbyCategories />
      <PricingDetails />
      <LiveInventory />
      <AboutBrand />
      <Amenities />
      <Review />
      <ReviewSection />
    </div>
  )
}

export default OverallDescription
