import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.colunas}>
          <p>EMPRESA</p>
          <Link to="/sobre">Sobre Nós</Link>
          <Link to="/">Carreiras</Link>
          <Link to="/">Blog da Empresa</Link>
        </div>
        <div className={styles.colunas}>
          <p>Ajuda</p>
          <Link to="/">Faq</Link>
          <Link to="/">Chat Online</Link>
          <Link to="/">WhatsApp</Link>
        </div>
        <div className={styles.colunas}>
          <p>Redes Sociais</p>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Linkedin</Link>
          <Link to="/">YouTube</Link>
        </div>
      </div>
      <div className={styles.colunas}>
        <span className={styles.copy}>
          <p>© Todos os Direitos Reservados T11 Roupas</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
