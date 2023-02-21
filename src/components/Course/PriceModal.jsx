import Countdown from "./Countdown";
import * as Utils from '../../utils/utils';

const PriceField = (props) => {
  return (
    <div className="flex flex-row-reverse justify-between py-1">
      <p dir="rtl">{props.propKey}</p>
      <p dir="rtl">{props.propValue}</p>
    </div>
  );
};

const PriceModal = ({ priceInfo }) => {

  let image = Utils.getModalSrc(priceInfo?._id);
  let discount = Utils.getDiscount(priceInfo?._id);
  let alt = Utils.getAlt(priceInfo?._id);

  priceInfo = { ...priceInfo, discount: discount, modalSrc: image, alt: alt }

  return (
    <div className="h-[400px] w-[60%] md:min-w bg-slate-100 absolute top-[12%] md:top-[15%] left-[25%] border-2">
      <header dir="ltr" className="w-full h-1/4 flex flex-row justify-end items-center gap-2 border-b-2 border-[#0d5a5f] pr-2">
        <p>{priceInfo?.title} دوره</p>
        <img className="h-12 w-12" src={priceInfo?.modalSrc} alt={priceInfo?.alt}></img>
      </header>
      <div className="flex h-3/4 flex-col justify-end flex-wrap px-2">
        <div className="flex flex-col pb-4">
          <PriceField propKey={'قیمت دوره'} propValue={`${priceInfo?.cost?.toLocaleString("fa")} تومان`} />
          <PriceField propKey={'تخفیف'} propValue={`${priceInfo?.discount?.toLocaleString("fa")} %`} />
          <PriceField propKey={'مبلغ قابل پرداخت'} propValue={`${((priceInfo?.cost * (100 - priceInfo?.discount)) / 100)?.toLocaleString("fa")} تومان`} />
        </div>
        <Countdown />
        <button className="w-1/2 mx-auto my-4 text-sm md:text-base text-white p-2 rounded-md bg-[#0d5a5f] hover:bg-[#093d41]" dir="rtl">ثبت نام در دوره</button>
      </div>
    </div>
  );
}
export default PriceModal;