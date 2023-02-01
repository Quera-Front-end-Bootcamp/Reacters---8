import React from "react";
import { useParams } from "react-router-dom";
import classes from "./course.module.css";

import store from './store.json';

import teacher_logo from "../../assets/course/teacher.png";
import pair_programming from '../../assets/course/pair.png';


import { coursesData } from "../../core/courseConstants";

import BlackBox from './components/BlackBox/BlackBox';
import BenefitItem from "./components/BenefitItem/BenefitItem";
import Description from "./components/Description/Description";
import PriceModal from "./components/PriceModal/PriceModal";
import Info from "./components/Info/Info";
import Rating from "./components/Rating/Rating";




const Course = () => {

  const {id} = useParams();
  const data = coursesData.find(item => item.id === id);


  return (
    <>
      {/* hero section */}
      <div className={` ${classes.hero} min-h-screen relative flex flex-col justify-between `}>
        <Info info = {data}/>
        <div className="w-full grid grid-cols-1 md:grid-cols-3  gap-0 h-1/4 text-white">
          <BlackBox d={"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"}>
            <p>رتبه : </p>
            <Rating rate={4}/>
          </BlackBox>
          <BlackBox middle = {true} d={"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}>
            <p>تاریخ شروع: 1/1/1400</p>
            <p>تاریخ پایان: 1/1/1401</p>
          </BlackBox>
          <BlackBox>
            <img src={teacher_logo}></img>
            <p>مدرس:</p>
            <p>دکتر بحر العلومی</p>
          </BlackBox>
        </div>
      </div>
      {/* end of hero section */}

      {/* <div className={``}> */}
        <div className=" bg-slate-100 flex flex-col-reverse sm:flex-row flex-wrap">
            {/* <div className="h-1/2 md:h-full bg-red-600"> */}
              <div className="h-[calc(50vh+200px)] relative w-full sm:w-1/2">
                  <div className="w-1/2 h-3/4 border-b-2 border-r-2 border-slate-400 absolute  top-0 left-0"></div>
                  <PriceModal priceInfo = {store.price}/>
              {/* </div> */}
            </div>
            <Description className="min-h-[50vh] md:h-full w-full sm:w-1/2" description={store.description} />
        </div>


        <div className=" bg-slate-200 flex flex-col-reverse md:flex-row justify-end items-end md:items-stretch">
          <div className="flex flex-col justify-evenly items-end">
            <h1 dir="rtl" className={`${classes.desc} font-bold text-3xl mb-3`}>مزایای این دوره:</h1>
            {store.benefits.map((item, index) => <BenefitItem index={index} key={index} title = {item.title} context = {item.context}/>)}
          </div>
          <img className="w-[350px] h-[500px] hidden md:block" src={pair_programming} alt='pair programming'></img>
        </div>

      {/* </div> */}
    </>
  );
};

export default Course;
