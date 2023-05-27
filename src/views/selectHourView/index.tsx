import Button from "../../components/button";
import ListComponents from "../../components/list";
import ModalComponent from "../../components/modal";
import styles from "./styles.module.scss";

interface SelectHourViewProps {
  isOpen: boolean;
  onClose: () => void;
  setDateSelected: (value: string) => void;
  dateSelected: string;
}

export default function SelectHourView({
  isOpen = false,
  onClose,
  setDateSelected,
  dateSelected,
}: SelectHourViewProps) {
  if (isOpen)
    return (
      <ModalComponent isOpen={isOpen} onClose={onClose}>
        <div className={styles.container}>Selecione o horario</div>
        <div className={styles.container}>Data selecionada: {dateSelected}</div>
        <div className={styles.container}>Horarios disponiveis</div>
        <ListComponents dateSelected={dateSelected} />
        <Button onclick={() => setDateSelected("")} text={"Voltar"} />
        {/* <Button onclick={() => setDateSelected("")} text={"Agendar"} /> */}
      </ModalComponent>
    );

  return <></>;
}
