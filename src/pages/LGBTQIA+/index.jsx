import styles from "./LGBTQIA+.module.css";
import Item from "../../compenents/Item";
import blusaUm from "../../assets/LGBTQIA+/blusa_tematica_1.jpg";
import blusaDois from "../../assets/LGBTQIA+/blusa_tematica_2.jpg";
import blusaTres from "../../assets/LGBTQIA+/blusa_tematica_3.jpg";
import blusaQuatro from "../../assets/LGBTQIA+/blusa_tematica_4.jpg";
import cropped from "../../assets/LGBTQIA+/cropped.jpg";
import jaqueta from "../../assets/LGBTQIA+/jaqueta.jpg";
import sobretudo from "../../assets/LGBTQIA+/sobretudo.jpg";

function LGBT() {
  return (
    <div className={styles.container}>
      <Item
        img={blusaUm}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Bermuda Jeans"
        preco="75,00"
      />

      <Item
        img={blusaDois}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Branca"
        preco="75,00"
      />
      <Item
        img={blusaTres}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Estampada"
        preco="75,00"
      />
      <Item
        img={blusaQuatro}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Listrada"
        preco="75,00"
      />
      <Item
        img={cropped}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Blusa Listrada Vertical"
        preco="75,00"
      />
      <Item
        img={jaqueta}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Casaco"
        preco="75,00"
      />
      <Item
        img={sobretudo}
        descricao="Blusinha rosa estempada com gola aberta e manga rodada."
        titulo="Chapéu"
        preco="75,00"
      />
    </div>
  );
}

export default LGBT;
