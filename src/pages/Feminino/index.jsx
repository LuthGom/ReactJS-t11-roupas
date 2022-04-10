import Item from "../../compenents/Item";
import styles from "./Feminino.module.css";
import blusinha from "../../assets/feminina/blusinha.jpg";
import cachecol from "../../assets/feminina/cachecol.jpg";
import casacao from "../../assets/feminina/casacao.jpg";
import chapeu from "../../assets/feminina/chapeu.jpg";
import joias from "../../assets/feminina/joias.jpg";
import turbante from "../../assets/feminina/turbante.jpg";
import vestido from "../../assets/feminina/vestido.jpg";

function Feminino() {
  return (
    <div className={styles.container}>
      <Item
        img={blusinha}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusinha Rosa"
        preco="75,00"
      />

      <Item
        img={cachecol}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Cachecol"
        preco="75,00"
      />
      <Item
        img={casacao}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Casaco"
        preco="75,00"
      />
      <Item
        img={chapeu}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Chapeu"
        preco="75,00"
      />
      <Item
        img={joias}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Joias"
        preco="75,00"
      />
      <Item
        img={turbante}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Turbante"
        preco="75,00"
      />
      <Item
        img={vestido}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Vestido"
        preco="75,00"
      />
    </div>
  );
}

export default Feminino;
