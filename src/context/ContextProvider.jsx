import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import useAxiosPublic from "../hooks/useAxiosPublic";
import getCookie from "../utils/getCookie";

export const Provider = createContext(null);

export default function ContextProvider({children}) {
  const axiosPublic = useAxiosPublic();
  const readySectionRef = useRef(null);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null)
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      axiosPublic('/api/verify-login', {withCredentials: true})
        .then(res => {
          if (res.data?.user) {
            setUser(res.data?.user);
            setUserRole(res.data?.user?.role);
            setUserLoaded(true);
          }
        })
        .catch(() => {
          setUserLoaded(true);
        })
    } else {
      setUserLoaded(true);
    }
  }, []);

  const value = {
    user,
    setUser,
    userLoaded,
    userRole,
    setUserRole,
    readySectionRef
  };
  
  return (
    <Provider.Provider value={value}>
      {children}
    </Provider.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node
}