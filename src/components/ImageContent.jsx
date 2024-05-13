import React from 'react'
const ImageContent=(props)=> {
    const {images}=props
  return (
    <div>
        <img src={images} alt="" />
    </div>
  )
}

export default ImageContent