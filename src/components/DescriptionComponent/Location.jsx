import React from 'react';

const Location = () => {
  return (
<div className="container mx-auto p-6">
  <div className="rounded-lg ">
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <h2 className="text-xl font-semibold pb-2 mb-2 des-overheading">Location</h2>
        <hr className="border-b mb-6" /> 
      </div>
    </div>

    {/* Content Section */}
    <div className="grid grid-cols-12 gap-4">
        {/* Map Embed */}
        <div className="col-span-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.045512032805!2d80.099251!3d12.938366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f7fee1816d1%3A0x6de5084daa242ec8!2sPace%20Anusa%2C%20Service%20Rd%2C%20West%20Tambaram%2C%20Tamil%20Nadu%20602109!5e0!3m2!1sen!2sin!4v1732707965555!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-md shadow"
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>

        {/* Static Image */}
        <div className="col-span-6">
          <img
            src="https://www.api.propertystreet.co.in/img_project/project_images_1700830166148_anusalocmap.jpg"
            width="100%"
            height="250"
            alt="Project Location"
            className="w-full h-auto rounded-md shadow"
          />
        </div>
    </div>
  </div>
</div>

  );
};

export default Location;
