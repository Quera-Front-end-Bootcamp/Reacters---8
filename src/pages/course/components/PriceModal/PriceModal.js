import js_logo from "../../../../assets/course/js-logo.png";

import Countdown from "../Countdown/Countdown";

const PriceField = (props) => {
  return (
    <div className="flex flex-row-reverse justify-between py-1">
      <p dir="rtl">{props.propKey}</p>
      <p dir="rtl">{props.propValue}</p>
    </div>
  );
};

const PriceModal = ({priceInfo}) => {
    return (
        <div className="w-3/4 h-3/4 sm:w-1/2 bg-slate-100 absolute left-7 top-7 sm:left-1/4 border-2">
        <header className="w-full h-1/4 flex flex-row justify-end items-center border-b-2 border-black">
          <p dir="rtl">{priceInfo.title}</p>
          <img src={js_logo} alt='js-logo'></img>
        </header>
        <div className="flex h-3/4 flex-col justify-around  flex-wrap">
        <div className="flex flex-col mx-1">
          {priceInfo.properties.map((item, index) => <PriceField key={index} propKey={item.propKey} propValue={item.propValue} />)}
        </div>
        <Countdown />
        <button className="w-3/4 md:w-1/2 mx-auto text-white bg-green-600 p-2" dir="rtl">ثبت نام در دوره</button>
        </div>
      </div>
    );
}
export default PriceModal;