// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const NavTabs = () => {
//   const tabs = [
//     { name: 'Overview', path: '/overview' },
//     { name: 'Location', path: '/location' },
//     { name: 'Price', path: '/price' },
//     { name: 'Inventory', path: '/inventory' },
//     { name: 'Brochure', path: '/brochure' },
//     { name: 'Amenities', path: '/amenities' },
//     { name: 'Reviews', path: '/reviews' },
//     { name: 'About', path: '/about' },
//   ];

//   return (
//     <div className="flex space-x-6 border-b border-gray-300 text-sm font-medium">
//       {tabs.map((tab) => (
//         <NavLink
//           key={tab.name}
//           to={tab.path}
//           className={({ isActive }) =>
//             isActive
//               ? 'text-orange-500 border-orange-500 border-b-2 pb-2'
//               : 'text-gray-700 hover:text-orange-500 pb-2'
//           }
//         >
//           {tab.name}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default NavTabs;


// import React from 'react';
// import TabList from './TabList';

// const NavTabs = () => {
//   const tabs = [
//     { name: 'Overview', content: <div></div> },
//     { name: 'Location', content: <div></div> },
//     { name: 'Price', content: <div></div> },
//     { name: 'Inventory', content: <div></div> },
//     { name: 'Brochure', content: <div></div> },
//     { name: 'Amenities', content: <div></div> },
//     { name: 'Reviews', content: <div></div> },
//     { name: 'About', content: <div></div> },
//   ];

//   return (
//     <div className="container mx-auto ">
//       <TabList tabs={tabs} />
//       <hr className="border-t " />

//     </div>

//   );
// };

// export default NavTabs;



// // Import React and necessary components
// import React from 'react';
// import { NavLink, Routes, Route } from 'react-router-dom';
// import Overview from '../DescriptionComponent/Overview';
// import Location from '../DescriptionComponent/Location';

// // Tab Components
// const Overview = () => <div>Overview Content</div>;
// const Location = () => <div>Location Content</div>;
// // const Price = () => <div>Price Content</div>;
// // const Inventory = () => <div>Inventory Content</div>;
// // const Brochure = () => <div>Brochure Content</div>;
// // const Amenities = () => <div>Amenities Content</div>;
// // const Reviews = () => <div>Reviews Content</div>;
// // const About = () => <div>About Content</div>;

// const NavTabs = () => {
//   const tabs = [
//     { name: 'Overview', path: '../DescriptionComponent/Overview', component: <Overview /> },
//     { name: 'Location', path: '../DescriptionComponent/Location', component: <Location /> },
//     // { name: 'Price', path: '/price', component: <Price /> },
//     // { name: 'Inventory', path: '/inventory', component: <Inventory /> },
//     // { name: 'Brochure', path: '/brochure', component: <Brochure /> },
//     // { name: 'Amenities', path: '/amenities', component: <Amenities /> },
//     // { name: 'Reviews', path: '/reviews', component: <Reviews /> },
//     // { name: 'About', path: '/about', component: <About /> },
//   ];

//   return (
//     <div>
//       <div className="flex space-x-6 border-b border-gray-300 text-sm font-medium">
//         {tabs.map((tab) => (
//           <NavLink
//             key={tab.path}
//             to={tab.path}
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-orange-500 border-orange-500 border-b-2 pb-2'
//                 : 'text-gray-700 hover:text-orange-500 pb-2'
//             }
//           >
//             {tab.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Route Definitions */}
//       <Routes>
//         {tabs.map((tab) => (
//           <Route key={tab.path} path={tab.path} element={tab.component} />
//         ))}
//         <Route path="*" element={<div>Page Not Found</div>} />
//       </Routes>
//     </div>
//   );
// };

// export default NavTabs;



// import { Route,Routes } from 'react-router-dom';
// import TabList from './TabList';
// import Overview from '../DescriptionComponent/Overview';
// import Amenities from '../DescriptionComponent/Amenities';
// import Stocks from './components/stocks';
// import Favourites from './components/favourites';
// import Cart from './components/cart';

// function NavTabs() {
//   return (
//    <>
//     <TabList/>
//       <div>
//     <Routes>        
//       {/* <Route path="/"  element={<Stocks/>} />
//       <Route path="/favourites"  element={<Favourites />}/>
//       <Route path="/cart"  element={<Cart/>}/> */}
//             <Route path="/Overview"  element={<Overview/>} />
//             <Route path="/Amenities"  element={<Amenities/>} />
//     </Routes>
//     </div>
//     </>
   
//   );
// }

// export default NavTabs;


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import AboutBrand from "./AboutBrand";
// // import Location from "./Location";

// import Overview from '../DescriptionComponent/Overview';
// import Amenities from '../DescriptionComponent/Amenities';


// function NavTabs() {
//   return (
//     <Router>
//       <nav className="fixed top-0 left-0 w-full bg-blue shadow-md p-4">
//         <ul className="flex space-x-4">
//           <li>
//             <Link to="/overview" className="text-blue-500 hover:text-blue-700">
//               Overview
//             </Link>
//           </li>
//           <li>
//             <Link to="/amenities" className="text-blue-500 hover:text-blue-700">
//               Amenities
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="mt-20 p-4">
//         <Routes>
//           <Route path="/overview" element={<Overview />} />
//           <Route path="/amenities" element={<Amenities />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default NavTabs;


// import React from 'react';

// const menuItems = [
//   { id: 1, name: 'Home', link: '/' },
//   { id: 2, name: 'Project', link: '/' },
//   { id: 3, name: 'Q & A', link: '/' },
//   { id: 4, name: 'Documents', link: '/' },
//   { id: 5, name: 'Partner Network', link: '/' },
//   { id: 6, name: 'Compare Project', link: '/' },
//   { id: 7, name: 'Chat Room', link: '/' },
//   { id: 8, name: 'Inventory', link: '/' },
// ];

// const NavigationMenu = () => {
//   return (
//     <div className="bg-white text-blue-900 sub-header font-display ">
//     <nav className="flex justify-center space-x-6 py-3  " >
//       <ul className='sub-nav-warper'>
//         {menuItems.map((item) => (
//           <li key={item.id} >
//             <a href={item.link} className='className=" transition duration-200"'>
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//     </div>
//   );
// };

// export default NavigationMenu;




import React, { useState } from "react";

const menuItems = [
  { id: 1, name: "Overview" },
  { id: 2, name: "Location" },
  { id: 3, name: "Price" },
  { id: 4, name: "Inventory" },
  { id: 5, name: "Brochure" },
  { id: 6, name: "Amenities" },
  { id: 7, name: "Reviews" },
  { id: 8, name: "About" },
];

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState(1); // Track the active menu item

  return (
    <div>
    <nav className=" flex space-x-6 bg-white ml-8">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={` des-heading ${
            activeItem === item.id ? "text-orange-500" : "text-blue-900 "
          } hover:text-orange-500 transition-colors duration-200`}
          onClick={() => setActiveItem(item.id)}
        >
          {item.name}
        </button>
      ))}
    </nav>
          <hr class="border-t border-gray-300 mt-4" />
          </div>
  );
};

export default NavigationMenu;