import React, { createContext, useContext } from "react";
import { useModal } from "../hooks/useModal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const modal = useModal();

  return (
    <ModalContext.Provider value={modal}>
      {children}
      {modal.modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            {modal.modalContent}
            <button onClick={modal.closeModal}>Close</button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);