import { Link } from "react-router-dom";
import Wall from "../components/Account/Wall";
import "../styles/style.css"

function LoginPage() {
  return (
    <div className="page-login flex flex-col-reverse md:flex-row text-[#0b686e] h-[100vh]">
      <div className="form flex flex-col justify-center items-center flex-1 pt-32 overflow-scroll">
        <div className="w-9/12">
          <p className="text-3xl font-semibold text-right py-4">ورود کاربر</p>
          <div className="flex flex-row-reverse text-input bg-gray-100 rounded-md p-3 my-4">
            <label for="form-email" className="">: ایمیل</label>
            <input
              type="email"
              id="form-email"
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 rounded-md p-3 mb-4">
            <label for="form-email" className="">
              : رمز عبور
            </label>
            <input
              type="password"
              id="form-email"
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center lg:justify-between gap-1 text-end text-base mt-8">
            <a href="#" className="w-3/4 lg:block flex justify-center">فراموشی رمز عبور</a>
            <div className="flex lg:justify-end w-full items-center justify-center">
              <input type="checkbox" className="w-[10%]" />
              <p className="rememberCheck lg:w-3/4 md:w-1/2 w-1/4">مرا به خاطر بسپار</p>
            </div>
          </div>
          <div className="flex lg:flex-row lg:justify-between mt-8 font-semibold flex-col items-center text-center">
            <button className="lg:mr-4 m-0 lg:mb-0 mb-4 py-3 px-4 bg-[#0d5a5f] hover:bg-[#093d41] text-white rounded-md w-[45%]">
              ورود
            </button>
            <Link to={"/register"}
              className="border border-gray-200 rounded-md bg-gray-200 hover:border-[#0d5a5f] py-3 px-4 w-[45%]">
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
      <Wall />
    </div>
  );
}

export default LoginPage;
