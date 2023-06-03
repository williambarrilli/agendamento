import styles from "./styles.module.scss";
import bannerImage from "../../assets/bannerImage.jpg";
import ButtonsView from "../../views/home/buttonsView";
import BannerComponent from "../../components/banner";
import moment from "moment";
import ModalComponent from "../../components/modal";
import { mockHorarios } from "../../types/reserved";
moment.locale("pt-br");

export default function Home() {
  const mockList: mockHorarios = {
    horarios: [
      { hora: "08:00", reserved: true },
      { hora: "10:00", reserved: false },
    ],
  };
  return (
    <div className={styles.container}>
      <BannerComponent bannerImage={bannerImage} />
      <div>
        <h1 className={styles.text}> Juliana Silva </h1>
      </div>
      <ButtonsView />
      <ModalComponent isOpen>
        <div>
          <h1 className={styles.text}>Horários disponíveis/reservados:</h1>
          <div className={styles.grid}>
            {mockList.horarios.map((horario, index) => (
              <div key={index} className={styles.horarioContainer}>
                <p className={styles.textHorarios}>Horário: {horario.hora} </p>
                <p className={horario.reserved ? styles.red : styles.green}>
                  {horario.reserved ? " Reservado" : "Disponível"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}
