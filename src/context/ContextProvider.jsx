import { createContext, useRef } from "react";
import PropTypes from "prop-types";

export const Provider = createContext(null);

export default function ContextProvider({children}) {
  const readySectionRef = useRef(null);

  const value = {
    readySectionRef
  }
  
  return (
    <Provider.Provider value={value}>
      {children}
    </Provider.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node
}