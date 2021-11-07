// NPM package
import { createContext, useContext, useState } from "react";
import { newUser } from "../types/newUser";
import iUser from "../interfaces/iUser";
//interface
interface iContext {
  userData: iUser;
  setUserData: Function;
}
// Properties
const initialState = {
  userData: newUser,
  setUserData: () => console.warn("context used outside the provider"),
};
const UserDataContext = createContext<iContext>(initialState);

export function UserDataProvider({ children }: any) {
  // Local state
  const [userData, setUserData] = useState(newUser);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
