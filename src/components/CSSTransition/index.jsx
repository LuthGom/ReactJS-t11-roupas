import ReactLoading from "react-loading";
import styles from "./CSSTransition.module.css";
export const Examplo = ({ type, color }) => {
  return (
    <div className={styles.container}>

    <ReactLoading type={type} color={color} className={styles.loading} />
    </div>
  );
};
