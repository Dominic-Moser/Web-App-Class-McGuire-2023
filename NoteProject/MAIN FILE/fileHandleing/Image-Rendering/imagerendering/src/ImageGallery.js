
import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <>
        <div id="contentItem" className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
            <div id="imageContainer">            {
            images.map((imageUrl) => (

              <div id="imageContainer">
                {/* <img id="image" src={imageUrl} alt="" key={imageUrl} width="150px" height={"80%"} /> */}
                <img src={imageUrl} alt="" id="contentImage" key={imageUrl} height="387px" />
              </div>
            ))}
            </div>
        <br />
            title
        </div>
    </>
  );
};
export default ImageGallery;