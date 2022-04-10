import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.colunas}>
          <p>EMPRESA</p>
          <a href="">Sobre Nós</a>
          <a href="">Carreiras</a>
          <a href="">Blog da Empresa</a>
        </div>
        <div className={styles.colunas}>
          <p>Ajuda</p>
          <a href="">Faq</a>
          <a href="">Chat Online</a>
          <a href="">WhatsApp</a>
        </div>
        <div className={styles.colunas}>
          <p>Redes Sociais</p>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Linkedin</a>
          <a href="">YouTube</a>
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
