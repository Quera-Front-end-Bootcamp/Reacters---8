import React from "react";
import etemad from "../../assets/images/etemad.png";
import kasbmajazi from "../../assets/images/kasbokarMajazi.png"
import sabt from "../../assets/images/sabt.png";

const ENamad = () => {
  return (
    <div className="h-32 flex flex-row gap-6 items-center text-right py-4">
      <div className="h-32 w-[90px] flex-shrink-0">
          {/* <a target="_blank" href="https://trustseal.enamad.ir/?id=30599&amp;Code=uGobIf7GE1XUArlbdKa3"> */}
              <img src={etemad} alt="نماد اعتماد الکترونیک"  
              className="w-full h-full object-center object-cover hover:cursour-pointer"
              ></img>
          {/* </a> */}
      </div>
      <div className="h-32 w-[90px] flex-shrink-0" >
        <img src={kasbmajazi} alt="نماد کسب و کار های مجازی"  
            className="w-full h-full object-center object-cover hover:cursour-pointer" 
            ></img>
      </div>
      <div className="h-32 w-[90px] flex-shrink-0">
          <img src={sabt} alt="نشان ملی ثبت" 
          className="w-full h-full object-center object-cover hover:cursour-pointer"
          ></img>
      </div>
    </div>
  );
}

export default ENamad;






// import React from "react";
// // import ImageFooter from "../../assets/Footer/ImageFooter";
// import Images from "../../assets/Footer/ImagesFooter"
// // import { Icons,BEWITH,MAILS } from "./Links";
// // import etemad from "../../assets/Footer/Enamads/etemad.png";
// // import kasbokarMajazi from "../../assets/Footer/Enamads/kasbokarMajazi.png";
// // import sabt from "../../assets/Footer/Enamads/sabt.png";


// const ENamad = () => {
//   return (
//     <div className="flex flex-wrap px-sm">
// {/* <div>
//     <a target="_blank" href="https://trustseal.enamad.ir/?id=30599&amp;Code=uGobIf7GE1XUArlbdKa3">
//         <img src="./ImageSrc/Enamad-etemad.png" alt="نماد اعتماد الکترونیک"
//          classname="w-20 h-20 hover:cursour-pointer"></img>
//     </a>
// </div> */}
// <div>
//         {/* <img  src={require('../../assets/Footer/Enamad/kasbokarMajazi.png').default}
//         alt="نماد کسب و کار های مجازی"
//       ></img> */}



// {/* <img  src="../../assets/Footer/Enamad/kasbokarMajazi.png" alt="نماد کسب و کار های مجازی"></img> */}
// {/* images && images.find((item)=>{item.name=="kasbokarMajazi"}) */}
// {/* <img  src={images.find((item)=>item.name== "kasbokarMajazi").source} alt="نماد کسب و کار های مجازی"></img> */}

// {
// Images && Images.map((item)=> <div key={item.name}> <img src={item.source} alt=""></img></div>)
// }

// </div>

// {/* <div>
//     <img src="./ImageSrc/Enamad-sabt.png" alt="نشان ملی ثبت" 
//     classname="w-20 h-20 hover:cursour-pointer my-2"></img>
// </div> */}

//     </div>
    
    


//   );
// };

// export default ENamad;





// <div className="h-32 grid grid-cols-3 gap-6  bg-greencolor-100 text-right py-4" >

// <div className="h-32">
//     {/* <a target="_blank" href="https://trustseal.enamad.ir/?id=30599&amp;Code=uGobIf7GE1XUArlbdKa3"> */}
//         <img src={etemad} alt="نماد اعتماد الکترونیک"  
//         // style={{ height: '100% !important' }} 
//          className="w-full h-full object-center object-cover hover:cursour-pointer "
//          width="100%" height="100%"></img>
//     {/* </a> */}
// </div>
// <div className="h-32" >
// <img src={kasbmajazi} alt="نماد کسب و کار های مجازی"  
//     className=" w-full h-full object-center object-cover  hover:cursour-pointer " 
//     width="100%" height="100%"></img>
// </div>
// <div className="h-32">
//     <img src={sabt} alt="نشان ملی ثبت" 
//     className=" w-full h-full object-center object-cover hover:cursour-pointer my-2 object-cover"
//      width="100%" height="100%"></img>
// </div>

//     </div>