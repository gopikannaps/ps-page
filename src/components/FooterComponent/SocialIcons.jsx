import React from 'react'
import facebook from '../../assets/img/facebook.png'
import whatsapp from '../../assets/img/whatsapp.png'
import insta from '../../assets/img/insta.png'
import youtube from '../../assets/img/youtube.png'
import linkedin from '../../assets/img/linkedin.png'

function SocialIcons() {
  return (
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
        src={linkedin}
        alt="linkedin"
        className="w-6 h-6 hover:scale-110 transition-transform"
      />
    </a>
         </div>
  )
}

export default SocialIcons
