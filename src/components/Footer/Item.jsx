import React from "react";
// import { Icons, BEWITH, MAILS } from "./Links";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-4 mt-8 font-bold	text-textcolor-900 text-xl lg:text-xl md:text-sm	">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="leading-7 text-base">
          <a
            className="hover:text-teal-400 duration-300 cursor-pointer"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
