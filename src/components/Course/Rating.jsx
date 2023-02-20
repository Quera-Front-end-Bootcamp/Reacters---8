import star from '../../assets/icons/star.png';

const Rating = (props) => {
    const rating = [];
    for (let index = 0; index < props.rate; index++) {
        rating.push(<span className="w-[13px] h-[13px]"><img src={star} alt="star"></img></span>)
    }
    return (
        <div className="flex">
            {rating.map((item) => <div key={item.index}><img src={star} alt="star"></img></div>)}
        </div>
    );
}

export default Rating;