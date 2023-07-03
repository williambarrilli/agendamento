import { logPageAnalytics } from "utils/analitycs";
import styles from "./styles.module.scss";
import { useEffect } from "react";

interface ErrorProps {
  message: string;
  error?: string;
  url?: string;
}

const Error = ({ message, error, url }: ErrorProps) => {
  useEffect(() => {
    logPageAnalytics("Error", message, { error, url });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Oops!</h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Error;
