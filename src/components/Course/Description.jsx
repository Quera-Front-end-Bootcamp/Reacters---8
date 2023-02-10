const Description = (props) => {
  return (
    <div dir="rtl" className={`text-[#004458] flex flex-col justify-evenly px-8 pt-4 ${props.className}`}>
      <h2 className={`font-semibold text-3xl`}>
        توضیحات
      </h2>
      <p className="pt-8" >
        {props.description}
      </p>
    </div>
  );
};
export default Description;
