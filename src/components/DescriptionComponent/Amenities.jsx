import React from 'react';
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
      {/* Heading Section */}
      <div className="mb-6">
        <h2 className="des-overheading mb-4">Amenities</h2>
        <hr className="border-b mb-4" />
      </div>

      {/* Amenities List */}
      <div className="flex flex-wrap justify-start gap-4">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="flex flex-col items-center w-32">
            <a href={amenity.link} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full">
                <img
                  src={amenity.img}
                  alt={amenity.name}
                  className="w-10 h-10"
                />
              </div>
              {/* Text */}
              <p className="text-sm">{amenity.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
