import Input from "../../components/Input";
import styles from "./Contato.module.css";
import contatoImg from "../../assets/contato.jpg";
function Contato() {
  return (
    <>
      <div>
        <h1>Fale Conosco</h1>
      </div>
      <div className={styles.containerFlex}>
        <div>
          <img src={contatoImg} alt="" width="400px" />
        </div>
        <section className={styles.containerGrid}>
          <Input placeholder="Nome Completo" height="15px" />
          <Input placeholder="E-mail" height="15px" />
          <Input placeholder="Celular" height="15px" />
          <Input placeholder="Escreva aqui a sua mensagem" height="50px" />
          <div>
            <button>Enviar</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contato;
