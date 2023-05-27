import ModalComponent from "../../components/modal";
import styles from "./styles.module.scss";

interface SelectHourViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SelectHourView({
  isOpen = false,
  onClose,
}: SelectHourViewProps) {
  if (isOpen)
    return (
      <ModalComponent isOpen={isOpen} onClose={onClose}>
        <div className={styles.container}>Selecione o horario</div>
      </ModalComponent>
    );

  return <></>;
}
