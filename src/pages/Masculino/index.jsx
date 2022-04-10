import styles from "./Masculino.module.css";
import Item from "../../compenents/Item";
import bermuda from "../../assets/masculina/bermuda.jpg";
import blusaBranca from "../../assets/masculina/blusa_branca.jpg";
import blusaEstampada from "../../assets/masculina/blusa_estampada.jpg";
import blusaListrada from "../../assets/masculina/blusa_listrada.jpg";
import blusaListraVertical from "../../assets/masculina/blusa_listra_vertical.jpg";
import casaco from "../../assets/masculina/casaco.jpg";
import chapeu from "../../assets/masculina/chapeu.jpg";
import terno from "../../assets/masculina/terno.jpg";
function Masculino() {
  return (
    <div className={styles.container}>
      <Item
        img={bermuda}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Bermuda Jeans"
        preco="75,00"
      />

      <Item
        img={blusaBranca}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Branca"
        preco="75,00"
      />
      <Item
        img={blusaEstampada}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Estampada"
        preco="75,00"
      />
      <Item
        img={blusaListrada}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Listrada"
        preco="75,00"
      />
      <Item
        img={blusaListraVertical}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Listrada Vertical"
        preco="75,00"
      />
      <Item
        img={casaco}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Casaco"
        preco="75,00"
      />
      <Item
        img={chapeu}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Chapéu"
        preco="75,00"
      />
      <Item
        img={terno}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Terno"
        preco="75,00"
      />
    </div>
  );
}

export default Masculino;
