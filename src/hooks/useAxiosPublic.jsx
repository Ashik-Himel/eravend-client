import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: 'https://eravend-server.akashmedia.net',
    // baseURL: 'http://localhost:5000'
  })

  return axiosPublic;
};

export default useAxiosPublic;