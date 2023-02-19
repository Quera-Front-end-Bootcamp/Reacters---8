import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bamboo from '../../assets/icons/bamboo (d2).png';

export const Navbar = () => {

    let [navIsOpen, setNavIsOpen] = useState(false);

    return (
        <header className="text-white md:sticky md:top-0 md:w-11/12 Item-center m-auto text-textcolor-900 bg-[#0d5a5f] md:bg-transparent border-hidden shadow-none">
            <div className={`${navIsOpen ? "bg-transparent/30" : "bg-[#0d5a5f]"} flex items-center justify-between md:justify-around w-full hover:bg-transparent/30`}>
                <svg onClick={() => setNavIsOpen(!navIsOpen)}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    className="flex items-center w-1/6 md:w-full md:hidden mb-2 pt-2 h-8"
                    name="logo-ionic" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>

                <div className='w-[8%]'>
                    <NavLink to="/" className="md:hidden flex items-center text-center h-5 w-5">
                        <img src={bamboo} alt="bambo logo"></img>
                    </NavLink>
                </div>

            </div>

            <nav className={`${navIsOpen ? 'flex' : 'hidden'} md:flex justify-between flex-col md:flex-row-reverse mx-auto Item-center`}>
                <div className="hidden basis-1/6 w-full my-2 md:flex flex-col md:flex-row-reverse items-center justify-between">
                    <NavLink className="flex flex-row-reverse items-center hover:justify-center justify-between py-2 md:pt-2 gap-2" to="/">
                        <img src={bamboo} className="md:flex text-center md:my-auto h-6" alt="bambo logo" />
                        <h2 className="text-center text-2xl md:text-xl font-bold h-full">بامبو</h2>
                        <hr className="bg-gray-300 h-0.5 w-[90%]"></hr>
                    </NavLink>

                </div>

                <div className="flex flex-col basis-3/6 items-center justify-between md:flex-row-reverse md:gap-3 gap-2 lg:gap-6 md:font-semibold font-medium">
                    <NavLink className="px-4 py-2 text-center transition-all ease-in hover:w-3/5 md:hover:w-1/4 hover:bg-transparent/30 dir-rtl" to="/courses">
                        دوره ها
                    </NavLink>
                    <NavLink className="px-4 py-2 text-center transition-all ease-in hover:w-3/5 md:hover:w-1/4 hover:bg-transparent/30 dir-rtl" to="/">
                        مقالات
                    </NavLink>
                    <NavLink className="px-4 py-2 text-center transition-all ease-in hover:w-3/5 md:hover:w-1/4 hover:bg-transparent/30 dir-rtl" to="/">
                        خدمات
                    </NavLink>
                    <NavLink className="px-4 py-2 text-center transition-all ease-in hover:w-3/5 md:hover:w-1/4 hover:bg-transparent/30 dir-rtl" to="/aboutus">
                        درباره ما
                    </NavLink>
                </div>
                <div className="flex flex-col basis-2/6 md:flex-row items-center justify-between my-2 gap-2 font-semibold">
                    <NavLink className="mx-auto py-2 md:my-0 md:px-2 text-center w-3/5 hover:bg-transparent md:hover:bg-transparent/60 bg-transparent/30 dir-rtl" to="/register">
                        ثبت نام
                    </NavLink>
                    <NavLink className="mx-auto py-2 md:my-0 md:px-2 text-center w-3/5 hover:bg-transparent md:hover:bg-transparent/30 md:bg-transparent bg-transparent/30 dir-rtl" to="/login">
                        ورود
                    </NavLink>
                </div>
            </nav>
            <hr className="h-0.5 bg-[#547D89] border-none bg-transparent/30"></hr>
        </header>
    );
};
export default Navbar;