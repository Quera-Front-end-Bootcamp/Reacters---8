import React from "react";

const FooterLinks = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-4 mt-4 font-semibold text-textcolor-900 text-lg">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="leading-7 text-base">
          <a href={link.link}
            className=" hover:text-teal-400 duration-300 cursor-pointer"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
