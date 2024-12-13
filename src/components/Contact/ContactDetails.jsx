import React from "react";

const ContactDetails = ({ address, phone, website, info }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-xl font-bold uppercase">Visit Us or Send Us an E-mail</h2>
      <p className="text-gray-400">
        <strong>ADDRESS:</strong> {address} | <strong>PHONE:</strong> {phone} |
        <strong> WEBSITE:</strong> {website} | <strong>MORE INFO:</strong> {info}
      </p>
    </div>
  );
};

export default ContactDetails;