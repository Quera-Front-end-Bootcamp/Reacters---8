const BenefitItem = (props) => {
    return(
        <div className="text-[#004458]">
            <span></span>
            <div>
                <h5 dir="rtl" className="font-bold">{props.title}</h5>
                <p dir="rtl" className="text-sm md:text-base">{props.context}</p>
            </div>
        </div>
    );
}

export default BenefitItem;