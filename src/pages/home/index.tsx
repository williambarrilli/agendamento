import CardComponent from "../../components/card";
import { Shop } from "../../types/shop";
import styles from "./styles.module.scss";

export default function Home() {
  const mock: Shop[] = [
    {
      name: "Ana",
      url: "ana-unhas",
      phone: "string",
      instagram: "string",
      reservedList: [],
      solicitationList: [],
      bannerImage: "string",
    },
    {
      name: "Will",
      url: "will",
      phone: "string",
      instagram: "string",
      reservedList: [],
      solicitationList: [],
      bannerImage: "string",
    },
  ];

  return (
    <>
      {mock.map((loja) => (
        <div>
          <CardComponent
            image={loja.url}
            title={loja.name}
            url={loja.url}
          ></CardComponent>
        </div>
      ))}
    </>
  );
}
