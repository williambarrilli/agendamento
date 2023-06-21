import CardComponent from "../../components/card";
import { useGetShopsListHook } from "../../hook/getShopsList";
import styles from "./styles.module.scss";
import Loading from "../../components/loading";
import Error from "../../pages/error";
import ReservedComponent from "../../components/addFormReserved";
import Header from "../../components/header";
import iconMR from "../../assets/images/iconMR.png";
import Button from "../../components/button";

export default function Home() {
  const { data, isLoading, error } = useGetShopsListHook();

  if (isLoading) return <Loading />;
  if (error) return <Error message="Ocorreu um erro inesperado." />;
  return (
    <div>
      <Header logoImage={iconMR} />
      <div className={styles.presentation}>
        <h2>
          Agendamento <span className={styles.orange}>simplificado!</span>
        </h2>
        <p className={styles.subtitle}>
          Bem-vindo a nossa página de agendamento, a solução perfeita para
          otimizar a gestão do tempo e aumentar a eficiência do seu negócio!
          Entre em contato para uma demonstração personalizada!{" "}
        </p>
        <Button
          styleOption="alternative"
          size="md"
          text="Contato"
          onclick={() => alert}
        />
      </div>
      <div className={styles.container}>
        {data?.map((loja, index) => (
          <div key={index}>
            <CardComponent image={loja.url} title={loja.name} url={loja.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
