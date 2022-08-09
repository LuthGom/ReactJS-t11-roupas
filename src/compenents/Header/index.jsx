import styles from "./Header.module.css";
import logo1 from "../../assets/Logotipos/1.png";
import logo2 from "../../assets/Logotipos/2.png";
import NavBar from "../NavBar";
import Categorias from "../Categorias";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className={styles.container}>
      <div className={styles.categorias}>
        <Categorias />
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={logo1}
            alt="Logo tipo da loja com imagem de tubarão com fundo branco e arc-íris"
         
          />
          <img
            src={logo2}
            alt="Logo tipo da loja com imagem de tubarão com fundo preto e arc-íris"
           
          />
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export default Home;
