import styles from "./Button.module.css";
import clsx from "clsx";
const Button = ({ children, primary }) => {
  const classes = clsx(styles.btn, { [styles.primary]: primary });
  return <button className={classes}>{children}</button>;
};

export default Button;
