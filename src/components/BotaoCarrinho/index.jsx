import styles from "./BotaoCarrinho.module.css";

export default function BotaoCarrinho({ addOuRemove, counter, click }) {
  return (
    <>
      <button onClick={click}
      className={styles.botaoCarrinho}>
        {addOuRemove} {counter}
      </button>
    </>
  );
}
