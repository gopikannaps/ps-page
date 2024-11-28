import React from 'react'

function AboutBrand() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 p-6">
          <h2 className="text-2xl des-overheading mb-4">About Brand</h2>

          <div className="col-span-8">
          <hr className="border-b mb-4" />
        </div>
        <div className='des-text'>
          <p className="mb-4 ">
            We Would Like To Introduce Ourselves As A Reputed Builder In Chennai, India. 
            Incorporated In The Year 1995, M/S. Pace Builders (Madras) Private Limited, 
            Is A Chennai Based Property Developer Promoted By Experienced Engineers And 
            Equipped With The Required Manpower And Sophisticated Equipment To Construct 
            State Of The Art Modern Structures.
          </p>
          <p className="mb-4">
            The Company Has A Background Of 20 Lakhs Sq.Ft. Already Handed Over And 40 
            Lakhs Sq.Ft. In The Pipe Line.
          </p>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 ">
            Enquiry
          </button>
        </div>
                <div className="col-span-4"></div>
      </div>
    </div>
  )
}

export default AboutBrand
