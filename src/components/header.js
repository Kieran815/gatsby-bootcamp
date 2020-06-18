import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return(
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <header>
        <h2><Link to="/">Site Title</Link></h2>
      </header>
      <nav>
        <ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
