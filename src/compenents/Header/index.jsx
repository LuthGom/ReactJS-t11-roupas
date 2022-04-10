import styles from "./Header.module.css";
import logo1 from "../../assets/Logotipos/1.png";
import logo2 from "../../assets/Logotipos/2.png";
import NavBar from "../NavBar";
import Categorias from "../Categorias";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.categorias}>
        <Categorias />
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={logo1}
            alt="Logo tipo da loja com imagem de tubarão com fundo branco e arc-íris"
            width="150px"
          />
          <img
            src={logo2}
            alt="Logo tipo da loja com imagem de tubarão com fundo preto e arc-íris"
            width="150px"
          />
        </Link>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
