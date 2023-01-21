import React from 'react';
import classes from './course.module.css';

import course_logo from '../../assets/course/course-logo.png'


const Course = () => {
    return (
        <>
        {/* hero section */}
        <div className = {` ${classes.hero} h-screen relative w-screen `} >
           <div className = "w-1/2 md:w-1/4 h-3/4 flex mx-auto flex-col justify-center items-center">
                <img  src= {course_logo} alt="course_logo"></img>
                <div className='w-full text-white font-bold text-3xl text-center border-b-2 border-gray-500 pb-4'>دوره جاوا اسکریپت</div>
                <div className='w-full text-white flex flex-col md:flex-row justify-between font-bold text-xl'>
                    <p>ظرفیت: 59 نفر</p>
                    <p>دانشجو: 53 نفر</p>
                </div>
                <div className='w-full h-7 relative bg-gray-300 mt-6 rounded-md overflow-hidden opacity-90 '>
                    <div className='w-4/6 h-full bg-slate-100 flex justify-around items-center'>60%</div>
                </div>
           </div>
           <div className='w-full grid grid-cols-3 gap-0 h-1/4 text-white'>
                <div className={`${classes.heroEnd}`}>1</div>
                <div className={`${classes.heroEnd}`}>2</div>
                <div className={`${classes.heroEnd}`}>3</div>
           </div>
        </div>
        </>
    );
}

export default Course;