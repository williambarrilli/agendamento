import styles from "./styles.module.scss";

export default function SelectHourView({ isOpen = false }) {
  if (isOpen) return <div className={styles.container}>oiiiiiiiii</div>;
  return <></>;
}
