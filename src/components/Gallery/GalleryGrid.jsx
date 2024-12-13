import React from "react";
import GalleryItem from "./GalleryItem";

const galleryImages = [
  {
    imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/07/Tattoo-aftercare-GettyImages-2060293461-Header-1024x575.jpg",
    imageName: "Wolf Portrait",
    imageDesc: "A stunning wolf portrait in grayscale.",
  },
  {
    imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/07/Tattoo-aftercare-GettyImages-2060293461-Header-1024x575.jpg",
    imageName: "Dragon Art",
    imageDesc: "A fierce dragon illustration.",
  },
  {
    imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/07/Tattoo-aftercare-GettyImages-2060293461-Header-1024x575.jpg",
    imageName: "Tattoo Design",
    imageDesc: "A creative tattoo artwork.",
  },
  {
    imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/07/Tattoo-aftercare-GettyImages-2060293461-Header-1024x575.jpg",
    imageName: "Wolf Portrait",
    imageDesc: "A stunning wolf portrait in grayscale.",
  },
  {
    imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/07/Tattoo-aftercare-GettyImages-2060293461-Header-1024x575.jpg",
    imageName: "Dragon Art",
    imageDesc: "A fierce dragon illustration.",
  },
  {
    imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/07/Tattoo-aftercare-GettyImages-2060293461-Header-1024x575.jpg",
    imageName: "Tattoo Design",
    imageDesc: "A creative tattoo artwork.",
  }
  // Add more images as needed
];

const GalleryGrid = ({ onImageClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <GalleryItem key={index} image={image} onClick={() => onImageClick(image)} />
      ))}
    </div>
  );
};

export default GalleryGrid;