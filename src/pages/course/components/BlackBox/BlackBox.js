const BlackBox = (props) => {
    console.log(props.className);
    return (
    <div className={`border-t-[3px] border-t-[#dbdbdb] flex md:flex-col justify-start gap-5 items-center p-8 bg-[#00000080] ${props.middle ? `border-r-[3px] border-l-[3px] border-r-[#dbdbdb] border-l-[#dbdbdb]}` : ''}`} dir="rtl">
        {props.children}
    </div>);
}

export default BlackBox;