import star from '../../../../assets/course/star.png';
const Rating = (props) => {
    const rating = [];
    for (let index = 0; index < props.grade; index++) {
        rating.push(<span className="w-[15px] h-[15px]"><img src={star} alt="star"></img></span>)
    }
    return (
    <div className="flex">
       {rating.map(item => item)}
    </div>
    );
}

export default Rating;