//#region imports required modules and components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wall from "../../components/Account/Wall";
import Registerapi from "../../core/apis/Register.api";
import { InputDatePicker } from "jalaali-react-date-picker";
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
      <div className="form flex flex-col justify-center items-center md:pt-40 md:pb-10 pt-[18rem] pb-12 flex-1 text-[#0d5a5f] md:overflow-none overflow-scroll">
        <div className="w-9/12">
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-username">
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
            <label htmlFor="form-email">
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
            <label htmlFor="form-phone">
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
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-idNum">
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
          <div className="flex flex-row-reverse justify-between items-center w-full gap-4 text-input bg-gray-100 p-2 rounded-md">
            <div className="w-[25%] flex justify-end items-center text-center">
              <label htmlFor="form-date">
                : تاریخ تولد
              </label>
            </div>
            <div className="w-[70%]">
              <InputDatePicker
                placeholder="انتخاب کنید"
                className="flex-1 bg-transparent mx-2 outline-none"
                id="form-date"
                // value={birthDate}
                onChange={(e, y) => setBirthDate(y)}
              />
            </div>
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label htmlFor="form-password">
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
            className={`${isWorker ? "" : "hidden"
              } flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md`}
          >
            <label htmlFor="form-idNum">
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
            className={`${isWorker ? "" : "hidden"}
              flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md`}>
            <label htmlFor="form-date">
              : نوع همکاری
            </label>
            <select
              id="form-address"
              onChange={(e) => {
                debugger;
                setRole(e.target.value)
              }}
              className="flex-1 bg-transparent ml-2 mr-10 outline-none w-3/5 border border-gray-300 py-5"
            >
              <option value="teacher"> مدرس </option>
              <option value="admin"> ادمین </option>
            </select>
          </div>
          <div className="flex flex-row-reverse justify-between mt-8 font-semibold items-center">
            <Link
              to="/login"
              className="lg:mb-0 py-3 px-4 bg-gray-200 hover:border-[#0d5a5f] text-center rounded-md w-[45%]">
              ورود
            </Link>

            <button
              onClick={() => register(isWorker)}
              className="border border-gray-200 rounded-md bg-[#0d5a5f] hover:bg-[#093d41] text-white py-3 px-4 w-[45%]">
              ثبت نام
            </button>
          </div>

          <div className="rounded-lg flex-col flex w-full gap-2 mt-8">
            <p className={`${isWorker ? "bg-gray-200 hover:bg-[#093d41] hover:text-white hover:scale-1.5" : "bg-[#10696f] text-white hover:bg-[#0b4a4e]"}
              shadow-md rounded-md text-center font-semibold py-3 px-4 cursor-pointer duration-500`}
              onClick={() => setIsWorker(false)}>
              ثبت نام دانش آموز
            </p>
            <p className={`${isWorker ? "bg-[#10696f] text-white hover:bg-[#093d41]" : "bg-gray-200 hover:bg-[#10696f] hover:text-white"}
              shadow-md rounded-md text-center font-semibold py-3 px-4 cursor-pointer duration-500`}
              onClick={() => setIsWorker(true)}>
              ثبت نام کارمند
            </p>
          </div>
        </div>
      </div>
      <Wall />
    </div>
  );
}

export default LoginPage;
