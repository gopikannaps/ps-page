
import React from "react";

const OfferComponent = () => {
  return (
    <div className="sticky top-40">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="flex items-center mb-3">
      <h3 className="project-name ">
  Get Offer Discount Up To 5 Laks{' '}
  <a 
    href="#" 
    className=" underline des-heading"
  >
    Check Details
  </a>
</h3>

        </div>
      </div>

      {/* Price Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <h4 className="des-heading text-lf font-medium">
            Price:{" "}
            <span className="text-green-600 font-extrabold text-xl">
              Rs 5,649
            </span>
            <span className="text-gray-400 text-sm line-through ml-2">
              Rs 10,649
            </span>
          </h4>
        </div>

        {/* Voucher Section */}
        <div className="mb-4">
          <h4 className="menu-value mb-2">Voucher</h4>
          <hr className="border-b" />

          <ul className="des-text list-disc pl-5">
            <li>Get 5Gms GRT Gold Voucher</li>
            <li>Get Electric Cycle Worth Value Of 35K</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between space-x-4 mb-4">
          <button className="bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 px-4 rounded-lg w-full">
            Enquiry
          </button>
          <button className="bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 px-4 rounded-lg w-full">
            Site Visit
          </button>
        </div>

        <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg w-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default OfferComponent;
