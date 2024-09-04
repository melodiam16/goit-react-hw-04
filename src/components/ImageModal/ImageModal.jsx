import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    background: "none",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <img src={imageUrl} alt="Large view" className={css.img} />
      </Modal>
    </div>
  );
}
