import ReactDOM from "react-dom";
import Modal from "../Modal";
import { useModal } from "../../../contexts/ModalProvider";
import ImageModal from "./ImageModal";

const PortalModal = () => {
  const { isOpen, imgSrc, closeModal } = useModal();

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal") as HTMLElement;

  return isOpen
    ? ReactDOM.createPortal(
        <Modal>
          <ImageModal src={imgSrc} closeModal={closeModal} />
        </Modal>,
        modalRoot
      )
    : null;
};
export default PortalModal;
