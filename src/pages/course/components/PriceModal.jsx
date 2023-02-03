import Countdown from "./Countdown";

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
    <div className="h-[400px] w-1/2 md:min-w bg-slate-100 absolute top-[12%] md:top-[15%] left-[25%] border-2">
      <header className="w-full h-1/4 flex flex-row justify-end items-center gap-2 border-b-2 border-gray-300 pr-2">
        <p>{priceInfo.title}</p>
        <img className="h-12 w-12" src={priceInfo.modalSrc} alt={priceInfo.alt}></img>
      </header>
      <div className="flex h-3/4 flex-col justify-end flex-wrap px-2">
        <div className="flex flex-col pb-4">
          <PriceField propKey={'قیمت دوره'} propValue={`${priceInfo.price.toLocaleString("fa")} تومان`} />
          <PriceField propKey={'تخفیف'} propValue={`${priceInfo.discount.toLocaleString("fa")} %`} />
          <PriceField propKey={'مبلغ قابل پرداخت'} propValue={`${((priceInfo.price * (100 - priceInfo.discount)) / 100).toLocaleString("fa")} تومان`} />
        </div>
        <Countdown />
        <button className="w-1/2 mx-auto my-4 text-sm md:text-base text-white p-2 rounded-md bg-[#0d5a5f] hover:bg-[#093d41]" dir="rtl">ثبت نام در دوره</button>
      </div>
    </div>
  );
}
export default PriceModal;