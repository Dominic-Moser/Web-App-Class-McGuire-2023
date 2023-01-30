import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((imageUrl) => (
        <img src={imageUrl} alt="Gallery image" key={imageUrl} />
      ))}
    </div>
  );
};
export default ImageGallery;