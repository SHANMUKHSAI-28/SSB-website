// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 . All rights reserved.</p>
        <ul className="mt-4 mx-auto text-center">
          <li className="inline-block mx-2">
            <a href="#">Home</a>
          </li>
          <li className="inline-block mx-2">
            <a href="#">About Us</a>
          </li>
          <li className="inline-block mx-2">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScj52_62GUDX1FPdBsm-HPuw_CgH9l5RmVxh-ZNuBSIYfoxVA/viewform?usp=sf_link">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
