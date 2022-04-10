import styles from "./Input.module.css";
function Input({ value, placeholder, height, width, onChange, name , type}) {
  return (
    <div className={styles.container}>
      <input type={type} value={value} className={styles.input} placeholder={placeholder} style={{height: height, width: width}} onChange={onChange} name={name} />
    </div>
  );
}

export default Input;
