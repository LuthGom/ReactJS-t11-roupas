import styles from "./Header.module.css";
import logo1 from "../../assets/Logotipos/1.png";
import logo2 from "../../assets/Logotipos/2.png";
import NavBar from "../NavBar";
import Categorias from "../Categorias";
import { Link } from "react-router-dom";
import BotaoCarrinho from "../BotaoCarrinho";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CarrinhoContext } from "../../context/CarrinhoProvider";
import { useContext } from "react";
import { useState } from "react";
import CarrinhoModal from "../CarrinhoModal";
function Home() {
  const { lista } = useContext(CarrinhoContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <header className={styles.container}>
      <div className={styles.categorias}>
        <Categorias />
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.logoImg}
            src={logo1}
            alt="Logo tipo da loja com imagem de tubarão com fundo branco e arc-íris"
          />
          <img
            className={styles.logoImg}
            src={logo2}
            alt="Logo tipo da loja com imagem de tubarão com fundo preto e arc-íris"
          />
        </Link>
      </div>
      <NavBar />
      <div>
        <BotaoCarrinho
          addOuRemove={<FontAwesomeIcon icon={faCartShopping} />}
          click={modalIsOpen === false ? openModal : closeModal}
          counter={lista.length}
        ></BotaoCarrinho>
        <CarrinhoModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          onClick={closeModal}
          botaoNome="X"
        />
      </div>
    </header>
  );
}

export default Home;
