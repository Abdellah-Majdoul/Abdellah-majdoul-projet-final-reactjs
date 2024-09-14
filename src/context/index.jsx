import { createContext, useContext, useState } from "react";
import { dataJson } from "../constant/data";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const all = { user, setUser, dataJson };
  return (
    <MyContext.Provider value={all}>
      {children}
    </MyContext.Provider>
  );
};

export const UseAppContext = () => useContext(MyContext);
