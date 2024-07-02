import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: 'https://server.investiereindeinenpizzaautomaten.de'
  })

  return axiosPublic;
};

export default useAxiosPublic;