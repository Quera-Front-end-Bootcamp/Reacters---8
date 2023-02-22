// import { data } from "autoprefixer";
import http from "../interceptors/http.interceptor";

const Loginapi = async (data) => {
  try {
    const resualt = await http.post(
      "http://localhost:5000/api/auth/login",
      data
    );
    return resualt.data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

export default Loginapi;
