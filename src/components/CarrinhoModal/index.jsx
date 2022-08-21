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
      
  

          <ListaDeCompras botaoNome="X" botaoFinalizarNome="Ver Carrinho" onClick={onClick} containerCard={styles.containerCard} containerListaCards={styles.containerListaCards} titulo={styles.titulo} listaFooter={styles.modalFooter} finalizarCompra={styles.finalizarCompra} clickFinalizar={onClick}/>
  
   
    </Modal>
  );
}
