//#region imports required modules and components
import React, { useState } from "react";
import { Link, useNative, useNavigate } from "react-router-dom";
import Wall from "../../components/Account/Wall";
import Registerapi from "../../core/apis/Register.api";
import { InputDatePicker, DatePicker } from "jalaali-react-date-picker";
import "jalaali-react-date-picker/lib/styles/index.css";
//#endregion

function LoginPage() {
const nav = useNavigate();

  //#region statedeclaration
  const [isWorker, setIsWorker] = useState(Boolean(false));
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  //#endregion
  //#region registerfunction
  const register = async (isWorker) => {
    const user = {
      fullName,
      email,
      password,
      phoneNumber,
      birthDate,
      nationalId,
      profile: "image.png",
      address,
      role,
    };
    const regresult = await Registerapi(user, isWorker);
    if (regresult.success) {
      setFullName('');
      setEmail('');
      setRole('');
      setAddress('');
      setNationalId('');
      setBirthDate('');
      setPhoneNumber('');
      setPhoneNumber('');
      setPassword('');
      alert(`${fullName} با موفقیت ثبت نام شدید`);
      nav('/register');
    }
  };
  //#endregion

  return (
    <div className="page-login flex flex-col-reverse md:flex-row-reverse h-screen overflow-scroll">
      <div
        className="form flex flex-col justify-center items-center flex-1 text-[#0d5a5f] 
                      md:overflow-none overflow-scroll pt-60 md:pt-8"
      >
        <div className="rounded-lg flex-row-reverse justify-none flex w-9/12 gap-2">
          <p
            className={`${
              isWorker
                ? "bg-gray-200 hover:bg-[#093d41] hover:text-white hover:scale-1.5"
                : "bg-[#10696f] text-white"
            }
              shadow-md rounded-r-lg text-xl lg:text-2xl text-center font-semibold  py-4 px-4 w-1/2 cursor-pointer duration-500`}
            onClick={() => {
              setIsWorker(false);
            }}
          >
            ثبت نام دانش آموز
          </p>
          <p
            className={`${
              isWorker
                ? "bg-[#10696f] text-white"
                : "bg-gray-200 hover:bg-[#093d41] hover:text-white"
            } shadow-md rounded-l-lg text-xl lg:text-2xl text-center font-semibold  py-4 px-4 w-1/2 cursor-pointer duration-500`}
            onClick={() => {
              setIsWorker(true);
            }}
          >
            ثبت نام کارمند
          </p>
        </div>
        <div className={` w-9/12 py-8 `}>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-username" className="">
              : نام کاربری
            </label>
            <input
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              id="form-username"
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-email" className="">
              : ایمیل
            </label>
            <input
              type="email"
              id="form-email"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
              value={email}
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-phone" className="">
              : شماره موبایل
            </label>
            <input
              type="tel"
              id="form-phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={11}
              pattern="[0-9]*"
              required
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
              value={phoneNumber}
            />
          </div>
          <div className=" flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-idNum" className="">
              : شماره ملی
            </label>
            <input
              type="number"
              id="form-idNum"
              onChange={(e) => setNationalId(e.target.value)}
              value={nationalId}
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-date" className="">
              : تاریخ تولد
            </label>
            <InputDatePicker
              placeholder=" تاریخ"
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
              id="form-date"
              // value={birthDate}
              onChange={(e, y) => setBirthDate(y)}
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-password" className="">
              : رمز عبور
            </label>
            <input
              type="password"
              id="form-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
            />
          </div>
          <div
            className={`${
              isWorker ? "" : "hidden"
            } flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md`}
          >
            <label htmlFor="form-idNum" className="">
              : نشانی سکونت
            </label>
            <input
              type="text"
              id="form-address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
            />
          </div>
          <div
            className={`${
              isWorker ? "" : "hidden"
            } flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md`}
          >
            <label htmlFor="form-date" className="">
              : نوع همکاری
            </label>
            <select
              id="form-address"
              onChange={(e) => {
                debugger;
                setRole(e.target.value);
              }}
              className="flex-1 bg-transparent mx-2 outline-none w-3/5"
            >
              <option value="teacher"> آموزگار </option>
              <option value="admin"> ادمین </option>
            </select>
          </div>
          <div className="flex lg:flex-row-reverse lg:justify-between mt-8 font-semibold flex-col items-center">
            <Link
              to="/login"
              className="lg:mr-4 m-0 lg:mb-0 mb-4 py-3 px-4  bg-gray-200 hover:border-[#0d5a5f] text-center rounded-md w-[45%]"
            >
              ورود
            </Link>

            <button
              onClick={() => {
                register(isWorker);
              }}
              className="border border-gray-200 rounded-md bg-[#0d5a5f] hover:bg-[#093d41] text-white  py-3 px-4 w-[45%]"
            >
              ثبت نام
            </button>
          </div>
        </div>
      </div>
      <Wall />
    </div>
  );
}

export default LoginPage;
