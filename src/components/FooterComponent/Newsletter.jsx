import React from 'react'
import SocialIcons from './SocialIcons'


function NewsLetter() {
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

<SocialIcons></SocialIcons> 

     </div>

  
  )
}

export default NewsLetter
