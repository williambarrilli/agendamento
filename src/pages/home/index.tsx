import CardComponent from "../../components/card";
import { useGetShopsListHook } from "../../hook/getShopsList";

export default function Home() {
  const { data, isLoading, error } = useGetShopsListHook();

  if (isLoading) return <>carregando...</>;
  if (error) return <>Ocorreu um erro inesperado</>;
  return (
    <>
      {data?.map((loja, index) => (
        <div key={index}>
          <CardComponent image={loja.url} title={loja.name} url={loja.url} />
        </div>
      ))}
    </>
  );
}
