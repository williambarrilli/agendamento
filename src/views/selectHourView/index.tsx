import Button from "../../components/button";
import ListComponents from "../../components/list";
import { EnumMenu } from "../../types/enums";
import styles from "./styles.module.scss";

interface SelectHourViewProps {
  setHourSelected: (value: string) => void;
  dateSelected: string;
  onBack: (value: EnumMenu) => void;
}

export default function SelectHourView({
  setHourSelected,
  dateSelected,
  onBack,
}: SelectHourViewProps) {
  return (
    <>
      <div className={styles.container}>Selecione o horario</div>
      <div className={styles.container}>Data selecionada: {dateSelected}</div>
      <div className={styles.container}>Horarios disponiveis</div>
      <ListComponents setHourSelected={(value) => setHourSelected(value)} />

      <Button onclick={() => onBack(EnumMenu.SELECTDATE)} text={"Voltar"} />
    </>
  );
}
