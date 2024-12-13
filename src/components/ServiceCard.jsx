import React from "react";

const ServiceCard = ({ title, description, price, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-500 my-2">{description}</p>
      <p className="text-gray-800 font-bold">${price}</p>
    </div>
  );
};

export default ServiceCard;