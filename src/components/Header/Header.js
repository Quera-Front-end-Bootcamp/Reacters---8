import App from '../../App';
import Aboutus from '../Footer/AboutUs';
import { NavLink } from 'react-router-dom';
// import bamboo from '../../assets/bamboo (d2)';



export const Header = () => {
    return (
        <header className=" w-11/12  m-auto top-0 text-textcolor-900 bg-transparent border-hidden shadow-none ">
            <nav>
                <div className=" flex justify-between flex-row-reverse  mx-auto Item-center">

                    <div className="flex flex-row-reverse items-center justify-between py-auto ">
                        <NavLink className=" flex flex-row-reverse items-center justify-between py-auto" to="/">
                        <img src={require("../../assets/bamboo (d2).png")} className="text-white py-auto h-6" alt="bambo logo"/>
                            <h2 className="text-xl font-bold dir-rtl">بامبو</h2>
                        </NavLink>
                    </div>

                    <div className="items-center justify-between flex flex-row-reverse gap-6 ">
                        <NavLink className="px-4 py-2  hover:bg-transparent/30 dir-rtl" to="/courses">
                            دوره ها
                        </NavLink>
                        <NavLink className="px-4 py-2   hover:bg-transparent/30 dir-rtl" to="/Aboutus">
                            مقالات
                        </NavLink>
                        <NavLink className="px-4 py-2  hover:bg-transparent/30 dir-rtl" to="/Aboutus">
                            خدمات
                        </NavLink>
                        <NavLink className="px-4 py-2  hover:bg-transparent/30 dir-rtl" to="/aboutus">
                            درباره ما
                        </NavLink>
                    </div>

                    <div className=" flex gap-2 ">
                        <NavLink className="px-4 py-2 bg-transparent/30 dir-rtl" to="/register">
                            ثبت نام
                        </NavLink>
                        <NavLink className="px-4 py-2 dir-rtl" to="/login">
                            ورود
                        </NavLink>
                    </div>

                </div>

            </nav>
            <hr className="h-0.5 bg-[#547D89] border-none bg-transparent/30 "></hr>
            {/* </div> */}
        </header>
    );
};
export default Header;