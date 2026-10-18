import React, { useState } from 'react'
import UpLoadForm from './components/UpLoadForm';
import ImageGallary from "./components/ImageGallary"
import "./App.css";
const App = () => {


  const [ images , setImages ] = useState([
      { id : 1, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1tPqkPXpuHxm0xPGops-VH6C_4pAw5kH68RnmMXRBg&s=10"},
      { id : 2, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTA7-NtGbyUTfNkWfYkqk2Pz-xAFEGoWGNQ3sqjBL6g&s=10"},
      { id : 3, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7G_vHn8Nw2FTSC_v_yqcXbx11QLjbtbqeyGPfess_2A&s=10"},
      { id : 4, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUaS_gFCG7lROmAeKg-VlGy3_6rvgTbEX9ss4hwLz8w&s=10"},

  ]);

  const [ error , setError ] = useState(null);

  const handleUpdatedImage = (file) =>{

      const imageData = Array.from(file).map((fileObj) => {
          return {
            id : crypto.randomUUID(),
            image : URL.createObjectURL(fileObj),
          }
      })

      const totalImages = [ ...images , ...imageData];

      if(totalImages.length > 20 ){

          setTimeout(() => {
              setError("You cann't add more then 20 images!");
          },1000);

          setTimeout(() => {
                setError(null); 
          }, 5000);
          return;
      }
      
      setImages([ ...images , ...imageData]);
     
  }

  return (
    <div className='app-container'>
        <div>
            <UpLoadForm handleUpdatedImage={handleUpdatedImage} error={error} setError={setError}/>
        </div>
        <hr />
        <div>
            <ImageGallary images={images} setImages={setImages}/>
        </div>
    </div>
  )
}

export default App;