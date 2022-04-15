import { useState } from "react";
import { Link } from "react-router-dom";
import Botao from "../../compenents/BotaoSubmit";
import Input from "../../compenents/Input";
import styles from "./Login.module.css";
function Login() {
  const [value, setValue] = useState("");

  function handleOnChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  return (
    <form className={styles.form} onSubmit={() => console.log(Object.values(value))}>
      <div className={styles.titulo}>
        <h1>Login</h1>
      </div>
      <div className={styles.container}>
        <Input placeholder="E-mail" height="20px" width="250px" onChange={handleOnChange} name="email" />
        <Input placeholder="Senha" height="20px" width="250px" type="password" name="senha" onChange={handleOnChange}/>
        <div>
          <Botao texto="Login" />
        </div>
      </div>
      <div className={styles.linkCadastro}>
        <p>Não tem uma conta ainda? </p>
        <Link to="/cadastro">Clique aqui!</Link>
      </div>
    </form>
  );
}

export default Login;
