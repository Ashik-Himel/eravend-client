import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";

export const Provider = createContext(null);

export default function ContextProvider({children}) {
  const axiosPublic = useAxiosPublic();
  const readySectionRef = useRef(null);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null)
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      if (user?.email) {
        axiosPublic.get(`/api/user-role?email=${user.email}`, {withCredentials: true})
          .then(res => {
            setUserRole(res.data?.role);
            setUserLoaded(true);
          })
      } else {
        setUserLoaded(true);
      }
    });
    return () => unSubscribe(); 
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