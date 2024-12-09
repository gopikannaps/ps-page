import React from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    date: "03 Dec 2024",
    rating: 4,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Tempus Lorem Orci Nam Etiam. Facilisi At Ipsum Leo Aliquam Euismod. Nibh Vitae Feugiat Sed Feugiat Integer. Pretium Varius Quam Scelerisque Maecenas Cursus Nunc Eleifend Dictum Ac.",
    avatar: "https://www.api.propertystreet.co.in/img_banner/project_banner_1689960687798_viva%20velvet.png", // Replace with your avatar URL
  },
  {
    id: 2,
    name: "John Doe",
    date: "03 Dec 2024",
    rating: 4,
    text: "We Would Like To Introduce Ourselves As A Reputed Builder In Chennai, India. Incorporated In The Year 1995, M/S.",
    avatar: "https://www.api.propertystreet.co.in/img_banner/project_banner_1689960687798_viva%20velvet.png", // Replace with your avatar URL
  },
  {
    id: 3,
    name: "John Doe",
    date: "03 Dec 2024",
    rating: 4,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Dis Molestie Pulvinar Pellentesque Arcu Sit Nisl Molestie Neque Integer. Aliquet Sit Consectetur In Mi.",
    avatar: "https://www.api.propertystreet.co.in/img_banner/project_banner_1689960687798_viva%20velvet.png", // Replace with your avatar URL
  },
  {
    id: 4,
    name: "John Doe",
    date: "03 Dec 2024",
    rating: 4,
    text: "Lorem Ipsum Dolor Sit Amet Consectetur. Dis Molestie Pulvinar Pellentesque Arcu Sit Nisl Molestie Neque Integer. Aliquet Sit Consectetur In Mi.",
    avatar: "https://www.api.propertystreet.co.in/img_banner/project_banner_1689960687798_viva%20velvet.png", // Replace with your avatar URL
  },
];

const ReviewSection = () => {
  return (
    <div className="container mx-auto py-10 pl-5">
      <div className="grid grid-cols-12 gap-6">
        {/* Reviews Section */}
        <div className="col-span-10">
          {reviews.map((review) => (
            <div key={review.id} className="mb-6">
              <div className="flex items-start">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center mb-3">
                    {/* Stars */}
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={index < review.rating ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={`w-5 h-5 ${
                            index < review.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      ))}
                  </div>
                  <p className="des-text">{review.text}</p>
                </div>
              </div>
              <hr className="border-t border-gray-300 mt-4" />
            </div>
          ))}
        </div>

        {/* Empty Column */}
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default ReviewSection;
