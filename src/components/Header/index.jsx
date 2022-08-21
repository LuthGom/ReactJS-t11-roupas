import styles from "./Header.module.css";
import logo1 from "../../assets/Logotipos/1.png";
import logo2 from "../../assets/Logotipos/2.png";
import NavBar from "../NavBar";
import Categorias from "../Categorias";
import { Link } from "react-router-dom";
import BotaoCarrinho from "../BotaoCarrinho";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { CarrinhoContext } from "../../context/CarrinhoProvider";
import { useState } from "react";
import CarrinhoModal from "../CarrinhoModal";
import { useContext } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
function Home() {
  const { lista } = useContext(CarrinhoContext);
  const auth = useAuth();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [btnList, setBtnList] = useState(false);

  function openOrClose() {
    modalIsOpen === false ? setIsOpen(true) : setIsOpen(false)
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        {auth.email && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: 0,
            }}
          >
            <p style={{ paddingRight: "0.3em" }}>Olá, {auth.email}</p>
            <button
              onClick={() => {
                setBtnList(true);
              }}
              style={{ background: "none", border: "none" }}
            >
              {<FontAwesomeIcon icon={faSquareCaretDown} />}
            </button>
            {(btnList === false && (
              <div style={{ display: "none" }}>
                <button
                  onClick={() => auth.logout()}
                  style={{ background: "none", border: "none" }}
                >
                  Logout
                </button>
              </div>
            )) || (
                <div style={{ display: "block" }}>
                  <button
                    onClick={() => auth.logout()}
                    style={{ background: "none", border: "none" }}
                  >
                    Logout
                  </button>
                </div>
              )}
          </div>
        )}

        <BotaoCarrinho
          addOuRemove={<FontAwesomeIcon icon={faCartShopping} />}
          click={openOrClose}
          counter={lista.length}
        ></BotaoCarrinho>
        <CarrinhoModal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          onClick={openOrClose}
        />
      </div>
    </header>
  );
}

export default Home;
