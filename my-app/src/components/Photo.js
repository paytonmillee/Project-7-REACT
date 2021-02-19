// The Photo component file displays all the li and image elements
import React from "react";

const Photo = ({ photo }) => {
  return (
    <li>
      <img
        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt=""
      />
    </li>
  );
};
export default Photo;
