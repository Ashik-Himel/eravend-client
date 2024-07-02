import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    // baseURL: 'https://server.investiereindeinenpizzaautomaten.de'
    baseURL: 'http://localhost:5987'
  })

  return axiosPublic;
};

export default useAxiosPublic;