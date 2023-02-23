// import { data } from "autoprefixer";
import http from "../interceptors/http.interceptor";

const Registerapi = async (data, isworker) => {

  try {
    if (!isworker) {
      delete data.role;
      delete data.address;
    }
    const ii = isworker ? "/employee" : "";
    const apiUrl = "http://localhost:5000/api/auth" + ii + "/register";
    console.log(apiUrl);
    const resualt = await http.post(
      apiUrl,
      // "http://localhost:5000/api/auth/register",
      data
    );
    return resualt.data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

export default Registerapi;
