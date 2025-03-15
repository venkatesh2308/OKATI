import React from 'react'

function DietImages({src,alt}) {
  return (
    <img src={src} alt={alt} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
  )
}

export default DietImages
