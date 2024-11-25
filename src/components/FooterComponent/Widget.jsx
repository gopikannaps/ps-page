import React from 'react'

function Widget({ title, links }) {
  return (
    <div>
      <h3 className=" footer-heading mb-4">{title}</h3>
      <ul className="space-y-2 footer-link ">
        {links.map((link, index) => (
          <li key={index} className="footer-link-section footer-link hover:text-orange-400 cursor-pointer ">
            {link}
          </li>
        ))}
      </ul>
    </div>

  );
};


export default Widget
