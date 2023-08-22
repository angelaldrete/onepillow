import React from "react";
import ReactDom from "react-dom";
import { MdClose } from "react-icons/md";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  actions,
  open,
  onClose,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  return (
    open && (
      <div className={"modal " + (isVisible ? "modal--visible" : "")}>
        <div
          className={
            "modal__content " + (isVisible ? "modal__content--visible" : "")
          }
        >
          <div className="modal__header">
            <h2 className="modal__title">{title}</h2>
            <div className="modal__close">
              <MdClose className="modal__icon" onClick={handleClose} />
            </div>
          </div>

          <div className="modal__message">{children}</div>
          {actions && (
            <div className="modal__actions">
              {actions}
              <button className="btn btn--cancel" onClick={handleClose}>
                Cancelar
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
