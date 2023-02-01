
import App from '../../App';
import Aboutus from '../Footer/AboutUs';
import { NavLink } from 'react-router-dom';


export const Header=()=>{

    // const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-11/12  m-auto top-0 text-textcolor-900	bg-transparent/0  border-hidden	shadow-none ">
            {/* <div className="w-11/12 m-auto "> */}
            <nav>
                <div className=" flex justify-between flex-row-reverse  mx-auto Item-center">

                    <div className="flex flex-row-reverse items-center justify-between py-auto ">
                        <NavLink className="text-xl font-bold"  to="/">
                            <h2 className="text-xl font-bold">بامبو</h2>
                        </NavLink>
                    </div>

                        <div className="items-center justify-between flex flex-row-reverse gap-6 ">
                            <NavLink className="px-4 py-2  hover:text-gray-900 hover:bg-transparent/10 "  to="/">
                                دوره ها
                            </NavLink>
                            <NavLink className="px-4 py-2  hover:text-gray-900 hover:bg-transparent/10 " to="/Aboutus">
                                خدمات
                            </NavLink>
                            <NavLink className="px-4 py-2  hover:text-gray-900 hover:bg-transparent/10 "   to="/Aboutus">
                                مقالات
                            </NavLink>
                            <NavLink className="px-4 py-2  hover:text-gray-900  hover:bg-transparent/10"   to="/Aboutus">
                                درباره ما
                            </NavLink>
                        </div>

                    <div className=" flex gap-2 ">
                        <a href="" className="px-4 py-2 bg-transparent/20">
                            ثبت نام
                        </a>
                        <a href="" className="px-4 py-2 ">
                            ورود
                        </a>
                    </div>

                </div>

            </nav>
            <hr className="h-0.5 bg-[#547D89] border-none  "></hr>
            {/* </div> */}
        </header>
    );
};
export default Header;