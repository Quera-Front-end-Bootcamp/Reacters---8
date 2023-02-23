import axios, { AxiosResponse } from "axios";
import { json } from "react-router-dom";
import { getItem } from "../storage.service";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const expectedError =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;
    const problem = error;
    if (!expectedError) {
      return problem;
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  config.headers = config.headers || {};
  config.headers["x-auth-token"] = JSON.parse(token);
  return config;
});
const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default methods;
