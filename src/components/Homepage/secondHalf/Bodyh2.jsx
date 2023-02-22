import React from 'react'
import imgSec4 from '../../../assets/images/f-form.png'

export default function Body() {
    return (
        <article className="w-full h-screen lg:mb-0 mb-40 md:h-60vh flex justify-evenly lg:justify-end items-center lg:items-start flex-col lg:flex-row-reverse md:p-0 py-24">
            <div className="w-3/4 lg:w-2/5 h-1/4 lg:h-2/3 text-[#093d41] flex justify-center items-start lg:items-end  lg:border-l-2 sm:border-b-2 relative">
                <div className="lg:w-4/5 h-3/4 flex flex-col justify-center text-right gap-3 sm:gap-6">
                    <h3 className="font-bold text-2xl xl:text-3xl ">اخبار و مقالات</h3>
                    <p className="text-xs sm:text-base xl:text-lg md:pb-0 pb-16">
                        دسترسی به جدید ترین و مفید ترین مقالات تالیف شده توسط معتبر ترین روزنامه ها
                        و رسانه ها در دسته بندی های گوناگونی همچون طراحی هنر برنامه نویسی اقتصاد فلسفه فیزیک شیمی و
                    </p>
                </div>
                <button className="font-medium py-2 px-2 sm:py-5 sm:px-7 lg:px-8 text-sm xl:text-base xl:mt-5 border bg-[#0d5a5f] text-white rounded-md absolute bottom-1r sm:bottom-2r left-6 sm:left-12 ">
                    مشاهده مقالات
                </button>
            </div>
            <div className=" w-3/4 lg:w-3/5 h-3/6 lg:h-2/3  flex flex-col items-center relative ">
                <div className="lg:w-full lg:h-full flex justify-center lg:items-end ">
                    <div className="lg:w-4/5 lg:h-4/5 flex items-end relative md:mt-0 mt-8">
                        <img src={imgSec4} className="w-full lg:h-5/6 object-cover" alt="slider" />
                        <p className="absolute w-full h-8 sm:h-16 lg:h-20 flex items-center justify-center bg-[#0d5a5f] bg-opacity-60 text-white font-bold text-xs sm:text-base xl:text-lg">
                            مقایسه ری اکت با فریم ورک های جدید جاوا اسکریپت
                        </p>

                        {/* <!-- lg < active    start --> */}
                        <div className="absolute w-full h-full flex justify-between items-center lg:hidden text-white p-2">
                            <button className="p-3 bg-sec2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-5 sm:w-8 h-5 sm:h-8 rounded-full lg:rounded-none">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 19.5L 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button className="p-3 bg-sec2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className=" w-5 sm:w-8 h-5 sm:h-8 rounded-full lg:rounded-none">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                        {/* <!-- lg < active    end --> */}
                    </div>
                </div>
                {/* <!-- lg > active    start --> */}
                <div
                    className=" lg:border-l-2 lg:border-b-2 lg:border-r-2 text-sec2 border-sec2 w-full lg:w-3/5  h-8 sm:h-14   justify-between lg:justify-between absolute bottom-12  sm:bottom-1 lg:bottom-3.5r hidden lg:flex ">

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-5 sm:w-8 h-5 sm:h-8 rounded-full lg:rounded-none ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className=" w-5 sm:w-8 h-5 sm:h-8 rounded-full lg:rounded-none  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                {/* <!-- lg < active    end --> */}
            </div>
        </article>
    )
}
