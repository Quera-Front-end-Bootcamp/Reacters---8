import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {progressBarValueCalculator} from '../../utils/utils';
import {coursesData} from '../../constants/courseConstants';

const Info = ({ info }) => {
  let data = {progress: progressBarValueCalculator(info?.capacity, info?.students.length)};
  let image = coursesData.find(item => item.id == info?._id)?.heroSrc;
  return (
    <div className="w-1/2 md:w-1/4 h-3/4 flex mx-auto flex-col justify-center items-center mt-32 mb-8">
      <img className="w-[223px] h-[246px]" src={image} alt="course_logo"></img>
      <div className="w-full text-white font-bold text-3xl text-center border-b-2 border-gray-500 py-4" dir="rtl">
        { `دوره ${info?.title}`}
      </div>
      <div className="w-full text-white flex flex-col items-center sm:flex-row justify-between font-bold text-xl">
        <p>ظرفیت : {info?.capacity} نفر</p>
        <p>دانشجو : {info?.students.length} نفر</p>
      </div>
      <div className="w-full h-7 mt-6 flex justify-center rounded-md overflow-hidden opacity-90 ">
        <ProgressBar data={data} />
      </div>
    </div>
  );
}
export default Info