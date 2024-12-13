/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = ({ embedUrl }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="w-full h-64">
      // eslint-disable-next-line jsx-a11y/iframe-has-title, jsx-a11y/iframe-has-title
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;