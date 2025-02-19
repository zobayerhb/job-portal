import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://jobsportal-ten.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userSignOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // console.log("error caught from interceptors", error);

        if (error.status === 401 || error.status === 403) {
          userSignOut()
            .then(() => {
              //   console.log("user sign out");
              navigate("/login");
            })
            .catch((error) => {
              // console.log(error.message)
            });
        }
        return Promise.reject("promise reject", error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;
