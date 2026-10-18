import React, { useState } from 'react'
import { CircleAlert, CirclePlus, X } from 'lucide-react';

const UpLoadForm = ({handleUpdatedImage, error , setError}) => {

    const [ selectedImg , setSelectedImg ] = useState(null);

    const handleSelectedImg = (e) => {
        const file = e.target.files;

        if(file){
            const fileData = Array.from(file).map((f) => {
                return URL.createObjectURL(f);
            }
            )
            setSelectedImg([ ...fileData]);
            handleUpdatedImage(file)
        } 
    }

  return (

    <div className='upload-container'>
        <div className='upload-header'>
            <h2>Upload photos</h2>
            <X size={25} className='close-btn'/>
        </div>

        <form className='upload-photos-area'>
            <div>
                <label>
                    <CirclePlus size={40} className='plus-btn'/>
                    <input type="file" 
                    multiple
                    accept='image/*'
                    onChange={handleSelectedImg}/>
                </label>
                {error && 
                    <div className='error-message-box'>
                        <CircleAlert size={24} className='circle-alert'/>
                        <div>
                            <h4>Upload limit reached</h4>
                            <small>{error}</small>
                        </div>
                    </div>}
            </div>
            <h3>Choose photops or drag them here</h3>
            <p>Maximum 20 photos</p>
        </form>

        <div className='support-description'>
            <p>Support formats:png.jepg.heic</p>
            <p>Maximum file size : 20 MB</p>
        </div>
    </div>
  )
}

export default UpLoadForm;


