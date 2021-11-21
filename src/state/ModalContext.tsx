// NPM package
import { createContext, useContext, useState } from "react";
import { newMedia } from "../types/newMedia";
import iMedia from "../interfaces/iMedia";
//interface
interface iContext {
  modal: any;
  setModal: Function;
}
// Properties
const initialState = {
  modal: newMedia,
  setModal: () => console.warn("context used outside the provider"),
};
const ModalContext = createContext<iContext>(initialState);

export function ModalProvider({ children }: any) {
  // Local state
  const [modal, setModal] = useState(newMedia);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
