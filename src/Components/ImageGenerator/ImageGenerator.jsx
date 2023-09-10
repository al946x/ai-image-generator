import React, { useState } from 'react'
import './ImageGenerator.css'
import ai_image from '../assets/ai_image.jpg'

export const ImageGenerator = () => {

  const [image_url,setImage_url] = useState("/");
  let inputRef = useRef(null);

  const ImageGenerator = async () =>{
    if (inputRef.current.value=="") {
      return 0;
    }
    
  }

  return (
    <div className='ai-image-generator'>
      <div className="header">Ai Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={image_url==="/"?default_image:image_url} alt="" /></div>
      </div>
      <div className='search-box'>
        <input type="text" ref={inputRef} className='search-input' placeholder='Desribe What Image You Want Created' />
      <div className='generate-btn'>Generate</div>
      </div>
      </div>
  )
}
 
export default ImageGenerator

