import React from 'react'
import './ImageGenerator.css'
import ai_image from '../assets/ai_image.jpg'

export const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className="header">Ai Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={ai_image} alt="" /></div>
      </div>
      </div>
  )
}
 
export default ImageGenerator

