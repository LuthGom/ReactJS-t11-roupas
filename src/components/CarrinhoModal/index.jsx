import Modal from "react-modal";
import useCarrinho from "../../hooks/useCarrinho/useCarrinho";
import styles from "./Modal.module.css";

Modal.setAppElement("#root");

export default function CarrinhoModal({
  isOpen,
  onRequestClose,
  contentLabel,
onClick
}) {

  
  return (
    <Modal
      overlayClassName={styles.overlayContainer}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentElement={contentLabel}
      onAfterOpen={styles.contentContainer}
      className={styles.containerModal}
    >
      {useCarrinho("X", onClick)}
    </Modal>
  );
}
