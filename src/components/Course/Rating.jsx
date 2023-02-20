import star from '../../assets/icons/star.png';

const Rating = (props) => {
    const rating = [];
    for (let index = 0; index < props.rate; index++) {
        rating.push(<span className="w-[15px] h-[15px]"><img src={star} alt="star"></img></span>)
    }
    return (
        <div className="flex">
            {rating.map((item) => <div key={item.index}>item</div>)}
        </div>
    );
}

export default Rating;