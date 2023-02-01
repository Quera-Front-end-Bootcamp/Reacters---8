import Countdown from "../Countdown/Countdown";
import js_logo from "../../../../assets/images/js-logo.png";

const PriceField = (props) => {
  return (
    <div className="flex flex-row-reverse justify-between py-1">
      <p dir="rtl">{props.propKey}</p>
      <p dir="rtl">{props.propValue}</p>
    </div>
  );
};

const PriceModal = ({ priceInfo }) => {
  return (
    <div className="h-[350px] w-1/2  md:min-w bg-slate-100 absolute top-[12%] md:top-[15%]  left-[25%] border-2">
      <header className="w-full h-1/4 flex flex-row justify-end items-center border-b-2 border-black">
        <p dir="rtl">{priceInfo.title}</p>
        <img className="h-full" src={js_logo} alt='js-logo'></img>
      </header>
      <div className="flex h-3/4 flex-col justify-end flex-wrap">
        <div className="flex flex-col mx-1">
          <PriceField propKey={'قیمت دوره'} propValue={`${priceInfo.price} تومان`}/>
          <PriceField propKey={'تخفیف'} propValue={`${priceInfo.discount} %`}/>
          <PriceField propKey={'مبلغ قابل پرداخت'} propValue={`${(priceInfo.price * (100-priceInfo.discount))/100} تومان`}/>
        </div>
        <Countdown />
        <button className="w-1/2 mx-auto my-4 text-sm md:text-base text-white bg-green-600 p-2" dir="rtl">ثبت نام در دوره</button>
      </div>
    </div>
  );
}
export default PriceModal;