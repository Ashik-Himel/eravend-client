import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: 'https://api.invest.eravend.com',
    // baseURL: 'http://localhost:5987',
  })

  return axiosPublic;
};

export default useAxiosPublic;