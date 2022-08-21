import Modal from "react-modal";
import ListaDeCompras from "../ListaDeCompras";
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
      
  

          <ListaDeCompras botaoNome="X" onClick={onClick} containerListaCards={styles.containerListaCards} modalFooter={styles.modalFooter} finalizarCompra={styles.finalizarCompra} clickFinalizar={onClick}/>
  
   
    </Modal>
  );
}
