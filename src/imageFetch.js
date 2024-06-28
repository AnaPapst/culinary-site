import React, { useEffect, useState } from "react";
import images from "../images.json";

const ImageGallery = ({ imageName }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const image = images.find((img) => img.name === imageName);
    setSelectedImage(image);
  }, [imageName]);

  return (
    <div>
      {selectedImage ? (
        <img
          src={process.env.PUBLIC_URL + "/" + selectedImage.url}
          alt={selectedImage.alt}
        />
      ) : (
        <p>Image not found</p>
      )}
    </div>
  );
};

export default ImageGallery;
