import React from "react";
import classes from "./course.module.css";

import course_logo from "../../assets/course/course-logo.png";
import teacher_logo from "../../assets/course/teacher.png";
import pair_programming from '../../assets/course/pair.png';

const Course = () => {
  return (
    <>
      {/* hero section */}
      <div className={` ${classes.hero} h-screen relative  `}>
        <div className="w-1/2 md:w-1/4 h-3/4 flex mx-auto flex-col justify-center items-center">
          <img src={course_logo} alt="course_logo"></img>
          <div className="w-full text-white font-bold text-3xl text-center border-b-2 border-gray-500 pb-4">
            دوره جاوا اسکریپت
          </div>
          <div className="w-full text-white flex flex-col items-center md:flex-row justify-between font-bold text-xl">
            <p>ظرفیت: 59 نفر</p>
            <p>دانشجو: 53 نفر</p>
          </div>
          <div className="w-full h-7 relative bg-gray-300 mt-6 rounded-md overflow-hidden opacity-90 ">
            <div className="w-4/6 h-full bg-slate-100 flex justify-around items-center">
              60%
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-0 h-1/4 text-white">
          <div className={`${classes.heroEnd} flex flex-col p-8 items-center`} dir='rtl'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <p>رتبه : </p>
          </div>
          <div className={`${classes.heroEnd} flex flex-col p-8 items-center`} dir='rtl'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <p>تاریخ شروع: 1/1/1400</p>
            <p>تاریخ پایان: 1/1/1401</p>
          </div>
          <div className={`${classes.heroEnd} flex flex-col p-8 items-center`} dir='rtl'>
            <img src={teacher_logo}></img>
            <p>مدرس:</p>
            <p>دکتر بحر العلومی</p>
          </div>
        </div>
      </div>
      {/* end of hero section */}
      <div className={`h-screen`}>
        <div className="h-1/2 bg-slate-100 grid grid-cols-12">
            <div className="col-span-4 relative  ">
                <div className="w-1/2 h-3/4 border-b-2 border-r-2 border-slate-400 absolute  top-0 left-0"></div>
                <div className="w-1/2 h-3/4 bg-slate-100 absolute left-1/4 top-1/4"></div>
            </div>
            <div className="col-span-8 flex flex-col justify-center">
                <h2 dir="rtl" className={`${classes.desc} font-bold text-3xl`}>توضیحات</h2>
                <p dir="rtl" className={`${classes.desc}`}>امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله</p>
            </div>
        </div>
        <div className="h-1/2 bg-slate-200 flex flex-row justify-end">
          <div>
            <h1 dir="rtl" className={`${classes.desc} font-bold text-3xl mb-3`}>مزایای این دوره:</h1>
            <div className={`${classes.desc}`}>
                  <span></span>
                  <div>
                    <h5 dir="rtl" className="font-bold">آشنایی با زبان برنامه نویسی جاوااسکریپت</h5>
                    <p dir="rtl" className="text-sm md:text-base">در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد</p>
                  </div>
            </div>
            <div className={`${classes.desc}`}>
                  <span></span>
                  <div>
                    <h5 dir="rtl" className="font-bold">آشنایی با زبان برنامه نویسی جاوااسکریپت</h5>
                    <p dir="rtl" className="text-sm md:text-base">در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود</p>
                  </div>
            </div>
            <div className={`${classes.desc}`}>
                  <span></span>
                  <div>
                    <h5 dir="rtl" className="font-bold">آشنایی با زبان برنامه نویسی جاوااسکریپت</h5>
                    <p dir="rtl" className="text-sm md:text-base">در پایان این دوره ی آموزشی ، شما دانشجوی گرامی ، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود</p>
                  </div>
            </div>
          </div>
          <img src={pair_programming} alt='pair programming'></img>
        </div>
      </div>
    </>
  );
};

export default Course;
