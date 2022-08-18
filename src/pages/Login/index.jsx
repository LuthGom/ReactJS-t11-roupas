import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../../components/BotaoSubmit";
import Input from "../../components/Input";
import styles from "./Login.module.css";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { ToastContainer, toast } from "material-react-toastify";
import { Examplo } from "../../components/CSSTransition";
function Login() {
  const [value, setValue] = useState({ email: "", senha: "" });
  const [loading, setLoaging] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  function handleOnChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  const aviso = (msg) => toast.error(msg);
  async function onFinish(email, senha) {
    if (!email || !senha) {
      return aviso("É preciso preencher todos os campos");
    } else {
      try {
        await auth.authenticate(email, senha);
        setLoaging(true);
        setTimeout(() => {
          navigate("/sobre");
        }, 2000);
      } catch (error) {
        if (error) {
          return aviso("Email ou senha inválidos!");
        }
      }
    }
  }
  if (loading) {
    return <Examplo type="balls" color="#000" />;
  } else {
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
            <ToastContainer position="top-center" />
          </div>
        </div>
        <div className={styles.linkCadastro}>
          <p>Não tem uma conta ainda? </p>
          <Link to="/cadastro">Clique aqui!</Link>
        </div>
      </form>
    );
  }
}
export default Login;
