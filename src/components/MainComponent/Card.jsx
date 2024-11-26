import React from 'react'

function Card({ image }) {
  return (
    <div className="w-full">
      <img
        src={image}
        alt="Project Image"
        className="rounded-lg shadow-md w-full object-cover banner_img_res "
      />
    </div>
  )
}

export default Card


