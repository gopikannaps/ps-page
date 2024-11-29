import React from 'react'
import exercise from "../../assets/img/exercise.png"; 
import sportCenter from "../../assets/img/sport-center.png"; 

function Amenities() {
    const amenities = [
      { id: 1, name: "Amenities 1", link: "#", img: exercise },  
      { id: 2, name: "Amenities 2", link: "#", img: exercise },
      { id: 3, name: "Amenities 3", link: "#", img: exercise },
      { id: 4, name: "Amenities 4", link: "#", img: exercise },
      { id: 5, name: "Amenities 5", link: "#", img: exercise },
      { id: 6, name: "Amenities 6", link: "#", img: exercise },
      { id: 7, name: "Amenities 7", link: "#", img: sportCenter },
      { id: 8, name: "Amenities 8", link: "#", img: sportCenter },
      { id: 9, name: "Amenities 9", link: "#", img: sportCenter },
      { id: 10, name: "Amenities 10", link: "#", img: sportCenter },
      { id: 11, name: "Amenities 11", link: "#", img: sportCenter },
      { id: 12, name: "Amenities 12", link: "#", img: sportCenter },
    ];
  
    return (
      <div className="p-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <h2 className="des-overheading mb-4">Amenities</h2>
            <hr className="border-t-2 border-b border-gray-300 mb-6" />
          </div>
          <div className="col-span-4"></div>
        </div>
          <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 grid grid-cols-6 gap-2">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="flex flex-col items-center">
                <a href={amenity.link} className="text-center">
                  <div className="w-10 h-10 mb-1 flex items-center justify-center  rounded-full">
                    <img
                      src={amenity.img}
                      alt={amenity.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="text-sm">{amenity.name}</p>
                </a>
              </div>
            ))}
          </div>
            <div className="col-span-4"></div>
        </div>
      </div>
  )
}

export default Amenities
