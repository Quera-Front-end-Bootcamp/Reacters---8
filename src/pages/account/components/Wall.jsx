import BackgroundImage from "../../../assets/images/laptop.jpg";
import { FaTelegramPlane, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Wall() {
  return (
    <div
      className="background bg-cover w-full flex-1 md:flex-none md:w-3/5"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="overlay flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 flex-col">
          <div className="logo flex flex-row-reverse items-center justify-center">
            <p className="text-white text-4xl pb-2">آکادمی آموزشی بامبو</p>
            <img
              src={require("../../../assets/icons/bamboo (d2).png")}
              className="h-20 text-white "
              alt=""
            />
          </div>
          <div className="w-full h-px bg-white my-4"></div>
          <div className="hidden md:flex justify-between text-white text-3xl hover:text-4xl ease-in duration-200 ">
            <a href="#" title="">
              <FaInstagram />
            </a>
            <a href="#" title="">
              <FaTelegramPlane />
            </a>
            <a href="#" title="">
              <FaWhatsapp />
            </a>
            <a href="#" title="">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-end pb-8">
          <a href="#">
            <span className="material-symbols-outlined text-3xl text-white hover:text-4xl ease-in duration-200 ">
              home
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wall;
