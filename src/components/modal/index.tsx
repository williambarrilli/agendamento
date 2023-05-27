import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ModalComponent({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>;
    </div>
  );
}
