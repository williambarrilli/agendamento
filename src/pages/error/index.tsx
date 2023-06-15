import styles from "./styles.module.scss";
import React from "react";

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Oops!</h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Error;
