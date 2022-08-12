import React, { useEffect, useState } from "react";
import { produtosUrl } from "../../../services/apis";
import Item from "../../../components/Item";
import styles from "../Categorias.module.css";
export default function Feminino() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    try {
      fetch(produtosUrl("/masculinos"))
        .then((res) => res.json())
        .then((data) => {
          setProdutos(data.Produtos);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("erro: ", error);
    }
  }, []);

  return (
    <div className={styles.container}>
      {produtos.map((produto, index) => {
        return (
          <Item
            key={index}
            img={produto.url_imagem}
            titulo={produto.titulo}
            preco={produto.preco}
            descricao={produto.descricao}
            produto={produto}
          />
        );
      })}
    </div>
  );
}