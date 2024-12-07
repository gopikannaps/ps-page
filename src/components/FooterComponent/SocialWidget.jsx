import React from 'react';

function SocialWidget({ icons }) {
  return (
    <div className="flex items-center space-x-4">
      {icons.map(({ href, img, alt }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={alt}
          className="block"
        >
          <img
            src={img}
            alt={alt}
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialWidget;
