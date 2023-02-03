import { NavLink } from 'react-router-dom';
// import bamboo from '../../assets/icons/bamboo (d2).png';
import {HiMenu} from 'react-icons/hi';
import React, { useState } from 'react';




export const Header = () => {
    let [open,setOpen]=useState(false);
    return (
        <header className="sm:sticky sm:top-0 sm:w-11/12 Item-center m-auto text-textcolor-900 bg-[#066649] sm:bg-transparent border-hidden shadow-none">
            
            {/* absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in `}> */}
            <div className="flex Item-center justify-around	 w-full hover:bg-transparent/30">
            <HiMenu  onClick={()=>setOpen(!open)} className="text-center  w-full  sm:hidden  mb-2 pt-2 h-8" name="logo-ionic"></HiMenu>
            </div>
 
            <nav className={`sm:flex justify-between flex-col sm:flex-row-reverse  mx-auto Item-center ${open ? 'flex':'hidden'}`}>

                    <div className=" basis-1/6 hover:bg-transparent/30 my-2 flex flex-col sm:flex-row-reverse items-center justify-between">

                        <NavLink className=" flex flex-row-reverse items-center justify-between py-2 sm:pt-2 gap-2" to="/">
                            <img src={require("../assets/icons/bamboo (d2).png")} className="hidden sm:flex text-center	text-white sm:my-auto h-6" alt="bambo logo" />
                            <h2  className="text-center text-2xl sm:text-xl font-bold h-full ">بامبو</h2>
                        </NavLink>
                    </div>

                    <div className="flex flex-col basis-3/6 items-center justify-between sm:flex-row-reverse sm:gap-4 my:2 gap-4 ld:gap-6 ">
                        <NavLink className="px-4 py-2 grow text-center hover:w-1/2 sm:hover:basis-1/4 hover:bg-transparent/30 dir-rtl" to="/courses">
                            دوره ها
                        </NavLink>
                        <NavLink className="px-4 py-2 grow text-center hover:w-1/2 sm:hover:basis-1/4 hover:bg-transparent/30 dir-rtl" to="/">
                            مقالات
                        </NavLink>
                        <NavLink className="px-4 py-2 grow text-center hover:w-1/2 sm:hover:basis-1/4 hover:bg-transparent/30 dir-rtl" to="/">
                            خدمات
                        </NavLink>
                        <NavLink className="px-4 py-2 grow text-center hover:w-1/2 sm:hover:basis-1/4 hover:bg-transparent/30 dir-rtl" to="/aboutus">
                            درباره ما
                        </NavLink>
                    </div>

                    <div className="flex flex-col basis-2/6 sm:flex-row items-center justify-between my-2 gap-2 ">
                        <NavLink className="mx-auto  py-2 sm:my-0 sm:px-2 text-center w-1/2 hover:bg-transparent sm:hover:bg-transparent/60 bg-transparent/30 dir-rtl" to="/register">
                            ثبت نام
                        </NavLink>
                        <NavLink className="mx-auto py-2 sm:my-0 sm:px-2 text-center w-1/2  hover:bg-transparent sm:hover:bg-transparent/30 sm:bg-transparent bg-transparent/30 dir-rtl" to="/login">
                            ورود
                        </NavLink>
                    </div>
            </nav>
            <hr className="h-0.5 bg-[#547D89] border-none bg-transparent/30 "></hr>
        </header>
    );
};
export default Header;