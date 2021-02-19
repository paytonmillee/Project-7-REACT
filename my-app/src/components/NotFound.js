// The NotFOund component file leads you to a "Not Found or Error Page when page is not found"
import React from "react";
// function that will make Not Found appear when page is not responding correctly
const NotFound = () => {
  return (
    <li class="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
};

export default NotFound;
