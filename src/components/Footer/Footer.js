import React from "react";
import Copyright from "./CopyRight";
import Contactus from "./ContactUs"
import BeWith from "./BeWith";
import ENamad from "./ENamad";
import Aboutus from "./AboutUs";
// import Newssub from "./NewsLetter";
import NewsLetter from "./NewsLetter";

// {/* z-20  shadow  p-4  md:p-6"> */}

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full  text-textcolor-100 text-right">
      {/* <div className="md:flex md:justify-between md:item-center sm:px-12 px-4 bg-[ffffff19] py-7">       
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
        md:w-2/5"
        >
          <span className="text-teal-400">Free</span> until you're ready to
          launch
        </h1>
        <div>
        <input
          type="text"
          placeholder="Enter Your ph.no"
          className="text-gray-800
        sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
        />
        <button
          className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
        rounded-md text-white md:w-auto w-full"
        >
          Request Code
        </button>
        </div>
        </div> */}
      <div className="w-full grid grid-cols-1 px-16 bg-greencolor-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 px-0 py-8">
          <NewsLetter />
          <Aboutus />
        </div>
        <hr className="h-0.5 bg-[#547D89] border-none "></hr>
        <div className=" grid grid-cols-1 sm:grid-cols-30/30/40 gap-6 px-0 py-8 sm:align-right content-center">
          <ENamad />
          <BeWith />
          <Contactus />
        </div>
      </div>

      <Copyright />
    </footer>
  )
};

export default Footer;