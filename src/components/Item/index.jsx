import { useContext } from "react";
import styles from "./Item.module.css";
import { CarrinhoContext } from "../../context/CarrinhoProvider";
import BotaoCarrinho from "../BotaoCarrinho";
function Item({ img, descricao, titulo, preco, produto, id }) {
  const { addItemAoCarrinho } = useContext(CarrinhoContext);

  function filtroCaracteres(desc) {
    if (desc.length < 20) {
      return desc;
    }
    return `${desc.substring(0, 23)}...`;
  }
  return (
    <div className={styles.container}>
      <div>
        <img src={img} alt={descricao} className={styles.img} />
      </div>
      <div className={styles.titulo}>
        <p>{filtroCaracteres(titulo).toUpperCase()}</p>
      </div>
      <div className={styles.preco}>
        <p>R${preco}</p>
      </div>
      <div>
        <BotaoCarrinho
          click={() => {
            addItemAoCarrinho(produto);
          }}
          addOuRemove="Add ao Carrinho"
        ></BotaoCarrinho>
      </div>
    </div>
  );
}

export default Item;
