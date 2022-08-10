import styles from "./Cadastro.module.css";
import Input from "../../components/Input";
import Botao from "../../components/BotaoSubmit";
import { useState } from "react";
function Cadastro() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(1);

  function handleOnChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  return (
    <form className={styles.form} onSubmit={() => alert(Object.values(value))}>
      <div className={styles.titulo}>
        <h1>Cadastre-se</h1>
      </div>
      <div className={styles.container}>
        <Input
          placeholder="Nome Completo"
          height="20px"
          width="250px"
          name="nome"
          onChange={handleOnChange}
        />
        <Input
          placeholder="E-mail"
          height="20px"
          width="250px"
          name="email"
          onChange={handleOnChange}
        />
        <Input
          placeholder="Apelido"
          height="20px"
          width="250px"
          name="apelido"
          onChange={handleOnChange}
        />
        <Input
          placeholder="Senha"
          height="20px"
          width="250px"
          name="senha"
          type="password"
          onChange={handleOnChange}
        />
        <div>
          <input
            type="checkbox"
            value={checked}
            name="termos"
            onChange={(e) => setChecked(e.target.value ? true : false)}
          />
          <label htmlFor="">Li e concordo com os termos.</label>
        </div>
        {(checked && (
          <div>
            <Botao texto="Cadastrar" disabled={false} />
          </div>
        )) || (
          <div>
            <Botao texto="Cadastrar" disabled={true} />
          </div>
        )}
      </div>
    </form>
  );
}

export default Cadastro;
