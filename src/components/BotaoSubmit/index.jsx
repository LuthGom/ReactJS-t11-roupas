import styles from "./BotaoSubmit.module.css";

function Botao({ texto, disabled }) {
  return (
    <button type="submit" disabled={disabled} className={styles.button}>
      {texto}
    </button>
  );
}

export default Botao;
