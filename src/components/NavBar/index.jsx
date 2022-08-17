import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
function NavBar() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      {(auth.email && (
        <Link style={{ display: "none" }} to="/login">
          Login/Cadastro
        </Link>
      )) || <Link to="/login">Login/Cadastro</Link>}
      <Link to="/contato">Contato</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default NavBar;
