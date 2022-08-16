import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../../components/BotaoSubmit";
import Input from "../../components/Input";
import styles from "./Login.module.css";
import {useAuth} from "../../context/AuthProvider/useAuth"
function Login() {
  const [value, setValue] = useState({ email: "", senha: "" });
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  function handleOnChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  async function onFinish(email, senha) {
    try {
      await authenticate(email, senha);
      navigate("/");
    } catch (error) {
      alert("Email ou senha inválidos!");
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        onFinish(value.email, value.senha);
      }}
    >
      <div className={styles.titulo}>
        <h1>Login</h1>
      </div>
      <div className={styles.container}>
        <Input
          placeholder="E-mail"
          height="20px"
          width="250px"
          onChange={handleOnChange}
          name="email"
        />
        <Input
          placeholder="Senha"
          height="20px"
          width="250px"
          type="password"
          name="senha"
          onChange={handleOnChange}
        />
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
