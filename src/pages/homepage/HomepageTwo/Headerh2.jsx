import React from 'react'

import imgSec1 from '../../../assets/imgHomePageTwo/moshavere-y.png'
import imgSec2 from '../../../assets/imgHomePageTwo/studentS2.png'
import imgSec3 from '../../../assets/imgHomePageTwo/moshavereS3.png'

export default function Header() {
  return (
    <article className="flex flex-col items-center justify-center w-full h-screen ">
    <div className="w-full h-1/3  flex  relative overflow-hidden flex-col-reverse  md:flex-row bg-sec1 ">

        <div className="md:w-2/5 mt-12 mb-8 md:mt-0 md:mb-0    flex items-center justify-center relative   ">
            <div className="hidden w-full h-full  md:flex absolute z-10 ">
                <img src={imgSec1} className="hidden md:flex w-full h-full blur-sm object-cover" alt="moshavere" />
            </div>

            <button
                className="px-6 py-3 lg:px-16 lg:py-6 bg-white bg-opacity-60 text-sec1 font-bold text-sm  absolute z-20 mb-11 md:mb-0 ">مشاوره</button>
        </div>

        <div className="flex md:w-3/5 mb-9 md:mb-0   ">

            <div className="w-full h-full  bg-sec1 ">
                <div className="flex  items-center justify-center w-full h-full">
                    <div className="flex flex-col md:items-end items-center  gap-6 text-white">
                        <h3 className=" text-xl md:text-2xl">مشاوره انلاین</h3>
                        <p className="md:text-lg text-gray-200">... مشاوران ما برای حل مشکلات شما اماده اند</p>
                    </div>
                </div>

            </div>
            <div className="hidden lg:flex w-3/4 h-32 bg-sec1 rotate-62 absolute z-20 left-0 top-0"></div>
        </div>
    </div>
    <div className="w-full h-1/3 flex relative overflow-hidden ">

        <div className="flex w-full md:w-3/5 ">

            <div className="w-full h-full   bg-gradient-to-r from-cyan-800 to-cyan-400 ">

                <div className="flex  items-center justify-center w-full h-full">
                    <div className="flex flex-col items-center md:items-end gap-6 text-white">
                        <h3 className="text-xl md:text-2xl">ارايه مدرک معتبر</h3>
                        <p className="md:text-lg text-gray-200">... بهترین راه برای ساخت رزنومه حرفه ای</p>
                    </div>
                </div>

            </div>
            <div
                className="hidden lg:flex    w-3/4 h-32 bg-gradient-to-tr from-cyan-500 to-cyan-400  rotate-62- absolute right-0 top-0">
            </div>

        </div>
        <div className="md:w-2/5 ">
            <img src={imgSec2} className="hidden md:flex w-full h-full object-cover" alt="young-handsome" />
        </div>
    </div>

    <div className="w-full h-1/3  flex relative overflow-hidden ">

        <div className="hidden md:w-2/5  md:flex ">
            <img src={imgSec3} className="hidden md:flex w-full h-full object-cover" alt="" />
        </div>


        <div className="flex w-full md:w-3/5 ">

            <div className="w-full h-full  bg-sec1 ">

                <div className="flex  items-center justify-center w-full h-full">
                    <div className="flex flex-col items-center sm:items-end gap-6 text-white">
                        <h3 className="text-xl md:text-2xl">همکاری در اموزش</h3>
                        <p className="md:text-lg text-gray-200">... به اساتید اموزشی ما در بامبو بپیوندید</p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-3/4 h-32 bg-sec1 rotate-62 absolute left-0 top-0"></div>
        </div>
    </div>
</article>
  )
}
