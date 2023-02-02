import React from "react";
import { Icons } from "./Links";
import {TbBrandTelegram} from 'react-icons/tb';


const SocialIcons = () => {
  return (
    <div className="text-[#033325]">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center bg-[#066649]
        rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          {/* <ion-icon name={icon.name}></ion-icon> */}
          <TbBrandTelegram className="bg-[#066649]"/>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;