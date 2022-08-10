import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className={styles.container}>
      <Link to="/login">Login/Cadastro</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default NavBar;
