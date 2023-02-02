import ProgressBar from '../../../../components/ProgressBar';


const Info = ({info}) => {
    let data = {progress: info.progress, width:100}
    return (
        <div className="w-1/2 md:w-1/4 h-3/4 flex mx-auto flex-col justify-center items-center my-auto">
          <img className="w-[75%] h-[50%]" src={info.heroSrc} alt={info.alt}></img>
          <div className="w-full text-white font-bold text-3xl text-center border-b-2 border-gray-500 pb-4">
            {info.title}
          </div>
          <div className="w-full text-white flex flex-col items-center md:flex-row justify-between font-bold text-xl">
            <p>ظرفیت: {info.capacity} نفر</p>
            <p>دانشجو: {info.students_count} نفر</p>
          </div>
          <div className="w-full h-7  mt-6 rounded-md overflow-hidden opacity-90 ">
            <ProgressBar data={data} />
          </div>
        </div>
    );
}
export default Info