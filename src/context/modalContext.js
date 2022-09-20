import { createContext, useContext, useState } from "react";


export const ModalContext = createContext();



export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({open: false});

    const openModal = () => setModalState({open: !modalState.open});
  return (
    <ModalContext.Provider value={{modalState, openModal}}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => {
    const context = useContext(ModalContext);
    return context;
}