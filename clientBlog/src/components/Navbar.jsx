import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-400  just p-4  ">
      <ul className="list-none  flex w-full gap-6 justify-around   ">
        <Link to="/">
          <li className="w-full">BLOGAPP</li>
        </Link>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/components/AddBlog">
          <li>ADD BLOG</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;