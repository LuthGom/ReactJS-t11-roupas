import styles from "./BotaoCategoria.module.css"
import { Link } from "react-router-dom";

function BotaoCategoria({ categoria, to }) {
  return (
    
     <div className={styles.container}>
      <Link to={to} className={styles.botao}>{categoria}</Link>
    </div>
  );
}

export default BotaoCategoria;
