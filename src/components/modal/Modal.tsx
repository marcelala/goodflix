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

  // <>  Again you are using the <> when you are returning only 1 tag. The <> is used when for some reason you need to return more than 1 tag at the same level. -1
  /**
   *
   * THIS IS OK ✅
   * <>
   *   <p>Hello World</>
   *   <button>Click me</button>
   * </>
   * // Returning 2 tags: p and button.
   *
   * THIS IS NOT OK ❌
   * <>
   *   <div>
   *     <p>Hello World</>
   *     <button>Click me</button>
   *   </div>
   * </>
   * // Returning 1 tag: div (regardless that inside div there are 2 other tags)
   */
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
