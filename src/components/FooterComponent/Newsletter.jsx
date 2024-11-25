import React from 'react'
import facebook from '../../assets/img/facebook.png'
import whatsapp from '../../assets/img/whatsapp.png'
import insta from '../../assets/img/insta.png'
import youtube from '../../assets/img/youtube.png'
import linkdeen from '../../assets/img/linkdeen.png'


function Newsletter() {
  return (
    <div className="text-white">
    <h3 className="footer-heading mb-4">Newsletter</h3>
    {/* Input and Button */}
      <div className="mb-4 ">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-full text-black placeholder-gray-400 focus:outline-none"
        />
      </div>
      
      {/* Subscribe Button */}
      <div className="mb-6">
        <button className="footer-input-button">
          Subscribe
        </button>
      </div>

    
    <div className="flex items-center space-x-4 mt-4">
      {/* Facebook Icon */}
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={facebook}
          alt="Facebook"
          className="w-6 h-6 hover:scale-110 transition-transform"
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={whatsapp}
          alt="whatsapp"
          className="w-6 h-6 hover:scale-110 transition-transform"
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={insta}
          alt="instagram"
          className="w-6 h-6 hover:scale-110 transition-transform"
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={youtube}
          alt="youtube"
          className="w-6 h-6 hover:scale-110 transition-transform"
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src={linkdeen}
          alt="linkedin"
          className="w-6 h-6 hover:scale-110 transition-transform"
        />
      </a>
           </div>
  </div>

  
  )
}

export default Newsletter
