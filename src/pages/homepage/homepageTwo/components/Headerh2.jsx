import React from 'react'
import imgSec1 from '../../../../assets/images/advice.avif'
import imgSec2 from '../../../../assets/images/certifications.png'
import imgSec3 from '../../../../assets/images/teamwork.png'

export default function Header() {
    return (
        <article className="flex flex-col items-center justify-center w-full h-screen">
            <div className="w-full h-1/3 flex relative overflow-hidden flex-col-reverse md:flex-row bg-[#0d5a5f]">
                <div className="md:w-2/5 mt-12 mb-8 md:mt-0 md:mb-0 flex items-center justify-center relative">
                    <div className="hidden w-full h-full md:flex absolute z-10">
                        <img src={imgSec1} className="hidden md:flex w-full h-full opacity-80 object-cover" alt="moshavere" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className="px-10 py-3 lg:px-12 lg:py-5 md:bg-[#0d5a5f] hover:bg-[#093d41] hover:text-gray-100 bg-cyan-500 text-[#093d41] md:text-gray-200 opacity-70 hover:opacity-90 rounded-md font-semibold absolute z-20 mb-11 md:mb-0 ">
                            مشاوره
                        </button>
                    </div>
                </div>

                {/* 1st photo section */}
                <div className="flex md:w-3/5 mb-9 md:mb-0">
                    <div className="w-full h-full bg-[#0d5a5f]">
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="flex flex-col md:items-end items-center  gap-6 text-white">
                                <h3 className="text-xl md:text-2xl">مشاوره انلاین</h3>
                                <p className="md:text-lg text-gray-200">... مشاوران ما برای حل مشکلات شما اماده اند</p>
                            </div>
                        </div>
                    </div>
                    <div className="rotateDiv flex w-3/4 ml-8 h-32 bg-[#0d5a5f] rotate-62 absolute z-20 left-0 top-0"></div>
                </div>
            </div>
            {/* 2nd photo section */}
            <div className="w-full h-1/3 flex relative overflow-hidden">
                <div className="flex w-full md:w-3/5 ">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-900 to-cyan-400">
                        <div className="flex  items-center justify-center w-full h-full">
                            <div className="flex flex-col items-center md:items-end gap-6 text-white">
                                <h3 className="text-xl md:text-2xl">ارايه مدرک معتبر</h3>
                                <p className="md:text-lg text-gray-200">... بهترین راه برای ساخت رزومه حرفه ای</p>
                            </div>
                        </div>
                    </div>
                    <div className="rotateDiv flex w-3/4 h-32 bg-gradient-to-tr from-cyan-500 to-cyan-400 rotate-62- absolute right-0 top-0"></div>
                </div>
                <div className="md:w-2/5 ">
                    <img src={imgSec2} className="hidden md:flex w-full h-full object-cover" alt="young-handsome" />
                </div>
            </div>
            {/* 3rd photo section */}
            <div className="w-full h-1/3  flex relative overflow-hidden">
                <div className="hidden md:w-2/5  md:flex ">
                    <img src={imgSec3} className="hidden md:flex w-full h-full object-cover" alt="" />
                </div>
                <div className="flex w-full md:w-3/5 ">
                    <div className="w-full h-full bg-[#0d5a5f]">
                        <div className="flex  items-center justify-center w-full h-full">
                            <div className="flex flex-col items-center sm:items-end gap-6 text-white">
                                <h3 className="text-xl md:text-2xl">همکاری در اموزش</h3>
                                <p className="md:text-lg text-gray-200">... به اساتید اموزشی ما در بامبو بپیوندید</p>
                            </div>
                        </div>
                    </div>
                    <div className="rotateDiv flex w-3/4 h-32 rotate-62 bg-[#0d5a5f] absolute left-0 top-0"></div>
                </div>
            </div>
        </article>
    )
}
