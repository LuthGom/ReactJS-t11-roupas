import { useState } from "react";
import { useContext } from "react";
import Modal from "react-modal";
import { CarrinhoContext } from "../../context/CarrinhoProvider";
import BotaoCarrinho from "../BotaoCarrinho";
import styles from "./Modal.module.css";
Modal.setAppElement("#root");

export default function CarrinhoModal({
  isOpen,
  onRequestClose,
  contentLabel,
  onClick,
  botaoNome,
}) {
  const [counterQtde, setCounter] = useState(1);
  const { lista } = useContext(CarrinhoContext);
  function contador() {
    return setCounter(counterQtde + 1);
  }
  return (
    <div className={styles.container}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentElement={contentLabel}
        className={styles.containerModal}
      >
        <button className={styles.closeButton} onClick={onClick}>
          {botaoNome}
        </button>
        {lista.map((produto, index) => {
          return (
            <div className={styles.containerCard} key={index}>
              <img src={produto.url_imagem} />
              <p className={styles.titulo}>{produto.titulo}</p>
              <p className={styles.preco}> R$ {produto.preco}</p>
              <p className={styles.descricao}>{produto.descricao}</p>
              <p>{counterQtde}</p>
              <div className={styles.counter}>
                <BotaoCarrinho
                  addOuRemove="+"
                  click={() => contador()}
                ></BotaoCarrinho>
                <p>{counterQtde}</p>
                <BotaoCarrinho
                  addOuRemove="-"
                  click={() => {
                    if (counterQtde > 0) {
                      return setCounter(counterQtde - 1);
                    }else if(counterQtde === 0) {
                      
                    }
                  }}
                ></BotaoCarrinho>
              </div>
            </div>
          );
        })}
        {lista.length > 0 &&
          lista
            .map((produto) => {
              if (counterQtde > 0) {
                return counterQtde * produto.preco;
              } else {
                return produto.preco;
              }
            })
            .reduce((atual, acum) => {
              return (
                <div>
                  <p>{atual + acum}</p>
                </div>
              );
            })}
      </Modal>
    </div>
  );
}
