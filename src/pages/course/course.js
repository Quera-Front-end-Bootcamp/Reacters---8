import React from 'react';
import classes from './course.module.css';

import course_logo from '../../assets/course/course-logo.png'


const Course = () => {
    return (
        <>
        <div className = {` ${classes.hero} h-screen relative w-screen `} >
            hiiiiiiiiiiiiii
           <div className = "w-1/2 md:w-1/4 h-3/4 flex mx-auto flex-col justify-end items-center">
                <img  src= {course_logo} alt="course_logo"></img>
                <div className='w-full text-white font-bold text-3xl text-center border-b-2 border-gray-400 pb-4'>دوره جاوا اسکریپت</div>
           </div>
           <div>

           </div>
        </div>
        </>
    );
}

export default Course;