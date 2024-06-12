"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="bg-white relative pt-24">
        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
          <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
            <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
              <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                <p className="w-full text-4xl font-medium text-center font-serif">
                  About Us
                </p>
                <p className="w-full text-lg mt-6 text-center">
                  Welcome to S S B Automations. We are committed to providing the best automation solutions to our customers.
                </p>
                <p className="w-full text-lg mt-4 text-center">
                  Our team consists of highly skilled professionals dedicated to delivering innovative and efficient services.
                </p>
                <p className="w-full text-lg mt-4 text-center">
                  For any inquiries, please <a href="/contact" className="text-blue-500">contact us</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </>
  );
}
