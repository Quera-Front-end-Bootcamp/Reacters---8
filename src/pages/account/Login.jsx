import Wall from "./components/Wall";

function LoginPage() {
  return (
    <div className="page-login flex flex-col-reverse md:flex-row h-screen">
      <div className="form flex flex-col justify-center items-center flex-1">
        <div className="w-9/12">
          <p className="text-4xl text-blue-800 text-right">ورود کاربر</p>
            <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
            <label for="form-email" className="text-blue-800">: ایمیل</label>
      <input
        type="email"
        id="form-email"
        className="flex-1 bg-transparent mx-2 outline-none" 
      />
    </div>
    <div className="flex flex-row-reverse text-input bg-gray-100 p-3 my-4">
      <label for="form-email" className="text-blue-800">
        : رمز عبور
      </label>
      <input
        type="password"
        id="form-email"
        className="flex-1 bg-transparent mx-2 outline-none"
      />
    </div>
          <div className="flex justify-between text-xl text-blue-800 mt-8">
            <a href="#">فراموشی رمز عبور</a>
            <p>
              <input type="checkbox" />
              مرا به خاطر بسپار
            </p>
          </div>
          <div className="flex mt-8 font-semibold">
            <button className="mr-4 py-2 px-6 bg-blue-800 text-white">
              ورود
            </button>
            <button>ثبت نام</button>
          </div>
        </div>
      </div>
      <Wall />
    </div>
  );
}

export default LoginPage;
