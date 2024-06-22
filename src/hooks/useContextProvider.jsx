import { useContext } from "react";
import { Provider } from "../context/ContextProvider";

export default function useContextProvider() {
  return useContext(Provider);
}