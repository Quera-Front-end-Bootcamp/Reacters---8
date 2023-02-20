import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { AXIOS } from '../../config/axios.config.js';
import Loading from "../../components/Loading/Loading";
import BlackBox from '../../components/Course/BlackBox';
import BenefitItem from "../../components/Course/BenefitItem";
import Description from "../../components/Course/Description";
import PriceModal from "../../components/Course/PriceModal";
import Info from "../../components/Course/Info";
import Rating from "../../components/Course/Rating";
import teacher_logo from "../../assets/icons/teacher.png";
import pair_programming from '../../assets/images/pair.png';
import { DESCRIPTION, BENEFITS } from "../../constants/courseConstants";
import "./style/course.css";

const Course = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const response = await AXIOS.get(`/api/course/${id}`)
    if (response.status === 200) {
      setIsLoading(false)
      setData(response.data.result);
      console.log(response.data.result);
    }
  }, []);

  useEffect(() => { fetchData() }, [])

  return (
    <>
      {isLoading ? <div className="py-72"><Loading /></div> : (
        <>
          {/* hero section */}
          < div className="hero min-h-screen relative flex flex-col justify-between">
            <Info info={data} />
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 h-1/4 text-white">
              <BlackBox d={"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"}>
                <p>رتبه : </p>
                <Rating rate={3} />
              </BlackBox>
              <BlackBox middle={true} d={"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}>
                <p>تاریخ شروع : {data?.startDate.slice(0, 10)}</p>
                <p>تاریخ پایان : {data?.endDate.slice(0, 10)}</p>
              </BlackBox>
              <BlackBox>
                <img src={teacher_logo} alt="teacher_logo"></img>
                <p>مدرس:</p>
                <p>{data?.teacher.fullName}</p>
              </BlackBox>
            </div>
          </div>
          {/* end of hero section */}

          <div className="bg-slate-100 flex flex-col-reverse sm:flex-row flex-wrap pb-6">
            <div className="h-[calc(50vh+200px)] relative w-full sm:w-1/2">
              <div className="w-1/2 h-3/4 border-b-2 border-r-2 border-[#0d5a5f] absolute top-0 left-0"></div>
              <PriceModal priceInfo={data} />
            </div>
            <Description className="min-h-[50vh] md:h-full w-full sm:w-1/2" description={DESCRIPTION} />
          </div>

          <div className="bg-slate-200 flex flex-col-reverse p-5 md:flex-row justify-end items-end md:items-stretch">
            <div className="flex flex-col justify-evenly items-end">
              <h1 dir="rtl" className="font-semibold text-3xl mb-3 text-[#0d5a5f]">مزایای این دوره:</h1>
              {BENEFITS(data?.title).map((item, index) => <BenefitItem index={index} title={item.title} context={item.context} key={item.id} />)}
            </div>
            <img className="w-[350px] h-[500px] hidden md:block" src={pair_programming} alt='pair programming'></img>
          </div>
        </>
      )}
    </>
  )
}
export default Course;