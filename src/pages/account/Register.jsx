import Wall from "./components/Wall";

function LoginPage() {
  return (
    //  // bg-[#0d5a5f] hover:bg-[#093d41]
    <div className="page-login flex flex-col-reverse md:flex-row-reverse h-screen">
      <div className="form flex flex-col justify-center items-center flex-1 text-[#0d5a5f]">
        <div className="w-9/12 py-8">
          <p className="text-3xl text-right font-semibold pb-4">ثبت نام کاربر</p>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label for="form-username" className="">: نام کاربری</label>
            <input
              type="text"
              id="form-username"
              className="flex-1 bg-transparent mx-2 outline-none"
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label for="form-email" className="">: ایمیل</label>
            <input
              type="email"
              id="form-email"
              className="flex-1 bg-transparent mx-2 outline-none"
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label for="form-phone" className="">: شماره موبایل</label>
            <input
              type="tel" id="form-phone" maxLength={11} pattern="[0-9]*" required className="flex-1 bg-transparent mx-2 outline-none" />
          </div>
          <div className=" flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label for="form-idNum" className="">: شماره ملی</label>
            <input
              type="number"
              id="form-idNum"
              className="flex-1 bg-transparent mx-2 outline-none"
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label for="form-date" className="">: تاریخ تولد</label>
            <input
              type="text"
              id="form-date"
              className="flex-1 bg-transparent mx-2 outline-none"
            />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4 rounded-md">
            <label for="form-password" className="">: رمز عبور
            </label>
            <input
              type="password"
              id="form-password"
              className="flex-1 bg-transparent mx-2 outline-none"
            />
          </div>
          <div className="flex lg:flex-row lg:justify-between mt-8 font-semibold flex-col items-center">
            <button className="lg:mr-4 m-0 lg:mb-0 mb-4 py-3 px-4 bg-[#0d5a5f] hover:bg-[#093d41] text-white rounded-md w-[45%]">
              ورود
            </button>
            <button className="border border-gray-200 rounded-md bg-gray-200 hover:border-[#0d5a5f] py-3 px-4 w-[45%]">
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
