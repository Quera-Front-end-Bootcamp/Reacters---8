import React from "react";
import Copyright from "./CopyRight";
import Contactus from "./ContactUs"
import BeWith from "./BeWith";
import ENamad from "./ENamad";
import Aboutus from "./AboutUs";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full text-gray-100 text-right">
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
      <div className="w-full grid grid-cols-1 px-16 bg-[#0d5a5f]">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-40 px-0 py-8"> */}
        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-20 px-0 py-8">
          <NewsLetter />
          <Aboutus />
        </div>
        {/* </div> */}
        <hr className="h-0.5 bg-[#547D89] border-none "></hr>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-30/30/40 gap-6 px-0 py-8 sm:align-right content-center">
          <ENamad />
          <BeWith />
          <Contactus /> */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-30/30/40 gap-6 px-0 py-8 sm:align-right content-center"> */}
          <div className="flex justify-between items-center flex-col md:flex-row  gap-6 lg:gap-6 md:gap-5 px-0 ">
          <div className="w-full md:w-5/12 py-8">
          <ENamad className="shrink"/>
          </div>
          <div className="w-full md:w-5/12 flex justify-around items-end sm:items-center lg:justify-between  flex-col sm:flex-row md:gap-5 gap-8 px-0 py-8">
          <BeWith className="w-1/2"/>
          <Contactus className="w-1/2"/>
          </div>

        </div>
        {/* </div> */}
      </div>

      <Copyright />
    </footer>
  )
};

export default Footer;