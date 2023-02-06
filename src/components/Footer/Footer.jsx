import React from "react";
import Copyright from "./components/CopyRight";
import Contactus from "./components/ContactUs"
import BeWith from "./components/BeWith";
import ENamad from "./components/ENamad";
import Aboutus from "./components/AboutUs";
import NewsLetter from "./components/NewsLetter";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full text-gray-200 text-right">
      <div className="w-full grid grid-cols-1 px-16 bg-[#0d5a5f]">
        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-20 px-0 py-8">
          <NewsLetter />
          <Aboutus />
        </div>
        <hr className="h-0.5 bg-[#547D89] border-none"></hr>
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 lg:gap-6 md:gap-5 px-0 ">
          <div className="w-full md:w-5/12 py-8">
            <ENamad className="shrink" />
          </div>
          <div className="w-full md:w-5/12 flex justify-around items-end sm:items-center lg:justify-between flex-col sm:flex-row md:gap-5 gap-8 px-0 py-8">
            <BeWith className="w-1/2" />
            <Contactus className="w-1/2" />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  )
};

export default Footer;