import React from "react";
import { TbBrandTelegram, TbBrandWhatsapp, TbBrandInstagram, TbBrandYoutube } from 'react-icons/tb';

const SocialIcons = () => {
  return (
    <div className="text-[#033325] my-1.5">
      <span
        className="p-1.5 cursor-pointer inline-flex items-center 
        rounded-full mx-1 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <TbBrandInstagram className="bg-transparent" />
      </span>
      <span
        className="p-1.5 cursor-pointer inline-flex items-center 
              rounded-full mx-1 text-xl hover:text-gray-100 hover:bg-teal-500
              duration-300 "
      >
        <TbBrandTelegram className="bg-transparent" />
      </span>
      <span
        className="p-1.5 cursor-pointer inline-flex items-center 
                    rounded-full mx-1 text-xl hover:text-gray-100 hover:bg-teal-500
                    duration-300 "
      >
        <TbBrandWhatsapp className="bg-transparent" />
      </span>
      <span
        className="p-1.5 cursor-pointer inline-flex items-center
                          rounded-full mx-1 text-xl hover:text-gray-100 hover:bg-teal-500
                          duration-300 "
      >
        <TbBrandYoutube className="bg-transparent" />
      </span>
    </div>
  );
};

export default SocialIcons;