import ProgressBar from '../../../../components/ProgressBar';
import course_logo from "../../../../assets/images/course-logo.png";

const Info = (props) => {
  let data = { progress: 60, width: 100 }
  return (
    <div className="w-1/2 md:w-1/4 h-3/4 flex mx-auto flex-col justify-center items-center my-auto">
      <img className="w-[223px] h-[246px]" src={course_logo} alt="course_logo"></img>
      <div className="w-full text-white font-bold text-3xl text-center border-b-2 border-gray-500 pb-4">
        دوره جاوا اسکریپت
      </div>
      <div className="w-full text-white flex flex-col items-center md:flex-row justify-between font-bold text-xl">
        <p>ظرفیت: {42} نفر</p>
        <p>دانشجو: {53} نفر</p>
      </div>
      <div className="w-full h-7 mt-6 flex justify-center rounded-md overflow-hidden opacity-90 ">
        {/* <div className="w-4/6 h-full bg-slate-100 flex justify-around items-center">
              60%
            </div> */}
        <ProgressBar data={data} />
      </div>
    </div>
  );
}
export default Info