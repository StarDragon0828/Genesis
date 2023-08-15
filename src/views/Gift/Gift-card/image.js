import React, { useState } from 'react';

const ImageComponent = ({ src, alt, enlargedSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} />

      {isHovered && (
        <div className="enlarged-image">
          <img src={enlargedSrc} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;