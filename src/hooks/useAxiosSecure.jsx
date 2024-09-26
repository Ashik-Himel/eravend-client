import axios from "axios";
import useUserContext from "./useUserContext";

const useAxiosSecure = () => {
  const {user} = useUserContext();

  const axiosSecure = axios.create({
    baseURL: 'https://api.invest.eravend.com',
    // baseURL: 'http://localhost:5987',
    withCredentials: true,
    headers: {
      Authorization: user?.email
    }
  })

  return axiosSecure;
};

export default useAxiosSecure;