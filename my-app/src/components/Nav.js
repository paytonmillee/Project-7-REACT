// The Nav component file is what navigates the user to each link
// importing react in the app
import React from "react";
import { Link } from "react-router-dom";

// This is the directory for each link that is displayed on the web page
const Nav = () => {
  return (
    <nav class="main-nav">
      <ul>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="/computers">Computers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
