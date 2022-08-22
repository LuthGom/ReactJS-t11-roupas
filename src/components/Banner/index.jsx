import banner from "../../assets/banner-promocional.png";
import styles from "./Banner.module.css";
import {Link} from "react-router-dom"
function Banner() {
  return (
    <>
      <div className={styles.descricaoContainer}>
        <div className={styles.descricao}>
          <p>parcele em</p>
          <span> 6X SEM JUROS</span>
        </div>
        <div className={styles.descricao}>
          <span>FRETE GRÁTIS</span>
          <p>acima de R$49</p>
        </div>
        <div className={styles.descricao}>
          <span>10% OFF</span>
          <p>na sua primeira compra</p>
        </div>
      </div>
      <div className={styles.banner}>
        <Link to="/masculino">
        <img
          src={banner}
          alt="banner promocional com fotos de roupas masculinas e descontos e site da loja"
          
          />
          </Link>
      </div>
    </>
  );
}

export default Banner;
