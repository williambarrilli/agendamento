import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function ModalComponent({ isOpen, children }: ModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>;
    </div>
  );
}
