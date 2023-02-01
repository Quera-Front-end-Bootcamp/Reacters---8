
import Wall from "./components/Wall";

function LoginPage() {
  return (
    <div className="page-login flex flex-col-reverse md:flex-row-reverse h-screen">
      <div className="form flex flex-col justify-center items-center flex-1">
        <div className="w-9/12 py-8">
          <p className="text-4xl text-blue-800 text-right">ثبت نام کاربر</p>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
            <label for="form-username" className="text-blue-800">: نام کاربری</label>
      <input
        type="text"
        id="form-username"
        className="flex-1 bg-transparent mx-2 outline-none"
      />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
      <label for="form-email" className="text-blue-800">: ایمیل</label>
      <input
        type="email"
        id="form-email"
        className="flex-1 bg-transparent mx-2 outline-none"
      />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
      <label for="form-phone" className="text-blue-800">: شماره موبایل</label>
      <input
        type="tel" id="form-phone" maxLength={11} pattern="[0-9]*" required className="flex-1 bg-transparent mx-2 outline-none" />
          </div>
          <div className=" flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
      <label for="form-idNum" className="text-blue-800">: شماره ملی</label>
      <input
        type="number"
        id="form-idNum"
        className="flex-1 bg-transparent mx-2 outline-none"
      />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
      <label for="form-date" className="text-blue-800">: تاریخ تولد</label>
      <input
        type="text"
        id="form-date"
        className="flex-1 bg-transparent mx-2 outline-none"
      />
          </div>
          <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
      <label for="form-password" className="text-blue-800">: رمز عبور
      </label>
      <input
        type="password"
        id="form-password"
        className="flex-1 bg-transparent mx-2 outline-none"
      />
    </div>
          <div className="flex mt-8 font-semibold">
            <button className="mr-4 py-2 px-6 bg-blue-800 text-white">
              ثبت نام
            </button>
            <button>ورود</button>
          </div>
        </div>
      </div>
      <Wall />
    </div>
  );
}

export default LoginPage;
