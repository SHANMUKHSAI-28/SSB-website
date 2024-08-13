import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h3 className="text-lg font-semibold">S S B Automations</h3>
            <p className="text-sm mt-2">
              Providing the best automation solutions for your business.
            </p>
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0 text-center">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/aboutus" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScj52_62GUDX1FPdBsm-HPuw_CgH9l5RmVxh-ZNuBSIYfoxVA/viewform?usp=sf_link" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/aboutus" className="hover:text-gray-400">
                Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0 text-center lg:text-right">
            <div className="flex justify-center lg:justify-end space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/ssb_automations/" className="hover:text-gray-400" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/102998357/" className="hover:text-gray-400" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" className="hover:text-gray-400" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SSB Automations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
