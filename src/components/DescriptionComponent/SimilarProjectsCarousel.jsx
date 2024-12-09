import React, { useState } from "react";
import carousel1 from "../../assets/img/carousel1.png"
import carousel2 from "../../assets/img/carousel2.png"
import carousel3 from "../../assets/img/carousel3.png"
import carousel5 from "../../assets/img/carousel5.png"
import carousel6 from "../../assets/img/carousel6.png"
import carousel7 from "../../assets/img/carousel7.png"


const SimilarProjectsCarousel = () => {
  const projects = [
    {
      id: 1,
      image: carousel1, 
      name: "Urbanrise - The World Of Joy",
      location: "Siruseri",
      brand: "Urban Rise",
      possession: "Under Construction",
      price: "21L - 64L",
      link: "#", 
    },
    {
      id: 2,
      image: carousel7, 
      name: "Viva - Velvet",
      location: "Zamin Pallavaram",
      brand: "Viva Housing",
      possession: "RTMI",
      price: "72L - 1.19C",
      link: "#", 
    },
    {
      id: 3,
      image: carousel3, 
      name: "Sai Hazel",
      location: "Anakaputhur",
      brand: "Bharathi Construction",
      possession: "RTMI",
      price: "42L - 64L",
      link: "#", 
    },
    {
      id: 4,
      image: carousel5, 
      name: "BC ORCHID",
      location: "Pammal",
      brand: "Bharathi Construction",
      possession: "Under Construction",
      price: "59.58L - 81.24L",
      link: "#", 
    },
    {
      id: 5,
      image: carousel6, 
      name: "Viva - Vikas & Vilas",
      location: "Madipakkam",
      brand: "Viva Housing",
      possession: "Nearing Possession",
      price: "79L - 89L",
      link: "#", 
    },
    {
        id: 6,
        image: carousel2, 
        name: "Sai Whiteberry",
        location: "Pallavaram",
        brand: "Bharathi Construction",
        possession: "Under Construction",
        price: "33L - 77.78L",
        link: "#", 
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 4);

  return (
    <div className="container mx-auto px-8 pt-10 pb-10">
      <h2 className="des-overheading mb-6 inline-block">
  Similar Projects
</h2>
<p className="des-text inline-block ml-4">
  Suscipit Cupidtate Dolorem Est Distinctio Voluptatem A Dolor. Facilis Sunt A Soluta Incidunt Et Mollitia Vel Eius Ipsum.
</p>

      <div className="grid grid-cols-12 gap-4">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="col-span-3 border rounded-lg shadow-md bg-white"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </a>
            <div className="p-4">
              <h3 className="mb-2 des-overheading">
                {project.name}
              </h3>
              <p className="des-text mb-1">
                Location: {project.location}
              </p>
              <p className="des-text mb-1">
                Brand: {project.brand}
              </p>
              <p className="des-text mb-1">
                Possession: {project.possession}
              </p>
              <p className="des-overheading">
                {project.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-950" : "bg-gray-400"
            }`}
          ></button>
          )
        )}
      </div>
    </div>
  );
};

export default SimilarProjectsCarousel;
