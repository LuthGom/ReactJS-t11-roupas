import React from 'react'
import styles from "./Carrinho.module.css";
import ListaDeCompras from "../../components/ListaDeCompras"
function Carrinho() {

  return (
    <div className={styles.containerLista}>
      <ListaDeCompras containerListaCards={styles.containerListaCards} listaFooter={styles.listaFooter} containerCard={styles.containerCard} botaoFinalizarNome="Continuar Compra" />
    </div>
  )
}

export default Carrinho