import React from "react";
import Item from "./Item";
import { MAILS } from "./Links";
import SocialIcons from "./SocialIcons";

const Contactus = () => {
    return (    
      <div>
        <Item Links={MAILS} title="ارتباط با ما" />
        <SocialIcons></SocialIcons>
      </div>
    );
}
export default Contactus;