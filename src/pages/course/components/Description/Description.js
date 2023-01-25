const Description = (props) => {
  return (
    <div className={`text-[#004458] flex flex-col justify-evenly pr-3 ${props.className}`}>
      <h2 dir="rtl" className={` font-bold text-3xl`}>
        توضیحات
      </h2>
      <p dir="rtl" >
        {props.description}
      </p>
    </div>
  );
};
export default Description;
