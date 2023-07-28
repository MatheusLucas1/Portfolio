import React, { useState } from 'react';
import Image from 'next/image'

const ImageSlider = ({ images, h, w }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2" onClick={prevImage}>
        &lt; {/* Left arrow */}
      </button>
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="mx-auto"
        width={w}
        height={h}
      />
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2" onClick={nextImage}>
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImageSlider;
