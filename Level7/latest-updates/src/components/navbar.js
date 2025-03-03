import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">LATEST UPDATES </h1>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-gray-600 hover:text-blue-500" />{" "}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-600 hover:text-blue-400" />{" "}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-600 hover:text-pink-500" />{" "}
          </a>
        </div>
      </div>

      <div className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-50">
          {" "}
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500">
          {" "}
          About Us
        </Link>
        <Link to="/blog" className="text-gray-700 hover:text-blue-500">
          {" "}
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
