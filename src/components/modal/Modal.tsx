// dependencies
import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface iProps {
  children: ReactNode;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

export default function Modal({ children, setModalOpen, openModal }: iProps) {
  const modalRoot = document.getElementById("portal") as HTMLElement;

  if (!openModal) return null;

  return createPortal(
    <>
      <div className="portal-wrapper">
        <div className="modal-background" />
        <div className="modal-window">
          <button className="close-button" onClick={() => setModalOpen(false)}>
            x
          </button>
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
}
