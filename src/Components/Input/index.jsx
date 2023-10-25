import styles from "./input.module.css";

const Input = ({ placeholder, type, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      {...rest}
    />
  );
};

export default Input;
