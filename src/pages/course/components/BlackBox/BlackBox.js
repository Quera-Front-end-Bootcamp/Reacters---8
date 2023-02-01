const BlackBox = (props) => {
  return (
    <div className={`border-t-[3px] border-t-[#dbdbdb] flex md:flex-col justify-start gap-5 items-center p-8 bg-[#00000080] ${props.middle ? `border-r-[3px] border-l-[3px] border-r-[#dbdbdb] border-l-[#dbdbdb]}` : ''}`} dir="rtl">
      {props.d && <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={props.d}
        />
      </svg>
      }
      {props.children}
    </div>);
}

export default BlackBox;