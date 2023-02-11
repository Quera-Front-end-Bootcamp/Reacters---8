import learn from '../../assets/icons/learn.png';
import online_learning from '../../assets/icons/online-learning.png';
import success from '../../assets/icons/success.png';

const BenefitItem = (props) => {
    let img;
    img = props.index === 0 ? online_learning : props.index === 1 ? learn : success;
    console.log(props.index);
    return (
        <div className="text-[#004458] flex flex-row-reverse p-3">
            <span className="w-[20px] h-[20px]" >
                <img src={img} alt="benefit item" />
            </span>
            <div className="flex flex-col items-end justify-end pr-3">
                <h5 dir="rtl" className="font-bold">{props.title}</h5>
                <p dir="rtl" className="text-sm md:text-base">{props.context}</p>
            </div>
        </div>
    );
}

export default BenefitItem;