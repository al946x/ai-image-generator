import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import ai_image from '../assets/ai_image.jpg'

export const ImageGenerator = () => {

  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);
  var inputRef = useRef(null);

  const ImageGenerator = async () => {
    if (inputRef.current.value==="") 
    {
      return 0;
    } 

   
    setLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          Authorization:
          `Bearer ${process.env.REACT_APP_OPENAI_API_KEY} || process.env.REACT_APP_OPENAI_API_KEY`,
            "User-Agent": "Chrome",
        
        },

        body:JSON.stringify({
          prompt:`${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );

  var data = await response.json();
   console.log(data);
   var dataArray = data.data;
   setImage_url(dataArray[0].url);
   setLoading(false);

  }

  return (
    <div className='ai-image-generator'>
      <div className="header">AI Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={image_url === "/" ? ai_image : image_url} alt="" /></div>
        <div className="loading">
          <div className={loading ? "loading-bar-full" : "loading-bar"}></div></div>
        <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
      </div>
      <div className='search-box'>
        <input type="text" ref={inputRef} className='search-input' placeholder='Describe the image you want to create' />
        <div className='generate-btn' onClick={() => { ImageGenerator() }}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator

