// import React, { useState } from "react";

// const Review = () => {
//   const [rating, setRating] = useState({
//     location: 2,
//     price: 2,
//     brand: 2,
//     construction: 2,
//   });

//   const handleRating = (key, value) => {
//     setRating((prev) => ({ ...prev, [key]: value }));
//   };

//   return (
//     <div className=" p-6">
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-8">
//           <h2 className="des-overheading mb-2">Review</h2>
//           <hr className="border-t-2 border-orange-300 mb-6" />
//         </div>
//         <div className="col-span-4"></div>
//       </div>

//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-4">
//           <div className="space-y-4 des-heading">
//             {["Location", "Price", "Brand", "Construction"].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center justify-between w-full"
//               >
//                 <p className="text-lg font-medium">{item}</p>
//                 <div className="flex space-x-1">
//                   {[1, 2, 3, 4, 5].map((value) => (
//                     <button
//                       key={value}
//                       onClick={() => handleRating(item.toLowerCase(), value)}
//                       className={`w-6 h-6 text-lg ${
//                         rating[item.toLowerCase()] >= value
//                           ? "text-orange-500"
//                           : "text-gray-400"
//                       }`}
//                     >
//                       ★
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="col-span-4 flex flex-col items-center justify-center">
//           <div className="text-center">
//             <p className="text-lg font-medium mb-2">Overall Review</p>
//             <p className="text-4xl font-bold">
//               {(
//                 Object.values(rating).reduce((sum, val) => sum + val, 0) / 4
//               ).toFixed(1) || 0}
//               /5
//             </p>
//           </div>
//         </div>

//         <div className="col-span-4"></div>
//       </div>

//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-7">
//           <div className="mt-6">
//             <textarea
//               placeholder="Your Comment Here..."
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:outline-none"
//               rows="4"
//             ></textarea>

//             <div className="flex justify-between mt-4">
//               <button className="bg-orange-300 text-white font-medium py-2 px-4 rounded hover:bg-orange-400">
//                 Choose File
//               </button>
//               <button className="bg-orange-500 text-white font-medium py-2 px-6 rounded hover:bg-orange-600">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-4"></div>
//       </div>
//     </div>
//   );
// };

// export default Review;



import React, { useState } from "react";

const Review = () => {
  const [rating, setRating] = useState({
    location: 2,
    price: 2,
    brand: 2,
    construction: 2,
  });

  const handleRating = (key, value) => {
    setRating((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className=" p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h2 className="des-overheading mb-2">Review</h2>
          <hr className="border-b mb-4" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <div className="space-y-4 des-heading">
            {["Location", "Price", "Brand", "Construction"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between w-full"
              >
                <p className="text-lg font-medium">{item}</p>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleRating(item.toLowerCase(), value)}
                      className={`w-6 h-6 text-lg ${
                        rating[item.toLowerCase()] >= value
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Overall Review</p>
            <p className="text-4xl font-bold">
              {(
                Object.values(rating).reduce((sum, val) => sum + val, 0) / 4
              ).toFixed(1) || 0}
              /5
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="mt-6">
            <textarea
              placeholder="Your Comment Here..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:outline-none"
              rows="4"
            ></textarea>

            <div className="flex justify-between mt-4">
              <button className="bg-orange-300 text-white font-medium py-2 px-4 rounded hover:bg-orange-400">
                Choose File
              </button>
              <button className="bg-orange-500 text-white font-medium py-2 px-6 rounded hover:bg-orange-600">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default Review;

