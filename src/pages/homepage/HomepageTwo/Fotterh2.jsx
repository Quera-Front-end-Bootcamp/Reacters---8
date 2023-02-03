import React from 'react'
import imgSec5 from '../../../assets/imgHomePageTwo/websiteF.png'

export default function Fotter() {
  return (
 <article className=" flex flex-col items-center justify-center w-full h-60v">
            <div className="w-full h-full  flex relative overflow-hidden ">
                <div className="flex w-full md:w-3/5 ">
                    <div className="w-full h-full  bg-sec2  flex items-center justify-evenly flex-col ">
                        <div className="w-72 lg:w-96   font-black text-white text-right trxt-xl  md:text-2xl">
                            پیشنهادات و انتقادات
                        </div>
                        <form action="#">

                            <div className="flex flex-col w-72 h-56 gap-12 md:gap-16   ">
                                <input type="email" placeholder="... ایمیل خود را وارد کنید"
                                    className=" placeholder-sec3 md:text-lg   w-72 h-12 lg:w-96 lg:h-16 bg-sec4 bg-opacity-30  focus:border-b-teal-300 focus:border-b-4  outline-none text-end pr-5" />

                                <input type="text" placeholder="... متن خود را وارد کنید"
                                    className=" placeholder-sec3 md:text-lg   w-72 h-12   lg:w-96 lg:h-16 bg-sec4 bg-opacity-30 focus:border-b-teal-300 focus:border-b-4  outline-none text-end  pr-5" />
                            </div>

                            <button className=" py-2  px-9 lg:py-4 lg:text-2xl lg:mt-5 bg-sec1 text-white ">
                                    ارسال
                            </button>


                        </form>
                    </div>
                    <div
                        className="lg:w-3/5 lg:h-44 lg:right-20 lg:top-52 bg-sec2   xl:right-44 xl:top-40    xl:w-7/12 xl:h-52   rotate-77- absolute">
                    </div>
                </div>
                <div className=" hidden md:flex md:w-2/5 ">
                    <img src={imgSec5} className="hidden md:flex w-full h-full " alt="young-handsome" />
                </div>
            </div>
        </article> 
  )
}
