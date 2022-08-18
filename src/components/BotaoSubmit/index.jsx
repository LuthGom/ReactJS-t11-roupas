import styles from "./BotaoSubmit.module.css";

function Botao({ texto, disabled,onClick }) {
  return (
    <button type="submit" disabled={disabled} onClick={onClick} className={styles.button}>
      {texto}
    </button>
  );
}

export default Botao;
