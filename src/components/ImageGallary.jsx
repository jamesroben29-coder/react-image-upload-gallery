import React from 'react'
import {Trash, Image} from "lucide-react";

const ImageGallary = ({images, setImages}) => {

    const handleDeleteAll = () => {
        setImages([]);
    };


    const handleDeleteItem = (item) => {
        const imgItem = images.filter((img) => img.id !== item.id);
        setImages(imgItem);
    }

  return (
    <div className='image-gallery-container'>
        <div className="image-gallery-header">
            <div>
                <Image size={25}/>
                <p>Your images({images.length})</p>
            </div>
            <div className='delete-all-box'onClick={handleDeleteAll}>
                <Trash size={18}/>
                <small>Delete All</small>
            </div>
        </div>

        {images.length === 0 ?
            
            (<div className='empty-image-box'>
                <p>Not any images Now!</p>
            </div>) 
            
            : 
            
            (
              <div className="image-gallery-list">
                {images.map((item) => {
                  return  <div className='image-item' key={item.id}>
                        <Trash size={18} className='delete-img' onClick={() => handleDeleteItem(item)}/>
                        <img src={item.image} alt="image-name"/>
                    </div> 
                })}
              </div>
            )
        }
    </div>
  )
}

export default ImageGallary;