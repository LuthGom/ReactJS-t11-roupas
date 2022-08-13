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
  const { lista, incrementaProdutos, decrementaOuRemove, qtde } =
    useContext(CarrinhoContext);

  return (
    <Modal
      overlayClassName={styles.overlayContainer}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentElement={contentLabel}
      className={styles.containerModal}
    >
      <div>
        {lista.map((produto, index) => {
          return (
            <div className={styles.containerCard} key={index}>
              <img src={produto.url_imagem} />
              <p className={styles.titulo}>{produto.titulo}</p>
              <p className={styles.preco}> R$ {produto.preco}</p>
              <p className={styles.descricao}>{produto.descricao}</p>
              <div className={styles.counter}>
                <BotaoCarrinho
                  addOuRemove="+"
                  click={() => incrementaProdutos(produto)}
                ></BotaoCarrinho>
                <p>{qtde.filter((item) => item == produto).length}</p>
                <BotaoCarrinho
                  addOuRemove="-"
                  click={() => {
                    decrementaOuRemove(produto);
                    if (qtde.filter((item) => item == produto).length == 0) {
                      decrementaOuRemove(produto);
                    }
                  }}
                ></BotaoCarrinho>
              </div>
            </div>
          );
        })}
        <div className={styles.modalFooter}>
          <button className={styles.closeButton} onClick={onClick}>
            {botaoNome}
          </button>
          <span>
            Total: R$
            {qtde.length > 0 &&
              qtde
                .map((produto) => {
                  let qtdeDoProduto = qtde.filter(
                    (item) => item == produto
                  ).length;
                  if ((qtdeDoProduto = 1)) {
                    return produto.preco;
                  }
                  return qtdeDoProduto * produto.preco;
                })
                .reduce((atual, acum) => {
                  return atual + acum;
                })}
          </span>
        </div>
      </div>
    </Modal>
  );
}
