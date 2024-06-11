// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <ul className="mt-4">
          <li className="inline-block mx-2">
            <a href="#">Home</a>
          </li>
          <li className="inline-block mx-2">
            <a href="#">About Us</a>
          </li>
          <li className="inline-block mx-2">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
