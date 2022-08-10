import BotaoCategoria from "../BotaoCategoria";
import styles from "./Categorias.module.css";
function Categorias() {
  return (
    <div className={styles.container}>
        <BotaoCategoria categoria="Masculino" to="/masculino"/>
        <BotaoCategoria categoria="Feminino" to="/feminino"/>
        <BotaoCategoria categoria="Temática LGBTQIA" to="/lgbt"/>
    </div>
  );
}

export default Categorias;
