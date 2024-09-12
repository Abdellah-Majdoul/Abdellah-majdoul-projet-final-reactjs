import { createContext, useContext } from "react";
import { dataJson } from "../constant/data";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const all = { dataJson };
  return (
    <MyContext.Provider value={all}>
      {children}
    </MyContext.Provider>
  );
};

export const UseAppContext = () => useContext(MyContext);
