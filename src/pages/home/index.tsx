import CardComponent from "../../components/card";
import { useGetShopsListHook } from "../../hook/getShopsList";
import styles from "./styles.module.scss";
import Loading from "../../components/loading";
import Error from "../../components/error-component";

export default function Home() {
  const { data, isLoading, error } = useGetShopsListHook();

  if (isLoading) return <Loading />;
  if (error) return <Error message="Ocorreu um erro inesperado" />;
  return (
    <div className={styles.container}>
      {data?.map((loja, index) => (
        <div key={index}>
          <CardComponent image={loja.url} title={loja.name} url={loja.url} />
        </div>
      ))}
    </div>
  );
}
