import React, { useState } from 'react';

function ImageCarousel() {
   // Images with hrefs
  const images = [
    { src: 'https://www.api.propertystreet.co.in/img_project/project_images_1729705222136_Screenshot%202024-07-01%20172818.png', href: '#' },
    { src: 'https://www.api.propertystreet.co.in/img_project/project_images_1729705222139_Screenshot%202024-07-01%20172851.png', href: '#' },
    { src: 'https://www.api.propertystreet.co.in/img_project/project_images_1729705222136_Screenshot%202024-07-01%20172818.png', href: '#' },
    { src: 'https://www.api.propertystreet.co.in/img_project/project_images_1729705222139_Screenshot%202024-07-01%20172851.png', href: '#' },
    { src: 'https://www.api.propertystreet.co.in/img_project/project_images_1729705222136_Screenshot%202024-07-01%20172818.png', href: '#' },
    { src: 'https://www.api.propertystreet.co.in/img_project/project_images_1729705222139_Screenshot%202024-07-01%20172851.png', href: '#' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const visibleImages = images.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < images.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
    <div className="relative w-full max-w-4xl mx-auto pt-5">
      {/* Carousel Container */}
      <div className="flex items-center justify-start space-x-4 overflow-hidden ml-8 mr-8">


        {/* Images */}
        {visibleImages.map((image, index) => (
          <a
            href={image.href}
            key={index}
            className="block flex-shrink-0 w-[209px] h-[144px]"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full focus:outline-none hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex + itemsPerPage >= images.length}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full focus:outline-none hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#8250;
      </button>
    </div>
    </>

  )
}

export default ImageCarousel

