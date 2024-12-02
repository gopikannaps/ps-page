import React from 'react';

const menuItems = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Project', link: '/' },
  { id: 3, name: 'Q & A', link: '/' },
  { id: 4, name: 'Documents', link: '/' },
  { id: 5, name: 'Partner Network', link: '/' },
  { id: 6, name: 'Compare Project', link: '/' },
  { id: 7, name: 'Chat Room', link: '/' },
  { id: 8, name: 'Inventory', link: '/' },
];

const MenuBar = () => {
  return (
    <div className="bg-white text-blue-900 sub-header font-display ">
    <nav className="flex justify-center space-x-6 py-3  " >
      <ul className='sub-nav-warper'>
        {menuItems.map((item) => (
          <li key={item.id} >
            <a href={item.link} className='className=" transition duration-200"'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default MenuBar;

