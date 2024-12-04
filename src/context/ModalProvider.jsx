import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../hooks/useModal";
import ModalBackdrop from "../components/ModalBackdrop/ModalBackdrop";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const modal = useModal();
  const modalRoot = document.querySelector("#modal-root");

  return (
    <ModalContext.Provider value={modal}>
      {children}
      {modal.modalContent &&
        modalRoot &&
        createPortal(
          <ModalBackdrop onClose={modal.closeModal}>
            <div className="modal-content">
              {modal.modalContent}
              {/* <button onClick={modal.closeModal}>Close</button> */}
            </div>
          </ModalBackdrop>,
          modalRoot
        )}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);