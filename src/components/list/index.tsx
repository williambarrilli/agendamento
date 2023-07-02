import { useMemo } from "react";
import { Reserved } from "../../types/reserved";
import styles from "./styles.module.scss";
import objStr from "obj-str";
import { getSessionStorage } from "utils/sessionStorage";
import { Shop } from "types/shop";

interface ListComponentsProps {
  setHourSelected: (value: string) => void;
  reservedList: Reserved[];
}

export default function ListComponents({
  setHourSelected,
  reservedList,
}: ListComponentsProps) {
  const shop: Shop = getSessionStorage("shopData");

  const listHours = useMemo(() => {
    if (!reservedList.length) {
      return shop?.hoursShopOpen?.map((item) => {
        return { hour: item, hasReservation: false };
      });
    }

    return shop?.hoursShopOpen?.map((hour) => {
      const hasReservation = !!reservedList?.filter(
        (reserva) => reserva.hour === hour
      ).length;
      return { hour, hasReservation };
    });
  }, [reservedList, shop.hoursShopOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {listHours.map((horario, index) => (
          <button
            className={`${objStr({
              [styles["itemHour"]]: true,
              [styles["itemHour-reserved"]]: !!horario.hasReservation,
            })}`}
            disabled={horario.hasReservation}
            key={index}
            onClick={() => setHourSelected(horario.hour)}
          >
            {horario.hour}
          </button>
        ))}
      </div>
    </div>
  );
}
