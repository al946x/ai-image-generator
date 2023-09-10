import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import ai_image from '../assets/ai_image.jpg'

export const ImageGenerator = () => {

  const [image_url,setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading,setLoading] = useState(false);

  const ImageGenerator = async () =>{
    if (inputRef.current.value=="") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:
          "Bearer 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",
          "User-Agent": "Chrome",
          },
          body:JSON.stringify({
            prompt:`${inputRef.current.values}`,
            n:1,
            size:"512x512",
          }),
        }
    );
    let data = await response.json();
    let data_array = data.data;
    setImage_url(data_array[0].url);
     
  }

  return (
    <div className='ai-image-generator'>
      <div className="header">Ai Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={image_url==="/"?ai_image:image_url} alt="" /></div>
      <div className="loading"> 
      <div className={loading?"loading-bar-full": "loading-bar"}></div></div>
    <div className={loading?"loading-text" : "display-none"}>Loading...</div>
      </div>
      <div className='search-box'>
        <input type="text" ref={inputRef} className='search-input' placeholder='Desribe What Image You Want Created' />
      <div className='generate-btn' onClick={()=>{ImageGenerator()}}>Generate</div>
      </div>
      </div>
  )
}
 
export default ImageGenerator

