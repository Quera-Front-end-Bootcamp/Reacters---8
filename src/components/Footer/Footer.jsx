import React from "react";
import sabt from "../../assets/images/sabt.png";
import FooterLinks from "./FooterLinks";
import { Mails } from "../../constants/LinksConstants";
import { BeWith } from "../../constants/LinksConstants";
import SocialIcons from "./SocialIcons";
import etemad from "../../assets/images/etemad.png";
import kasbmajazi from "../../assets/images/kasbokarMajazi.png"

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full text-gray-200 text-right">
      <div className="w-full grid grid-cols-1 px-16 bg-[#0d5a5f]">
        {/* firstSection */}
        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-20 px-0 py-8">
          {/* newsletter */}
          <div className="table-cell align-middle">
            <h1 className="mb-4 font-bold text-textcolor-900 text-xl">خبرنامه</h1>
            <div className="flex flex-col md:flex-row-reverse justify-center ml-4 mr-0 md:mb-4">
              <input placeholder="...ایمیل خود را وارد کنید" type="email"
                className="rounded-tr-md rounded-br-md text-base py-4 px-4 sm:py-6 sm:px-8 mb-4
                    placeholder:font-light placeholder:text-gray-300 placeholder:text-right
                    md:placeholder:text-base text-right focus:bg-opacity-60 duration-150 outline-none bg-[#347479a9] basis-3/4"/>
              <input type="submit" value="عضویت"
                className="rounded-tl-md rounded-bl-md md:text-lg text-base py-4 px-4 sm:py-6 sm:px-8 mb-4 
                    font-bold cursor-pointer opacity-80 hover:opacity-60 duration-150 text-greencolor-200 bg-[#093d41] basis-1/4 "/>
            </div>
          </div>
          {/* about us */}
          <div className="text-sm table-cell align-middle text-gray-200">
            <h1 className="mb-4 font-bold text-xl">درباره بامبو</h1>
            <p className="leading-6 text-base">
              بامبو یکی از پرتلاش ترین و بروزترین وبسایت های آموزشی در سطح ایران است
              که همیشه تلاش کرده تا بتواند بروزترین و جدید ترین مقالات و دوره های آموزشی را
              در اختیار علاقه مندان ایرانی قرار دهد
            </p>
          </div>
        </div>

        <hr className="h-0.5 bg-[#547D89] border-none"></hr>
        {/* secondSection */}
        <div className="flex justify-between items-center flex-col md:flex-row">
          {/* NamadLogos */}
          <div className="w-full md:w-5/12 mt-4 shrink h-32 flex flex-row gap-6 md:gap-2 lg:gap-6 text-right items-center pr-10 md:justify-center justify-around">
            <div className="h-28 w-[90px] flex-shrink-0">
              <img src={etemad} alt="نماد اعتماد الکترونیک"
                className="object-cover h-full object-center  hover:cursour-pointer"
              ></img>
            </div>
            <div className="h-28 w-[90px] flex-shrink-0" >
              <img src={kasbmajazi} alt="نماد کسب و کار های مجازی"
                className="object-cover h-full object-center  hover:cursour-pointer"
              ></img>
            </div>
            <div className="h-28 w-[90px] flex-shrink-0">
              <img src={sabt} alt="نشان ملی ثبت"
                className="object-cover h-full object-center  hover:cursour-pointer"
              ></img>
            </div>
          </div>

          {/* contact us */}
          <div className="w-full md:w-5/12 flex items-end sm:items-center lg:justify-between flex-col sm:flex-row md:gap-8 gap-12 px-0 py-8">
            <div className="w-1/2">
              <FooterLinks Links={BeWith} title="همراه باشید" />
            </div>
            <div className="w-1/2">
              <FooterLinks Links={Mails} title="ارتباط با ما" />
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="w-screen text-sm bg-[#093d41] h-20 text-center table-cell align-middle text-gray-100">
        کلیه حقوق محصولات و محتوای این سایت متعلق به بامبو می باشد و هرگونه کپی برداری از محتوای سایت غیرمجاز و بدون رضایت ماست
      </div>
    </footer>
  )
};

export default Footer;